import * as THREE from './node_modules/three/build/three.module.js';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
// 렌더러 사이즈 설정
renderer.setSize(window.innerWidth, window.innerHeight);

const fov = 75;
const aspect = 2;
const near = 0.5;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// 카메라 시점
camera.position.z = 2;

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// 지오메트리랑 메트라얼로 메시를 만듬
const cube = new THREE.Mesh(geometry, material);

// 만들어진 메시를 씬에 넣는다.
scene.add(cube);

document.body.appendChild(renderer.domElement);

function render(time) {
  time *= 0.001;

  // 메시를 x, y축 로테이션
  cube.rotation.x = time;
  cube.rotation.y = time;

  // 얘가 화면에 보여지게 하는애임
  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
