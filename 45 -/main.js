const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const starField = new THREE.Group();
scene.add(starField);

const starGeometry = new THREE.SphereGeometry(0.05, 24, 24);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
for (let i = 0; i < 1000; i++) {
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100);
    starField.add(star);
}

function animate() {
    requestAnimationFrame(animate);

    starField.children.forEach(star => {
        star.position.z += 0.2;
        if (star.position.z > 100) {
            star.position.z = -(Math.random() * 200);
        }
    });

    renderer.render(scene, camera);
}

animate();
