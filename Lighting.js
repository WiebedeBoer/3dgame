function Lighter(){
    //lighting
var light = new THREE.HemisphereLight( 0xfffff0, 0x101020, 1 );
light.position.set( 0.5, 1, 0.25 );
scene.add( light );

//lantern props
var lantern = new Lantern(137,1,99);
scene.add(lantern);
var lantern2 = new Lantern(163,1,99);
scene.add(lantern2);

var lantern6 = new Lantern(240,1,466); //school 23,26
scene.add(lantern6);

/*
var lantern3 = new Lantern(163,1,99); //school 38,11
scene.add(lantern3);
var lantern4 = new Lantern(163,1,99); //school 34,14
scene.add(lantern4);
var lantern5 = new Lantern(163,1,99); //school 4,19
scene.add(lantern5);

var lantern7 = new Lantern(163,1,99); //school 27,26
scene.add(lantern7);
var lantern8 = new Lantern(163,1,99); //school 16,29
scene.add(lantern8);
var lantern9 = new Lantern(163,1,99); //school 16,29
scene.add(lantern9);
*/

}