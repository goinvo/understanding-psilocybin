/*
document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.grid .cell');
    // The label cell is now at index 8, left cell at index 7
    const leftCell = cells[7];
    const labelCell = cells[8];
    if (!leftCell || !labelCell) return;

    // Create a span for the hello message inside the leftCell
    let helloMsg = leftCell.querySelector('.hello-message');
    if (!helloMsg) {
        helloMsg = document.createElement('span');
        helloMsg.className = 'hello-message';
        helloMsg.textContent = 'Removal of criminal penalties or enforcement for personal use/posession.';
        helloMsg.style.display = 'none';
        leftCell.appendChild(helloMsg);
    }

    labelCell.style.cursor = 'pointer';

    labelCell.addEventListener('click', function () {
        helloMsg.style.display = (helloMsg.style.display === 'none') ? 'block' : 'none';
    });
});

*/

/*
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('bubble-toggle');
  const bubble = document.getElementById('speech-bubble');
  toggle.addEventListener('click', function() {
    bubble.hidden = !bubble.hidden;
  });
  // Optional: allow Enter/Space to toggle for accessibility
  toggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      bubble.hidden = !bubble.hidden;
      e.preventDefault();
    }
  });
  */

  // 3D Megaphone rendering
  const canvas = document.getElementById('megaphone3d');
  if (canvas) {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 48/32, 0.1, 1000);
    camera.position.set(12, 8, 28);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0); // transparent

    // Enable shadows
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Megaphone body (cylinder)
    const bodyGeometry = new THREE.CylinderGeometry(2, 2, 8, 32);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 80 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(-4, 0, 0);
    body.rotation.z = Math.PI / 2;
    body.castShadow = true; // Cast shadow
    scene.add(body);

    // Megaphone horn (cone)
    const hornGeometry = new THREE.ConeGeometry(4, 12, 32, 1, true);
    const hornMaterial = new THREE.MeshPhongMaterial({ color: 0xe0e0e0, shininess: 100, side: THREE.DoubleSide });
    const horn = new THREE.Mesh(hornGeometry, hornMaterial);
    horn.position.set(4, 0, 0);
    horn.rotation.z = Math.PI / 2;
    horn.castShadow = true; // Cast shadow
    scene.add(horn);

    // Handle (small cylinder)
    const handleGeometry = new THREE.CylinderGeometry(0.7, 0.7, 5, 16);
    const handleMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, shininess: 60 });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    handle.position.set(-4, -2.5, 0);
    handle.rotation.x = Math.PI / 6;
    handle.castShadow = true; // Cast shadow
    scene.add(handle);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1.2, 100);
    light.position.set(10, 10, 20);
    light.castShadow = true; // Cast shadow
    light.shadow.mapSize.width = 128;
    light.shadow.mapSize.height = 128;
    scene.add(light);
    const ambient = new THREE.AmbientLight(0x888888);
    scene.add(ambient);

    // Add a shadow-receiving plane below the megaphone
    const planeGeometry = new THREE.PlaneGeometry(30, 12);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.25 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.set(0, -6, 0);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    // Animation
    function animate() {
      /*horn.rotation.y += 0.01;
      body.rotation.y += 0.01;
      handle.rotation.y += 0.01;*/
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
  }

  // Toggle CTA bubble on 3D megaphone click
  const megaphone = document.getElementById('megaphone-toggle');
  const ctaBubble = document.getElementById('cta-bubble');
  if (megaphone && ctaBubble) {
    megaphone.addEventListener('click', function() {
      ctaBubble.hidden = !ctaBubble.hidden;
    });
    megaphone.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        ctaBubble.hidden = !ctaBubble.hidden;
        e.preventDefault();
      }
    });
  }


