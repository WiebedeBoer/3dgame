//scoring
function Scoring(){
    //registrate particle hit
    var particleHit =false;
    //particle collision
    var originEnemyPoint = enemy.position.clone();
    
    for (var vertexBulletIndex = 0; vertexBulletIndex < enemy.enemyCubeGeometry.vertices.length; vertexBulletIndex++)
    {
        var localVertex = enemy.enemyCubeGeometry.vertices[vertexBulletIndex].clone();
        var globalVertex = localVertex.applyMatrix4( enemy.matrix );
        var directionVector = globalVertex.sub( enemy.position );

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
    let pos = bullets.indexOf(ammoCube.uuid);
    ammoCube.alive = false;
    bullets.splice(pos,1);
    collidableBulletMeshList.splice(pos,1);
    scene.remove(ammoCube);
    //kill enemy cube
    scene.remove(enemy.enemyCube);
    //kill enemy
    scene.remove(enemy);
    }
    //console.log(particleHit);
    
}