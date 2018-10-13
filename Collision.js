function Collide (){

var mcdelta = clock.getDelta(); // seconds.
var moveDistance = 100 * mcdelta; // 200 pixels per second
//var moveDistance = controls.movementSpeed;
var mcrotateAngle = Math.PI / 2 * mcdelta;   // pi/2 radians (90 degrees) per second

if ( keyboard.pressed("q") )
MovingCube.rotation.y += mcrotateAngle; //rotate left
if ( keyboard.pressed("e") )
MovingCube.rotation.y -= mcrotateAngle; //rotate right

MovingCube.position.x = camera.position.x;
MovingCube.position.y = camera.position.y + 1;
MovingCube.position.z = camera.position.z;

var originPoint = MovingCube.position.clone();

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
//if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() + 5 ){
//if ( collisionResults.length > 0 && collisionResults[0].distance < 5){
appendText(" Hit ");
//console.log("hit");
if ( keyboard.pressed("d") || keyboard.pressed("s") ){
controls.movementSpeed -= controls.movementSpeed + controls.movementSpeed;}
else if ( keyboard.pressed("a") || keyboard.pressed("w") ){
//controls.movementSpeed += controls.movementSpeed - controls.movementSpeed - controls.movementSpeed;
controls.movementSpeed -= controls.movementSpeed + controls.movementSpeed;
}
//controls.movementSpeed -= controls.movementSpeed;
//controls.movementSpeed = -100;
//controls.movementSpeed = 0;
//console.log(controls.movementSpeed);
//moveDistance -=moveDistance + moveDistance; //80
//moveDistance -=controls.movementSpeed;
//console.log(moveDistance);
//break;
}
else {
        //controls.movementSpeed = controls.movementSpeed + 1;
        if ( keyboard.pressed("d") || keyboard.pressed("s") ){
        controls.movementSpeed = 80;}
        else if ( keyboard.pressed("a") || keyboard.pressed("w") ){
        controls.movementSpeed = 80;}
        //controls.movementSpeed = 100;
        //moveDistance = moveDistance; 
        //appendText(MovingCube.position.x+","+MovingCube.position.z+";");
}
}

}