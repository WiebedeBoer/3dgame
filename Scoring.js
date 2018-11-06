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
                    
                    //play sound
                    var aud = document.getElementById("soundpar"); 
                    aud.play();
                    //increase score
                    totalscore = totalscore + 1;
                    //update score
                    appendScore();
                    //Remove enemy and bullet from their respective arrays
                    let indexBullet = bullets.map(e => e.uuid).indexOf(collisionResults[0]['object']['uuid']);
                    if (indexBullet != -1){                        
                        scene.remove(bullets[indexBullet]);
                        bullets.splice(indexBullet,1);
                        collidableBulletMeshList.splice(indexBullet,1); 
                        
                        //remove from bulletmeshes array
                        scene.remove(bulletmeshes[indexBullet]);
                        bulletmeshes.splice(indexBullet,1);
                        
                    }
                }
            }
        }    
    });
    
}