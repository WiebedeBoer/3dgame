//scoring
function Scoring(){
    //registrate particle hit
    var particleHit =0;
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
            particleHit = 1;
        }

    }
    
    
    //check particle hit
    if (particleHit >0){
    //increase score    
    totalscore += totalscore;
    //update score
    eScore ="Score: "+totalscore;
    document.getElementById('score').innerHTML = eScore;
    }
}