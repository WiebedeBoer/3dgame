//prop gathering: health packs, ammo packs
function propGathering(){

    
//origin point
var originPlayerPoint = MovingCube.position.clone();
var propHit =0;

clearText();

//collision
    for (var vertexPropIndex = 0; vertexPropIndex < MovingCube.geometry.vertices.length; vertexPropIndex++)
    {
        var localVertex = MovingCube.geometry.vertices[vertexPropIndex].clone();
        var globalVertex = localVertex.applyMatrix4( MovingCube.matrix );
        var directionVector = globalVertex.sub( MovingCube.position );

        var rayProp = new THREE.Raycaster( originPlayerPoint, directionVector.clone().normalize() );
        var collisionResults = rayProp.intersectObjects( collidablePropMeshList );
        //check collision props
        if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){
            appendText(" Grab ");
            propHit = 1;
        }

    }
    
        //check particle hit
        if (propHit >0){
            //gather prop
    
            //amend economy
            leftOverAmmo = 99;
            totalAmmo = 100;
            eAmmo = leftOverAmmo+"/"+totalAmmo;
            eWeapon ="Tommygun";
            //display economy
            document.getElementById('weapon').innerHTML = eWeapon;
            document.getElementById('ammo').innerHTML = eAmmo;
        }
}