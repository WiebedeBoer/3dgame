function Collide (){

//origin point
var originPoint = MovingCube.position.clone();
var collisionCheck = false;

clearText();

//collision
for (var vertexIndex = 0; vertexIndex < MovingCube.geometry.vertices.length; vertexIndex++)
{
var localVertex = MovingCube.geometry.vertices[vertexIndex].clone();
var globalVertex = localVertex.applyMatrix4( MovingCube.matrix );
var directionVector = globalVertex.sub( MovingCube.position );

var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
var collisionResults = ray.intersectObjects( collidableMeshList );
if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){
        collisionCheck = true;
}

}

if (!collisionCheck){
        if ( keyboard.pressed("d") || keyboard.pressed("s") ){
        controls.movementSpeed = 80;}
        else if ( keyboard.pressed("a") || keyboard.pressed("w") ){
        controls.movementSpeed = 80;}
        clearText();
        appendText(camera.position.x +","+camera.position.z+";");
}
else {
        controls.movementSpeed -= controls.movementSpeed + controls.movementSpeed;  
        clearText();     
        appendText(" boing, ");
}

}