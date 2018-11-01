function Lighter(){
//lighting

var light = new THREE.HemisphereLight( 0xfffff0, 0x101020, 0.25 );
light.position.set( 0.5, 1, 0.25 );
scene.add( light );


var directionalLight = new THREE.DirectionalLight(0xfffff0);
directionalLight.position.set(-5000, 500, -5000);
directionalLight.castShadow = true;
directionalLight.shadowMapWidth = 5500;
directionalLight.shadowMapHeight = 5500;
directionalLight.shadowCameraNear = 5;
directionalLight.shadowCameraFar = 200;
directionalLight.shadowCameraLeft = -10;
directionalLight.shadowCameraRight = 10;
directionalLight.shadowCameraTop = 30;
directionalLight.shadowCameraBottom = -10;
scene.add(directionalLight);

//lantern props
var lantern = new Lantern(138,1,105); //court 1
scene.add(lantern);
var lantern2 = new Lantern(166,1,105); //court 2
scene.add(lantern2);
var lantern17 = new Lantern(138,1,185); //court 3
scene.add(lantern17);
var lantern18 = new Lantern(166,1,185); //court 4
scene.add(lantern18);

var lantern3 = new Lantern(-1475,1,-155); //school 4,19
scene.add(lantern3);
var lantern4 = new Lantern(1225,1,-605); //school 34,14
scene.add(lantern4);
var lantern5 = new Lantern(-395,1,745); //school 16,29 
scene.add(lantern5);
var lantern6 = new Lantern(235,1,475); //school 23,26
scene.add(lantern6);
var lantern7 = new Lantern(595,1,475); //school 27,26  
scene.add(lantern7);
var lantern8 = new Lantern(1585,1,-875); //school 38,11
scene.add(lantern8);
var lantern9 = new Lantern(-935,1,1645); //school 10,39 
scene.add(lantern9);

var lantern10 = new Lantern(-1445,1,-80); //school 4,19
scene.add(lantern10);
var lantern11 = new Lantern(1255,1,-530); //school 34,14
scene.add(lantern11);
var lantern12 = new Lantern(-365,1,775); //school 16,29 
scene.add(lantern12);
var lantern13 = new Lantern(265,1,550); //school 23,26
scene.add(lantern13);
var lantern14 = new Lantern(625,1,550); //school 27,26  
scene.add(lantern14);
var lantern15 = new Lantern(1615,1,-800); //school 38,11
scene.add(lantern15);
var lantern16 = new Lantern(-905,1,1720); //school 10,39 
scene.add(lantern16);

}