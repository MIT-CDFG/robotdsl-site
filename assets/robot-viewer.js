import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";

const get = (id) => document.getElementById(id);
const stage = get("robot-stage");
const canvas = get("robot-canvas");
const status = get("robot-status");
const explode = get("explode-robot");
const reset = get("reset-robot");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const designs = {
  arm_mecanum: {
    title: "Mecanum + fixed arm",
    request:
      "“Drive forward and turn to expand outward in a spiral. The arm stays fixed.”",
    description: "White mecanum robot with a fixed red arm and gripper",
  },
  tslot_mecanum: {
    title: "Mecanum + LiDAR",
    request:
      "“Move forward 1 meter and spin 90 degrees at each corner to complete a square loop.”",
    description:
      "Mecanum robot with a wooden deck, four wheels, electronics and a top LiDAR",
  },
  open_omni: {
    title: "Four-wheel omni platform",
    request:
      "“Drive forward 1 meter and alternate left and right spins to trace an S pattern.”",
    description:
      "OpenOmni platform with four omni wheels and mounted electronics",
  },
};
let activeDesign = "arm_mecanum";
let renderer, scene, camera, controls, ground;
let robot,
  moving = [],
  progress = 0,
  goal = 0,
  previousExpansion = 0,
  expansionScale = 1;
let requestId = 0,
  visible = true,
  frame = 0,
  last = 0;
const homePosition = new THREE.Vector3();
const homeTarget = new THREE.Vector3();
const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);

