//scoring
function Scoring(){
    //registrate particle hit
    var particleHit =0;
    //particle collision
    for (var vertexBulletIndex = 0; vertexBulletIndex < enemyCube.geometry.vertices.length; vertexBulletIndex++)
    {
        var localVertex = enemyCube.geometry.vertices[vertexBulletIndex].clone();
        var globalVertex = localVertex.applyMatrix4( enemyCube.matrix );
        var directionVector = globalVertex.sub( enemyCube.position );

        var rayBullet = new THREE.Raycaster( originPlayerPoint, directionVector.clone().normalize() );
        var collisionResults = rayBullet.intersectObjects( collidableBulletMeshList );
        //check collision props
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