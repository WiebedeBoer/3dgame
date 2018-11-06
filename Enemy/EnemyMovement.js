function EnemyMovement() {

  var cameraPosition = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
  var nodeClosestToPlayer = GetClosestNodeToPlayer();
  enemyList.forEach(function(enemy) {
      
      var enemyPosition = new THREE.Vector3(enemy.position.x, enemy.position.y, enemy.position.z);
      var distance = cameraPosition.distanceTo(enemyPosition);
      
      if(distance >= 100){
        //travel over nodes
        //No current path? or current end destination not closest to the Player anymore? change path!
        
        if(enemy.pathNodes.length === 0 || enemy.pathNodes == undefined || enemy.pathNodes[enemy.pathNodes.length-1].name !== nodeClosestToPlayer.name){
          
          let closeEnemyNode = GetClosestNodeToEnemy(enemyPosition);
          let vectorEnemyNode = new THREE.Vector3(closeEnemyNode.positionX, closeEnemyNode.positionY, closeEnemyNode.positionZ);
          
            enemy.pathNodes = [];
            //No current path? create one
            
            //Path of closest node to enemy to the closes node to the player. path will be an array of chars of the respective nodes
            var path = g.shortestPath(closeEnemyNode.name, nodeClosestToPlayer.name).concat([closeEnemyNode.name]).reverse();
            
            //If You already are at the node nearest to the player, then dont add the path.
            //closeEnemyNode is a substitue for the first path entry.
            //because if the path length is only 1, the closest node to the enemy is also the closest one to the player
            if(path.length === 1 && vectorEnemyNode.distanceTo(enemyPosition) < 1){}else{
              
            //which char belongs to which coordinates?
            path.forEach(element => {
              let indexNode = MyNodes.map(e => e.name).indexOf(element);
              
              //add node to the path of the enemy
              enemy.pathNodes.push(MyNodes[indexNode]);
            });
            
          }
        }
        //If the current enemy is closer to the player than the closest node is closer to the player, then go straight for the player.
        if(cameraPosition.distanceTo(enemyPosition)-5 < cameraPosition.distanceTo(new THREE.Vector3( enemy.pathNodes[enemy.pathNodes.length-1].positionX, enemy.pathNodes[enemy.pathNodes.length-1].positionY, enemy.pathNodes[enemy.pathNodes.length-1].positionZ ))){
          
          enemy.lookAt(cameraPosition);
          enemy.translateZ(0.3);
        }else {
          //if not, lets go get the player via the path
          enemy.lookAt(new THREE.Vector3( enemy.pathNodes[0].positionX, enemy.pathNodes[0].positionY, enemy.pathNodes[0].positionZ ));
          enemy.translateZ(0.3);
        }
        //If the distance between the enemy and the next node is less then 1? Then delete that node in our path!
        if(enemyPosition.distanceTo(new THREE.Vector3( enemy.pathNodes[0].positionX, enemy.pathNodes[0].positionY, enemy.pathNodes[0].positionZ )) < 1){
          enemy.pathNodes.shift();
        }
        
      }else if(distance > 10 && distance < 100){
        enemy.lookAt(cameraPosition);
        enemy.translateZ(0.3);
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
  //return new THREE.Vector3 (closestNode.positionX, closestNode.positionY, closestNode.positionZ);
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
  //return new THREE.Vector3(closestNode.positionX, closestNode.positionY, closestNode.positionZ);
  return closestNode
}