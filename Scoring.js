//scoring
function Scoring(){
    //particle collision
    
    enemyList.forEach(enemyResult => {
        var originEnemyPoint = enemyResult.position.clone();
        for (var vertexBulletIndex = 0; vertexBulletIndex < enemyResult.enemyCubeGeometry.vertices.length; vertexBulletIndex++)
        {
            var localVertex = enemyResult.enemyCubeGeometry.vertices[vertexBulletIndex].clone();
            var globalVertex = localVertex.applyMatrix4( enemyResult.matrix );
            var directionVector = globalVertex.sub( enemyResult.position );
    
            var rayBullet = new THREE.Raycaster( originEnemyPoint, directionVector.clone().normalize() );
            var collisionResults = rayBullet.intersectObjects( collidableBulletMeshList );
            //check collision bullets
            if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){

                let indexEnemy = enemyList.map(e => e.uuid).indexOf(enemyResult.uuid);
                if(indexEnemy != -1){
                    enemyList.splice(indexEnemy,1);
                    scene.remove(enemyResult.enemyCube);
                    scene.remove(enemyResult);
                    enemyCounter++;

                    clearText();
                    appendText(" kill ");
                    //play sound
                    var aud = document.getElementById("soundpar"); 
                    aud.play(); 
                    //increase score    
                    totalscore = totalscore + 1;
                    //update score
                    appendScore();
                    //Remove enemy and bullet from their respective arrays
                    //remove bullet and bullet mesh from the scene  
                    let indexBullet = bullets.map(e => e.uuid).indexOf(collisionResults[0]['object']['uuid']);
                    bullets.splice(indexBullet,1);                              
                    scene.remove(collisionResults[0]['object']);
                    //remove from bulletmeshes array   
                    var rem = bulletmeshes.slice(indexBullet,indexBullet+1);
                    scene.remove(rem[0]);
                    bulletmeshes.splice(indexBullet,1);                      
                    //Remove enemy and enemy cube from the scene
                }
            }
        }    
    });
    
}