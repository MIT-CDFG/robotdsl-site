// One renderer serves every print-file preview. STL bytes are the exact pinned
// downloads in print orientation; only the view's camera and display material vary.
import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const section = document.querySelector('[data-piece-manifest]');
if (section) setupPieces(section);

function setupPieces(section) {
  const manifestURL = new URL(section.dataset.pieceManifest, document.baseURI);
  let manifest, renderer, surface, frame = 0, failed = false, activeLoads = 0;
  const loader = new STLLoader(), geometryCache = new Map(), queue = [];
  const items = [...section.querySelectorAll('[data-print-piece]')].map(row => ({
    row, preview: row.querySelector('.piece-preview'), status: row.querySelector('[data-piece-status]'),
    reset: row.querySelector('[data-piece-reset]'), key: row.dataset.printPiece, state: 'idle', near: false,
    interacted: false, scene: null, camera: null, controls: null,
  })).filter(item => item.preview);

  const say = (item, text) => { if (item.status && item.status.textContent !== text) item.status.textContent = text; };
  const fallback = item => {
    item.state = 'fallback';
    item.row.dataset.pieceState = 'fallback';
    item.preview.setAttribute('aria-busy', 'false');
    item.preview.tabIndex = -1;
    if (item.controls) item.controls.enabled = false;
    if (item.reset) item.reset.disabled = true;
    say(item, '3D unavailable');
  };
  const failRenderer = error => {
    if (failed) return;
    failed = true;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    surface?.remove();
    items.forEach(fallback);
    console.warn('Print-piece previews unavailable:', error.message);
  };
  const schedule = () => {
    if (!failed && !frame && !document.hidden) frame = requestAnimationFrame(render);
  };
  const ensureRenderer = () => {
    if (failed) throw new Error('3D renderer unavailable');
    if (renderer) return;
    surface = document.createElement('canvas');
    surface.className = 'print-pieces-canvas';
    surface.setAttribute('aria-hidden', 'true');
    Object.assign(surface.style, {
      position: 'absolute', top: '0', left: '0', width: '100%', height: `${window.innerHeight}px`,
      pointerEvents: 'none', zIndex: '1',
    });
    try {
      renderer = new THREE.WebGLRenderer({ canvas: surface, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.NeutralToneMapping;
      renderer.autoClear = false;
      document.body.append(surface);
      surface.addEventListener('webglcontextlost', event => {
        event.preventDefault();
        failRenderer(new Error('WebGL context lost'));
      });
    } catch (error) {
      failRenderer(error);
      throw error;
    }
  };
  const readManifest = () => manifest ||= fetch(manifestURL).then(async response => {
    if (!response.ok) throw new Error('Print-piece metadata unavailable');
    const data = await response.json();
    if (data.units !== 'mm' || !data.pieces) throw new Error('Invalid print-piece metadata');
    return data.pieces;
  });
  const geometryFor = url => {
    if (!geometryCache.has(url)) geometryCache.set(url, loader.loadAsync(url).catch(error => {
      geometryCache.delete(url);
      throw error;
    }));
    return geometryCache.get(url);
  };

  function fit(item) {
    const { geometry, camera, controls, center, radius } = item;
    const width = item.preview.clientWidth, height = item.preview.clientHeight;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    const direction = new THREE.Vector3(1.15, -1.5, 1.15).normalize();
    const right = new THREE.Vector3().crossVectors(camera.up, direction).normalize();
    const up = new THREE.Vector3().crossVectors(direction, right);
    const fitY = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * .86;
    const fitX = fitY * camera.aspect;
    const point = new THREE.Vector3(), vertices = geometry.attributes.position;
    let distance = 0;
    for (let index = 0; index < vertices.count; index++) {
      point.fromBufferAttribute(vertices, index).sub(center);
      distance = Math.max(distance, point.dot(direction) + Math.max(Math.abs(point.dot(right)) / fitX, Math.abs(point.dot(up)) / fitY));
    }
    if (!Number.isFinite(distance) || distance <= 0) throw new Error('Empty print-piece geometry');
    camera.position.copy(direction.multiplyScalar(distance));
    controls.target.set(0, 0, 0);
    controls.minDistance = radius * .3;
    controls.maxDistance = distance * 4;
    controls.update();
    item.width = width; item.height = height;
  }

  function keyboard(item, event) {
    if (item.state !== 'ready' || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', '+', '=', '-', '_', 'Home'].includes(event.key)) return;
    event.preventDefault();
    item.interacted = true;
    if (event.key === 'Home') { item.interacted = false; fit(item); }
    else {
      const { camera, controls } = item;
      const yUp = new THREE.Quaternion().setFromUnitVectors(camera.up, new THREE.Vector3(0, 1, 0));
      const offset = camera.position.clone().sub(controls.target).applyQuaternion(yUp);
      const spherical = new THREE.Spherical().setFromVector3(offset);
      if (event.key === 'ArrowLeft') spherical.theta -= .18;
      if (event.key === 'ArrowRight') spherical.theta += .18;
      if (event.key === 'ArrowUp') spherical.phi -= .18;
      if (event.key === 'ArrowDown') spherical.phi += .18;
      if (['+', '='].includes(event.key)) spherical.radius *= .85;
      if (['-', '_'].includes(event.key)) spherical.radius /= .85;
      spherical.phi = THREE.MathUtils.clamp(spherical.phi, .01, Math.PI - .01);
      spherical.radius = THREE.MathUtils.clamp(spherical.radius, controls.minDistance, controls.maxDistance);
      camera.position.copy(new THREE.Vector3().setFromSpherical(spherical).applyQuaternion(yUp.invert()).add(controls.target));
      controls.update();
    }
    schedule();
  }

  async function load(item) {
    item.state = 'loading';
    item.row.dataset.pieceState = 'loading';
    item.preview.setAttribute('aria-busy', 'true');
    say(item, 'Loading 3D…');
    try {
      const metadata = (await readManifest())[item.key];
      if (!metadata?.url) throw new Error('Print-piece model not listed');
      const geometry = await geometryFor(new URL(metadata.url, manifestURL).href);
      if (failed) return;
      ensureRenderer();
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      const radius = geometry.boundingSphere.radius;
      if (!Number.isFinite(radius) || radius <= 0) throw new Error('Empty print-piece geometry');
      const center = geometry.boundingBox.getCenter(new THREE.Vector3());
      const scene = new THREE.Scene();
      scene.add(new THREE.HemisphereLight(0xffffff, 0x475569, 2.5));
      const key = new THREE.DirectionalLight(0xffffff, 3);
      key.position.set(-1, -2, 4); scene.add(key);
      const fill = new THREE.DirectionalLight(0xdce8ff, 1.5);
      fill.position.set(2, 1, -1); scene.add(fill);
      const material = new THREE.MeshStandardMaterial({
        color: metadata.material === 'TPU' ? 0x303741 : 0x9db8d5,
        metalness: .06, roughness: .58, side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(center).negate();
      scene.add(mesh);
      const camera = new THREE.PerspectiveCamera(32, 1, Math.max(radius / 1000, .001), radius * 100);
      camera.up.set(0, 0, 1);
      const controls = new OrbitControls(camera, item.preview);
      Object.assign(controls, { enableDamping: false, enablePan: false, autoRotate: false });
      item.preview.style.touchAction = 'pan-y';
      item.preview.setAttribute('aria-label', `${metadata.name}. Drag to rotate; arrow keys to orbit; plus and minus to zoom; Home to reset.`);
      controls.addEventListener('change', schedule);
      controls.addEventListener('start', () => { item.interacted = true; });
      Object.assign(item, { geometry, material, scene, camera, controls, center, radius });
      fit(item);
      item.state = 'ready';
      item.preview.tabIndex = 0;
      if (item.reset) item.reset.disabled = false;
      schedule();
    } catch (error) {
      fallback(item);
      console.warn(`Print-piece preview unavailable (${item.key}):`, error.message);
    }
  }

  function drain() {
    while (!failed && activeLoads < 2 && queue.length) {
      const item = queue.shift();
      if (!item.near) { item.state = 'idle'; continue; }
      activeLoads++;
      load(item).finally(() => { activeLoads--; drain(); });
    }
  }

  function render() {
    frame = 0;
    if (!renderer || failed || document.hidden) return;
    try {
      const width = document.documentElement.clientWidth, height = window.innerHeight;
      // Scroll the previous frame with the document while the compositor is
      // ahead of JavaScript. A fixed canvas would briefly leave models floating
      // over the next row during fast scrolling, especially on touch devices.
      surface.style.transform = `translateY(${window.scrollY}px)`;
      surface.style.height = `${height}px`;
      const pixelRatio = renderer.getPixelRatio();
      if (surface.width !== Math.floor(width * pixelRatio) || surface.height !== Math.floor(height * pixelRatio)) renderer.setSize(width, height, false);
      renderer.setScissorTest(false);
      renderer.clear(true, true, true);
      renderer.setScissorTest(true);
      for (const item of items) {
        if (item.state !== 'ready') continue;
        const rect = item.preview.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= height || rect.right <= 0 || rect.left >= width || !rect.width || !rect.height) continue;
        if (item.width !== item.preview.clientWidth || item.height !== item.preview.clientHeight) {
          if (!item.interacted) fit(item);
          else {
            item.camera.aspect = rect.width / rect.height;
            item.camera.updateProjectionMatrix();
            item.width = item.preview.clientWidth; item.height = item.preview.clientHeight;
          }
        }
        const left = Math.max(0, rect.left), top = Math.max(0, rect.top);
        const right = Math.min(width, rect.right), bottom = Math.min(height, rect.bottom);
        renderer.setViewport(rect.left, height - rect.bottom, rect.width, rect.height);
        renderer.setScissor(left, height - bottom, right - left, bottom - top);
        renderer.clearDepth();
        renderer.render(item.scene, item.camera);
        item.row.dataset.pieceState = 'ready';
        item.preview.setAttribute('aria-busy', 'false');
        say(item, 'Drag to rotate');
      }
    } catch (error) { failRenderer(error); }
  }

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const item = items.find(item => item.preview === entry.target);
      item.near = entry.isIntersecting;
      if (item.near && item.state === 'idle') { item.state = 'queued'; queue.push(item); }
    }
    drain(); schedule();
  }, { rootMargin: '180px 0px' });
  const resizeObserver = new ResizeObserver(schedule);
  resizeObserver.observe(section);
  resizeObserver.observe(document.body);
  for (const item of items) {
    item.preview.tabIndex = -1;
    if (item.reset) {
      item.reset.disabled = true;
      item.reset.addEventListener('click', event => {
        event.stopPropagation();
        if (item.state !== 'ready') return;
        item.interacted = false;
        fit(item); schedule();
      });
    }
    item.preview.addEventListener('keydown', event => keyboard(item, event));
    observer.observe(item.preview);
    resizeObserver.observe(item.preview);
  }
  window.addEventListener('scroll', schedule, { passive: true, capture: true });
  window.addEventListener('resize', schedule, { passive: true });
  document.addEventListener('toggle', schedule, true);
  document.addEventListener('visibilitychange', schedule);
  window.addEventListener('pageshow', schedule);
}
