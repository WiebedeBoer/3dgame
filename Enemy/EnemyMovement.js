// Move & rotate enemy camera towards player
function EnemyMovement() {

    var cameraPosition = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
    enemyList.forEach(function(enemy) {
        
        var enemyPosition = new THREE.Vector3(enemy.position.x, enemy.position.y, enemy.position.z);
        var distance = cameraPosition.distanceTo(enemyPosition);

        if(distance > 10 && distance < 100){
          enemy.lookAt(cameraPosition);
          enemy.translateZ(0.3);
        }else if (distance < 10){
            clearText();
            appendText("you died");
        }
        //Relocate the cube to the enemy at all times.
        enemy.enemyCube.position.x = enemy.position.x;
        enemy.enemyCube.position.y = enemy.position.y;
        enemy.enemyCube.position.z = enemy.position.z;
        enemy.enemyCube.rotation.x = enemy.rotation.x;
        enemy.enemyCube.rotation.y = enemy.rotation.y;
        enemy.enemyCube.rotation.z = enemy.rotation.z;
    });
}
