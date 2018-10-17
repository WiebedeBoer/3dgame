            // Move enemy camera towards player
            function EnemyMovement() {
              var cameraPosition = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
              var enemyPosition = new THREE.Vector3(enemy.position.x, enemy.position.y, enemy.position.z);
              //var enemyCubePosition = new THREE.Vector3(enemy.position.x, enemy.position.y, enemy.position.z);
              var distance = cameraPosition.distanceTo(enemyPosition);
              //console.log(distance);
              if(distance >10 && distance < 60){
                enemy.lookAt(camera.position);
                new TWEEN.Tween(enemy.position)
                    .to(camera.position, 200)
                    .start();
                    TWEEN.update();
              }
              else if (distance <10){
                clearText();
                appendText(" you died ");
                var gameover = document.getElementById("menu");
                if (gameover.style.display === "none") {
                    gameover.style.display = "block";} 
                    //else {
                    //gameover.style.display = "none";}
              }
              else {
              }
            }