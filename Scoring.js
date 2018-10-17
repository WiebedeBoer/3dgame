//scoring
function Scoring(){
    //registrate particle hit
    var particleHit =false;
    //particle collision
    var originEnemyPoint = enemyCube.position.clone();
    
    for (var vertexBulletIndex = 0; vertexBulletIndex < enemyCube.enemyCubeGeometry.vertices.length; vertexBulletIndex++)
    {
        var localVertex = enemyCube.enemyCubeGeometry.vertices[vertexBulletIndex].clone();
        var globalVertex = localVertex.applyMatrix4( enemyCube.matrix );
        var directionVector = globalVertex.sub( enemyCube.position );

        var rayBullet = new THREE.Raycaster( originEnemyPoint, directionVector.clone().normalize() );
        var collisionResults = rayBullet.intersectObjects( collidableBulletMeshList );
        //check collision bullets
        if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){
            clearText();
            appendText(" kill ");
            particleHit = true;
        }

    }
    
    
    //check particle hit
    if (particleHit ==true){
    //increase score    
    totalscore = totalscore + 1;
    //update score
    eScore ="Score: "+totalscore;
    document.getElementById('score').innerHTML = eScore; 
    particleHit = false;
    //kill ammo cube
    //ammoCube.alive = false;
    //scene.remove(ammoCube);
    //kill enemy cube
    //enemyCube.alive = false;
    //scene.remove(enemyCube);
    //kill enemy
    //enemy.alive = false;
    //scene.remove(enemy);
    }
    console.log(particleHit);
    
}