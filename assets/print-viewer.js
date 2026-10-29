// The interactive model opens with the guide. The saved render stays available
// during loading or when WebGL is unavailable. Geometry and poses come from the
// original guide's pinned library models, packaged by print_models.py.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

async function modelStage(stage) {
  const canvas = stage.querySelector('[data-print-canvas]');
  const reset = stage.querySelector('[data-print-reset]');
  const status = stage.querySelector('[data-print-status]');
  if (!canvas) return;
  let renderer, camera, controls, world, robot, frame = 0, visible = true;
  let homePosition, homeTarget, radius = 1, interacted = false;
  const show = text => { if (status) status.textContent = text; };
  const fallback = () => {
    stage.dataset.modelState = 'fallback';
    stage.setAttribute('aria-busy', 'false');
    canvas.tabIndex = -1;
    if (controls) controls.enabled = false;
    if (frame) { cancelAnimationFrame(frame); frame = 0; }
    if (reset) reset.disabled = true;
    show('3D unavailable · Showing saved view');
  };
  const render = () => {
    frame = 0;
    if (renderer && robot && visible && !document.hidden && stage.dataset.modelState === 'ready') renderer.render(world, camera);
  };
  const schedule = () => { if (!frame && visible && !document.hidden) frame = requestAnimationFrame(render); };
  const frameModel = () => {
    const box = new THREE.Box3().setFromObject(robot);
    const center = box.getCenter(new THREE.Vector3());
    radius = box.getBoundingSphere(new THREE.Sphere()).radius;
    const direction = new THREE.Vector3(1.1, -1.6, .95).normalize();
    const right = new THREE.Vector3().crossVectors(camera.up, direction).normalize();
    const up = new THREE.Vector3().crossVectors(direction, right);
    const fitY = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * .92;
    const fitX = fitY * camera.aspect;
    let distance = 0;
    const point = new THREE.Vector3();
    robot.updateMatrixWorld(true);
    robot.traverseVisible(node => {
      const vertices = node.geometry?.attributes.position;
      if (!node.isMesh || !vertices) return;
      for (let index = 0; index < vertices.count; index++) {
        point.fromBufferAttribute(vertices, index).applyMatrix4(node.matrixWorld).sub(center);
        distance = Math.max(distance, point.dot(direction) + Math.max(Math.abs(point.dot(right)) / fitX, Math.abs(point.dot(up)) / fitY));
      }
    });
    if (!Number.isFinite(distance) || distance <= 0) throw new Error('Empty model');
    homeTarget = center;
    homePosition = direction.multiplyScalar(distance).add(center);
    camera.near = Math.max(radius / 1000, .0001);
    camera.far = radius * 100;
    camera.updateProjectionMatrix();
    controls.minDistance = radius * .85;
    controls.maxDistance = distance * 3;
    camera.position.copy(homePosition);
    controls.target.copy(homeTarget);
    controls.update();
  };
  const resize = () => {
    if (!renderer) return;
    const width = canvas.clientWidth || stage.clientWidth;
    const height = canvas.clientHeight || stage.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (robot && !interacted) frameModel();
    schedule();
  };
  try {
    stage.dataset.modelState = 'loading';
    stage.setAttribute('aria-busy', 'true');
    show('Loading 3D model…');
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    world = new THREE.Scene();
    const environment = new RoomEnvironment();
    const generator = new THREE.PMREMGenerator(renderer);
    world.environment = generator.fromScene(environment, .04).texture;
    world.environmentIntensity = .8;
    environment.dispose();
    generator.dispose();
    const hemisphere = new THREE.HemisphereLight(0xffffff, 0xb2aca2, .8);
    hemisphere.position.set(0, 0, 10);
    world.add(hemisphere);
    camera = new THREE.PerspectiveCamera(30, 1, .0001, 100);
    camera.up.set(0, 0, 1);
    controls = new OrbitControls(camera, canvas);
    Object.assign(controls, { enableDamping: false, enablePan: false, autoRotate: false, maxPolarAngle: Math.PI / 2 - .015 });
    // Touch pages keep their vertical scroll; horizontal drag rotates the object.
    canvas.style.touchAction = 'pan-y';
    controls.addEventListener('change', schedule);
    controls.addEventListener('start', () => { interacted = true; });
    resize();
    const metadataURL = new URL(stage.dataset.printModel, document.baseURI);
    const response = await fetch(metadataURL);
    if (!response.ok) throw new Error('Model data unavailable');
    const metadata = await response.json();
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
    const sources = new Map();
    await Promise.all(Object.entries(metadata.meshes).map(async ([key, path]) => {
      const loaded = await loader.loadAsync(new URL(path, metadataURL).href);
      loaded.scene.traverse(node => {
        if (!node.isMesh) return;
        node.castShadow = true;
        node.receiveShadow = true;
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        for (const material of materials) material.side = THREE.DoubleSide;
      });
      sources.set(key, loaded.scene);
    }));
    const placed = (pose, key) => {
      const group = new THREE.Group();
      group.position.fromArray(pose.xyz);
      group.rotation.set(...pose.rpy, 'ZYX');
      const visual = new THREE.Group();
      visual.position.fromArray(pose.visual_xyz);
      visual.rotation.set(...pose.visual_rpy, 'ZYX');
      visual.add(sources.get(key).clone(true));
      group.add(visual);
      return group;
    };
    robot = new THREE.Group();
    for (const item of metadata.scene) {
      const group = placed(item, item.part);
      for (const link of item.links || []) group.add(placed(link, `${item.part}/${link.name}`));
      robot.add(group);
    }
    world.add(robot);
    frameModel();
    const box = new THREE.Box3().setFromObject(robot);
    const key = new THREE.DirectionalLight(0xfff8ed, 1.6);
    key.position.copy(homeTarget).add(new THREE.Vector3(-radius, -radius, radius * 6));
    key.target.position.copy(homeTarget);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.radius = 4;
    key.shadow.blurSamples = 8;
    Object.assign(key.shadow.camera, { left: -radius * 1.5, right: radius * 1.5, top: radius * 1.5, bottom: -radius * 1.5, near: radius * .1, far: radius * 8 });
    key.shadow.bias = -.0001;
    key.shadow.normalBias = radius * .002;
    world.add(key, key.target);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(radius * 8, radius * 8), new THREE.ShadowMaterial({ opacity: .11 }));
    ground.position.set(homeTarget.x, homeTarget.y, box.min.z - radius * .002);
    ground.receiveShadow = true;
    world.add(ground);
    canvas.tabIndex = 0;
    stage.dataset.modelState = 'ready';
    stage.setAttribute('aria-busy', 'false');
    show('Drag to rotate · Scroll to zoom');
    if (reset) {
      reset.disabled = false;
      reset.addEventListener('click', () => { interacted = false; frameModel(); schedule(); });
    }
    canvas.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', '+', '=', '-', '_', 'Home'].includes(event.key)) return;
      event.preventDefault();
      interacted = true;
      if (event.key === 'Home') { interacted = false; frameModel(); }
      else {
        const offset = camera.position.clone().sub(controls.target);
        const yUp = new THREE.Quaternion().setFromUnitVectors(camera.up, new THREE.Vector3(0, 1, 0));
        const spherical = new THREE.Spherical().setFromVector3(offset.applyQuaternion(yUp));
        if (event.key === 'ArrowLeft') spherical.theta -= .12;
        if (event.key === 'ArrowRight') spherical.theta += .12;
        if (event.key === 'ArrowUp') spherical.phi -= .12;
        if (event.key === 'ArrowDown') spherical.phi += .12;
        if (['+', '='].includes(event.key)) spherical.radius *= .88;
        if (['-', '_'].includes(event.key)) spherical.radius /= .88;
        spherical.phi = THREE.MathUtils.clamp(spherical.phi, .05, controls.maxPolarAngle);
        spherical.radius = THREE.MathUtils.clamp(spherical.radius, controls.minDistance, controls.maxDistance);
        camera.position.copy(new THREE.Vector3().setFromSpherical(spherical).applyQuaternion(yUp.invert()).add(controls.target));
        controls.update();
      }
      schedule();
    });
    new ResizeObserver(resize).observe(stage);
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) schedule(); }).observe(stage);
    document.addEventListener('visibilitychange', schedule);
    canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); fallback(); });
    resize();
  } catch (error) {
    fallback();
    controls?.dispose();
    renderer?.dispose();
    console.warn('Fabrication model preview unavailable:', error.message);
  }
}

for (const stage of document.querySelectorAll('[data-print-model]')) {
  const canvas = stage.querySelector('[data-print-canvas]');
  if (canvas) canvas.tabIndex = -1;
  // Let the page paint before creating the GPU context. No extra action is
  // required to rotate the model; the poster covers only loading or failure.
  requestAnimationFrame(() => setTimeout(() => modelStage(stage), 0));
}
