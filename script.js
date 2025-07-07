// 3D Megaphone rendering
const canvas = document.getElementById('megaphone3d');
if (canvas) {
  // Dramatically increase canvas resolution for ultra-sharp rendering
  const devicePixelRatio = window.devicePixelRatio || 1;
  const renderScale = 4; // 4x the base resolution for supersampling
  canvas.width = 48 * devicePixelRatio * renderScale;
  canvas.height = 32 * devicePixelRatio * renderScale;
  canvas.style.width = "1.2em";
  canvas.style.height = "1.2em";

  // Scene setup
  const scene = new THREE.Scene();
  // Direct side profile
  const camera = new THREE.PerspectiveCamera(45, (48/32), 0.1, 1000);
  camera.position.set(0, 4, 28);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
  renderer.setClearColor(0x000000, 0); // transparent
  renderer.setPixelRatio(devicePixelRatio * renderScale); // Supersample for smooth edges

  // Enable high-quality shadows
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Megaphone body (cylinder) with rounded ends
  const bodyGeometry = new THREE.CylinderGeometry(2, 2, 8, 64);
  const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 120 });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.set(-4, 0, 0);
  body.rotation.z = Math.PI / 2;
  body.castShadow = true;
  scene.add(body);

  // Add hemispheres to round the ends of the body
  const capGeometry = new THREE.SphereGeometry(2, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2);
  const capMaterial = bodyMaterial;

  // Back cap
  const capBack = new THREE.Mesh(capGeometry, capMaterial);
  capBack.position.set(-8, 0, 0);
  capBack.rotation.z = Math.PI / 2;
  capBack.rotation.x = Math.PI;
  capBack.castShadow = true;
  scene.add(capBack);

  // Front cap (where horn meets body)
  const capFront = new THREE.Mesh(capGeometry, capMaterial);
  capFront.position.set(0, 0, 0);
  capFront.rotation.z = Math.PI / 2;
  capFront.castShadow = true;
  scene.add(capFront);

  // Megaphone horn (truncated cone) with rounded edge at the mouth
  // Use CylinderGeometry for a truncated cone: CylinderGeometry(topRadius, bottomRadius, height, radialSegments, heightSegments, openEnded)
  const hornGeometry = new THREE.CylinderGeometry(1.2, 4, 12, 64, 1, true); // small end radius 1.2, large end radius 4
  const hornMaterial = new THREE.MeshPhongMaterial({ color: 0xe0e0e0, shininess: 150, side: THREE.DoubleSide });
  const horn = new THREE.Mesh(hornGeometry, hornMaterial);
  horn.position.set(4, 0, 0);
  horn.rotation.z = Math.PI / 2;
  horn.castShadow = true;
  scene.add(horn);

  // Add a torus at the mouth of the horn for a rounded lip
  const lipGeometry = new THREE.TorusGeometry(4, 0.35, 24, 48);
  const lipMaterial = hornMaterial;
  const hornLip = new THREE.Mesh(lipGeometry, lipMaterial);
  hornLip.position.set(10, 0, 0);
  hornLip.rotation.y = Math.PI / 2;
  hornLip.castShadow = true;
  scene.add(hornLip);

  // Handle (small cylinder)
  const handleGeometry = new THREE.CylinderGeometry(0.7, 0.7, 5, 32);
  const handleMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, shininess: 80 });
  const handle = new THREE.Mesh(handleGeometry, handleMaterial);
  handle.position.set(-4, -2.5, 0);
  handle.rotation.x = Math.PI / 6;
  handle.castShadow = true;
  scene.add(handle);

  // Combine all parts into a single megaphone group
  const megaphoneGroup = new THREE.Group();
  megaphoneGroup.add(body, capBack, capFront, horn, hornLip, handle);
  megaphoneGroup.scale.set(0.75, 0.75, 0.75); // Increase or decrease all dimensions
  scene.add(megaphoneGroup);

  // Lighting
  const light = new THREE.PointLight(0xffffff, 1.6, 100);
  light.position.set(10, 10, 20);
  light.castShadow = true;
  light.shadow.mapSize.width = 512;
  light.shadow.mapSize.height = 512;
  scene.add(light);
  const ambient = new THREE.AmbientLight(0xaaaaaa, 0.8);
  scene.add(ambient);

  // After scene setup and adding all objects
  renderer.render(scene, camera);

document.addEventListener('DOMContentLoaded', function () {
  const megaphone = document.getElementById('megaphone-toggle');
  const ctaBubble = document.getElementById('cta-bubble');

  if (megaphone && ctaBubble) {
    // Only the megaphone toggles the bubble
    megaphone.addEventListener('click', function (e) {
      e.stopPropagation();
      ctaBubble.hidden = !ctaBubble.hidden;
    });

    // Hide bubble when clicking outside the bubble or megaphone
    document.addEventListener('click', function (e) {
      if (!ctaBubble.hidden && !megaphone.contains(e.target) && !ctaBubble.contains(e.target)) {
        ctaBubble.hidden = true;
      }
    });

    // Keyboard accessibility: toggle with Enter/Space, close with Escape
    megaphone.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        ctaBubble.hidden = !ctaBubble.hidden;
        e.preventDefault();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        ctaBubble.hidden = true;
      }
    });
  }

  // Toggle description for Deprioritization/Decriminalization
  const depriorLabel = document.getElementById('deprior-label');
  const depriorDescCells = document.querySelectorAll('.deprior-desc-row');
  if (depriorLabel && depriorDescCells.length) {
    depriorLabel.style.cursor = 'pointer';
    depriorLabel.addEventListener('click', function () {
      const isHidden = depriorDescCells[0].style.display === 'none' || depriorDescCells[0].style.display === '';
      depriorDescCells.forEach(cell => {
        cell.style.display = isHidden ? 'flex' : 'none';
      });
    });
  }
});

}
