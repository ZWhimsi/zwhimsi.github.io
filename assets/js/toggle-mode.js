// toggle-mode.js

document.getElementById('toggle-mode').addEventListener('click', function() {
  document.body.classList.toggle('night-mode');
  updateShaderColors();
});

function updateShaderColors() {
  const isNightMode = document.body.classList.contains('night-mode');
  
  const color1 = isNightMode ? new THREE.Color(0x000000) : new THREE.Color(0xffffff);
  const color2 = isNightMode ? new THREE.Color(0x4B0082) : new THREE.Color(0xD6C1FF); // dark purple for night, pastel purple for day
  
  uniforms.color1.value.set(color1);
  uniforms.color2.value.set(color2);
}
