function Shader()
{
  // Directional Light
  var dLight = new THREE.DirectionalLight(0xffffff);
  dLight.position.set(camera.position.x, 20, camera.position.z);
  dLight.castShadow = true;
  dLight.shadow.mapSize.height = 1024;
  dLight.shadow.mapSize.width = 1024;
  dLight.shadow.camera.near = 1;
  dLight.shadow.camera.far = 20;
  dLight.shadow.camera.left = -15;
  dLight.shadow.camera.right = 15;
  dLight.shadow.camera.top = 20;
  dLight.shadow.camera.bottom = -20;
  scene.add(dLight);

  // Ambient Light
  // scene.add(new THREE.AmbientLight(0x666666));
}
