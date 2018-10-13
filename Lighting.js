function Lighter(){
    //lighting
var light = new THREE.HemisphereLight( 0xfffff0, 0x101020, 1 );
light.position.set( 0.5, 1, 0.25 );
scene.add( light );
}