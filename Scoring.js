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
                console.log(collisionResults);

                clearText();
                appendText(" kill ");
                
                //increase score    
                totalscore = totalscore + 1;
                //update score
                eScore ="Score: "+totalscore;
                document.getElementById('score').innerHTML = eScore; 
                
                //Remove enemy
                scene.remove(enemyResult.enemyCube);
                scene.remove(enemyResult);
                //remove enemy from list
                let posindex = bullets.indexOf(enemy.uuid);                
                enemyList.splice(posindex,1);
                //remove bullet
                BulletKill();
            }
        }    
    });
    
}