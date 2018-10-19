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
                clearText();
                appendText(" kill ");

                

                //Remove enemy and bullet from their respective arrays
                let indexBullet = bullets.map(e => e.uuid).indexOf(collisionResults[0]['object']['uuid']);  
                if (indexBullet !== -1){
                    //increase score    
                    totalscore = totalscore + 1;
                    //update score
                    eScore ="Score: "+totalscore;
                    document.getElementById('score').innerHTML = eScore;
                    bullets.splice(indexBullet,1);
                    //For each bullet in the bullets array, there is a mesh for that bullet in the bulletmeshes array
                    //So we can delete de mesh with the same index.
                    bulletmeshes.splice(indexBullet,1);
                    let indexEnemy = enemyList.map(e => e.uuid).indexOf(enemyResult.uuid);
                    enemyList.splice(indexEnemy,1);
                    //remove bullet and bullet mesh                
                    scene.remove(collisionResults[0]['object']);                
                    //scene.remove(collisionResults[0]['object'].bulletmesh);   //dit werkt nog niet
                    //bulletmeshes.splice(indexBullet,1);  //remove from bulletmeshes array, dit ook nog niet           
                    //Remove enemy and bullet from the scene
                    scene.remove(enemyResult.enemyCube)
                    scene.remove(enemyResult);
                }
            }
        }    
    });
    
}