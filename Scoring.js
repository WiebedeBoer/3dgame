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

                //increase score    
                totalscore = totalscore + 1;
                //update score
                eScore ="Score: "+totalscore;
                document.getElementById('score').innerHTML = eScore;

                //Remove enemy and bullet from their respective arrays
                let indexBullet = bullets.map(e => e.uuid).indexOf(collisionResults[0]['object']['uuid']);
                bullets.splice(indexBullet,1);
                let indexEnemy = enemyList.map(e => e.uuid).indexOf(enemyResult.uuid);
                enemyList.splice(indexEnemy,1);
                scene.remove(collisionResults[0]['object']);
                //Remove enemy and bullet from the scene
                scene.remove(enemyResult.enemyCube)
                scene.remove(enemyResult);
            }
        }    
    });
    
}