function setDescription(id) {
  const design = designs[id];
  activeDesign = id;
  get("robot-title").textContent = design.title;
  get("robot-request").textContent = design.request;
  get("robot-poster").src = `assets/gallery/${id}-poster.png`;
  get("robot-poster").alt = "Generated design: " + design.description;
  get("reference-image").src = `assets/gallery/${id}-input.png`;
  get("reference-image").alt = "Input reference for " + design.title;
  get("reference-link").href = `assets/gallery/${id}-input.png`;
  canvas.setAttribute(
    "aria-label",
    `${design.description}. Drag or use arrow keys to rotate. Plus and minus zoom. Use Explode to inspect components.`,
  );
  document.querySelectorAll("[data-design]").forEach((button) => {
    const selected = button.dataset.design === id;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}
function dispose(model) {
  if (!model) return;
  model.traverse((node) => {
    node.geometry?.dispose();
    if (node.material) {
      for (const material of Array.isArray(node.material)
        ? node.material
        : [node.material]) {
        for (const value of Object.values(material))
          if (value?.isTexture) value.dispose();
        material.dispose();
      }
    }
  });
}
function failed(error) {
  stage.classList.remove("is-ready");
  stage.setAttribute("aria-busy", "false");
  status.hidden = false;
  status.textContent = "3D unavailable · showing the saved render";
  explode.disabled = true;
  reset.disabled = true;
  canvas.tabIndex = -1;
  console.warn("Robot model unavailable:", error);
}
function render(now = performance.now()) {
  frame = 0;
  if (!renderer || !visible || document.hidden) return;
  const dt = Math.min((now - last) / 1000 || 0, 0.05);
  last = now;
  if (progress !== goal)
    progress = still
      ? goal
      : Math.max(
          0,
          Math.min(1, progress + (Math.sign(goal - progress) * dt) / 0.6),
        );
  const eased = progress * progress * (3 - 2 * progress);
  for (const part of moving)
    part.node.position.copy(part.home).addScaledVector(part.offset, eased);
  const expansion = 1 + (expansionScale - 1) * eased;
  camera.position
    .sub(controls.target)
    .multiplyScalar(expansion / (1 + (expansionScale - 1) * previousExpansion))
    .add(controls.target);
  previousExpansion = eased;
  controls.update();
  renderer.render(scene, camera);
  if (Math.abs(progress - goal) > 0.0001) schedule();
}
function schedule() {
  if (!frame && visible && !document.hidden)
    frame = requestAnimationFrame(render);
}
function resize() {
  if (!renderer) return;
  const width = stage.clientWidth,
    height = stage.clientHeight;
  if (!width || !height) return;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  schedule();
}
function forEachRobotVertex(visit) {
  robot.updateMatrixWorld(true);
  const point = new THREE.Vector3();
  robot.traverseVisible((node) => {
    const positions = node.geometry?.attributes.position;
    if (!node.isMesh || !positions) return;
    for (let i = 0; i < positions.count; i++) {
      point.fromBufferAttribute(positions, i).applyMatrix4(node.matrixWorld);
      visit(point);
    }
  });
}
function frameRobot() {
  const box = new THREE.Box3().setFromObject(robot);
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const direction = new THREE.Vector3(1, 0.7, 1).normalize();
  const right = new THREE.Vector3().crossVectors(camera.up, direction).normalize();
  const up = new THREE.Vector3().crossVectors(direction, right);
  // Fit the visible mesh to 88% of the view, leaving 6% on each side.
  // Perspective depth matters: a surrounding sphere leaves flat robots tiny.
  const fitY = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * 0.88;
  const fitX = fitY * camera.aspect;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  homeTarget.copy(sphere.center);
  forEachRobotVertex((point) => {
    point.sub(sphere.center);
    const x = point.dot(right), y = point.dot(up), z = point.dot(direction);
    minX = Math.min(minX, x - z * fitX);
    maxX = Math.max(maxX, x + z * fitX);
    minY = Math.min(minY, y - z * fitY);
    maxY = Math.max(maxY, y + z * fitY);
  });
  const distance = Math.max((maxX - minX) / (2 * fitX), (maxY - minY) / (2 * fitY));
  if (!Number.isFinite(distance) || distance <= 0) throw new Error("Robot has no visible geometry");
  homeTarget.addScaledVector(right, (minX + maxX) / 2).addScaledVector(up, (minY + maxY) / 2);
  homePosition.copy(direction).multiplyScalar(distance).add(homeTarget);

  // Measure the separated parts too, so the closer initial view still expands safely.
  for (const part of moving) part.node.position.copy(part.home).add(part.offset);
  let expandedDistance = distance;
  forEachRobotVertex((point) => {
    point.sub(homeTarget);
    expandedDistance = Math.max(expandedDistance, point.dot(direction) + Math.max(
      Math.abs(point.dot(right)) / fitX,
      Math.abs(point.dot(up)) / fitY,
    ));
  });
  for (const part of moving) part.node.position.copy(part.home);
  robot.updateMatrixWorld(true);
  expansionScale = expandedDistance / distance;
  camera.position.copy(homePosition);
  controls.target.copy(homeTarget);
  controls.minDistance = sphere.radius * 1.35;
  controls.maxDistance = expandedDistance * 3;
  ground.position.y = box.min.y - 0.001;
  controls.update();
  schedule();
}
function init() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  scene = new THREE.Scene();
  const backdrop = getComputedStyle(stage).backgroundColor;
  scene.background = new THREE.Color(backdrop);
  const environment = new RoomEnvironment();
  const generator = new THREE.PMREMGenerator(renderer);
  scene.environment = generator.fromScene(environment, 0.04).texture;
  environment.dispose();
  generator.dispose();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xaab2c0, 1.4));
  const key = new THREE.DirectionalLight(0xffffff, 2);
  key.position.set(2, 4, 3);
  scene.add(key);
  // Standard Three.js ground plane, not invented robot geometry.
  ground = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 200),
    new THREE.MeshBasicMaterial({ color: backdrop, toneMapped: false }),
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);
  camera = new THREE.PerspectiveCamera(32, 1, 0.001, 100);
  controls = new OrbitControls(camera, canvas);
  Object.assign(controls, {
    enableDamping: false,
    enablePan: false,
    maxPolarAngle: Math.PI / 2 - 0.02,
    autoRotate: false,
  });
  canvas.style.touchAction = "pan-y";
  controls.addEventListener("change", schedule);
  new ResizeObserver(resize).observe(stage);
  resize();
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    failed(new Error("WebGL context lost"));
  });
  canvas.addEventListener("webglcontextrestored", () => load(activeDesign));
}
async function load(id) {
  const current = ++requestId;
  setDescription(id);
  stage.classList.remove("is-ready");
  stage.setAttribute("aria-busy", "true");
  status.hidden = false;
  status.textContent = "Loading 3D…";
  explode.disabled = reset.disabled = true;
  explode.setAttribute("aria-pressed", "false");
  explode.querySelector("span").textContent = "Explode";
  try {
    if (!renderer) init();
    const [gltf, metadata] = await Promise.all([
      loader.loadAsync(`assets/gallery/${id}.glb`),
      fetch(`assets/gallery/${id}.json`).then((response) => {
        if (!response.ok) throw new Error(`Model metadata: ${response.status}`);
        return response.json();
      }),
    ]);
    if (current !== requestId) {
      dispose(gltf.scene);
      return;
    }
    if (robot) {
      scene.remove(robot);
      dispose(robot);
    }
    robot = gltf.scene;
    scene.add(robot);
    moving = metadata.parts.flatMap((part) => {
      const node = robot.getObjectByName(part.name);
      return node && part.explode
        ? [
            {
              node,
              home: node.position.clone(),
              offset: new THREE.Vector3(...part.explode),
            },
          ]
        : [];
    });
    progress = goal = previousExpansion = 0;
    frameRobot();
    render();
    stage.classList.add("is-ready");
    stage.setAttribute("aria-busy", "false");
    status.hidden = true;
    canvas.tabIndex = 0;
    explode.disabled = reset.disabled = false;
    get("orbit-hint").textContent = matchMedia("(hover: none)").matches
      ? "Drag to rotate · pinch to zoom"
      : "Drag to rotate · scroll to zoom";
  } catch (error) {
    if (current === requestId) failed(error);
  }
}
document.querySelectorAll("[data-design]").forEach((button) =>
  button.addEventListener("click", () => {
    if (button.dataset.design !== activeDesign) load(button.dataset.design);
  }),
);
explode.addEventListener("click", () => {
  goal = goal ? 0 : 1;
  explode.setAttribute("aria-pressed", String(Boolean(goal)));
  explode.querySelector("span").textContent = goal ? "Assemble" : "Explode";
  get("orbit-hint").textContent = goal
    ? "Components separated for inspection"
    : "Drag to rotate · scroll to zoom";
  last = performance.now();
  schedule();
});
reset.addEventListener("click", () => {
  camera.position
    .copy(homePosition)
    .sub(homeTarget)
    .multiplyScalar(1 + (expansionScale - 1) * previousExpansion)
    .add(homeTarget);
  controls.target.copy(homeTarget);
  controls.update();
  schedule();
});
canvas.addEventListener("keydown", (event) => {
  if (!robot || !stage.classList.contains("is-ready")) return;
  if (
    ![
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "+",
      "=",
      "-",
      "Home",
    ].includes(event.key)
  )
    return;
  event.preventDefault();
  if (event.key === "Home") {
    reset.click();
    return;
  }
  const spherical = new THREE.Spherical().setFromVector3(
    camera.position.clone().sub(controls.target),
  );
  if (event.key === "ArrowLeft") spherical.theta -= 0.12;
  if (event.key === "ArrowRight") spherical.theta += 0.12;
  if (event.key === "ArrowUp") spherical.phi -= 0.12;
  if (event.key === "ArrowDown") spherical.phi += 0.12;
  if (event.key === "+" || event.key === "=") spherical.radius *= 0.9;
  if (event.key === "-") spherical.radius *= 1.1;
  spherical.radius = THREE.MathUtils.clamp(
    spherical.radius,
    controls.minDistance,
    controls.maxDistance,
  );
  spherical.phi = THREE.MathUtils.clamp(
    spherical.phi,
    0.1,
    controls.maxPolarAngle,
  );
  camera.position.setFromSpherical(spherical).add(controls.target);
  controls.update();
  schedule();
});
new IntersectionObserver((entries) => {
  visible = entries[0].isIntersecting;
  if (visible) schedule();
}).observe(stage);
document.addEventListener("visibilitychange", schedule);
await load(activeDesign);
