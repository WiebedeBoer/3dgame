// Move enemy camera towards player
function EnemyMovement() {
    var cameraPosition = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
    var enemyPosition = new THREE.Vector3(enemy.position.x, enemy.position.y, enemy.position.z);
    var distance = cameraPosition.distanceTo(enemyPosition);
    if(distance < 200){
      enemy.lookAt(camera.position);
      new TWEEN.Tween(enemy.position)
          .to(camera.position, 100)
          .start();
          TWEEN.update();
    }
    else {
    }
    // console.log(distance);
}
