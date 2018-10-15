function Collide (){

var mcdelta = clock.getDelta(); // seconds.
var mcrotateAngle = Math.PI / 2 * mcdelta;   // pi/2 radians (90 degrees) per second

if ( keyboard.pressed("q") )
MovingCube.rotation.y += mcrotateAngle; //rotate left
if ( keyboard.pressed("e") )
MovingCube.rotation.y -= mcrotateAngle; //rotate right


MovingCube.position.x = camera.position.x;
MovingCube.position.y = camera.position.y;
MovingCube.position.z = camera.position.z;

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
appendText(" Hit ");
collisionCheck = true;
}

}

if (!collisionCheck){
        if ( keyboard.pressed("d") || keyboard.pressed("s") ){
        controls.movementSpeed = 80;}
        else if ( keyboard.pressed("a") || keyboard.pressed("w") ){
        controls.movementSpeed = 80;}
        appendText(MovingCube.position.x+","+MovingCube.position.z+";");
}
else {
        controls.movementSpeed -= controls.movementSpeed + controls.movementSpeed;
}

}