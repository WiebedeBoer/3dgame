function EnemyMovement() {

  var cameraPosition = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
  var nodeClosestToPlayer = GetClosestNodeToPlayer();
  enemyList.forEach(function(enemy) {
      
      var enemyPosition = new THREE.Vector3(enemy.position.x, enemy.position.y, enemy.position.z);
      var distance = cameraPosition.distanceTo(enemyPosition);

      if(distance > 90 && distance < 270){
        //travel over nodes
        //GetClosestNodeToPlayer();
      }
      else if(distance > 10 && distance < 90){
        enemy.lookAt(cameraPosition);
        enemy.translateZ(0.3);
      }else if (distance >= 50){
        if (enemy.pathNodes != null){
          enemy.lookAt(nodeClosestToPlayer);
          enemy.translateZ(0.3);
        }else {

        }
        //Player to far away, Now follow the player using the created nodes.
        //First we have to know our closest node, and make sure the player isent super far away.
        
      }else if (distance < 10){
          clearText();
          appendText("you died");
          var gameover = document.getElementById("deadmenu");
          if (gameover.style.display === "none") {
            gameover.style.display = "block";} 
          checkPause =true;
          //delocking pointer locker
          DeLock();
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

//Returns a Graph node found in the MyNodes array, the one closest to the player.
function GetClosestNodeToPlayer(){
  let currentPos = new THREE.Vector3( camera.position.x, camera.position.y, camera.position.z );
  let closestNode;
  let shortestDistance;
  
  MyNodes.forEach(element => {
          let currentNodePos = new THREE.Vector3 ( element.positionX, element.positionY, element.positionZ );
          let distance = currentPos.distanceTo(currentNodePos);

          if (shortestDistance == undefined){
              shortestDistance = distance; 
              closestNode = element;
          }else if (distance < shortestDistance) {
              shortestDistance = distance;
              closestNode = element;
          }
  });
  return closestNode;
}

//Returns a Graph node found in the Mynodes array, the one closest to the current enemy
function GetClosestNodeToEnemy(enemyPosition){
  let closestNode;
  let shortestDistance;

  MyNodes.forEach(element=>{
    let currentNodePos = new THREE.Vector3 ( element.positionX, element.positionY, element.positionZ );
          let distance = enemyPosition.distanceTo(currentNodePos);

          if (shortestDistance == undefined){
              shortestDistance = distance; 
              closestNode = element;
          }else if (distance < shortestDistance) {
              shortestDistance = distance;
              closestNode = element;
          }
  });
  return closestNode
}
            
//Returns a Graph node found in the MyNodes array, the one closest to the player.
function GetClosestNodeToPlayer(){
  let currentPos = new THREE.Vector3( camera.position.x, camera.position.y, camera.position.z );
  let closestNode;
  let shortestDistance;
  
  MyNodes.forEach(element => {
          let currentNodePos = new THREE.Vector3 ( element.positionX, element.positionY, element.positionZ );
          let distance = currentPos.distanceTo(currentNodePos);

          if (shortestDistance == undefined){
              shortestDistance = distance; 
              closestNode = element;
          }else if (distance < shortestDistance) {
              shortestDistance = distance;
              closestNode = element;
          }
  });
  //console.log(closestNode);
  return new THREE.Vector3 (closestNode.positionX, closestNode.positionY, closestNode.positionZ);
 
  //return closestNode;
}

//Returns a Graph node found in the Mynodes array, the one closest to the current enemy
function GetClosestNodeToEnemy(enemyPosition){
  let closestNode;
  let shortestDistance;

  MyNodes.forEach(element=>{
    let currentNodePos = new THREE.Vector3 ( element.positionX, element.positionY, element.positionZ );
          let distance = enemyPosition.distanceTo(currentNodePos);

          if (shortestDistance == undefined){
              shortestDistance = distance; 
              closestNode = element;
          }else if (distance < shortestDistance) {
              shortestDistance = distance;
              closestNode = element;
          }
  });
  return new THREE.Vector3(closestNode.positionX, closestNode.positionY, closestNode.positionZ);
  //return closestNode
}