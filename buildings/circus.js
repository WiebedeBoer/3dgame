class Circus extends THREE.Group {

    init (){

        var dChurch = this;

        // instantiate a loader
var loader = new THREE.OBJLoader();

var amphiMaterial = new THREE.MeshPhongMaterial( { color: 0xb18868 } );

// load a resource
loader.load(
	// resource URL
	'models/amphi/circus_max.obj',
	// called when resource is loaded
	function ( object ) {

        object.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ) {                 
                 child.material = amphiMaterial;
                }
            } );

        dChurch.add(object);
	},
	// called when loading is in progresses
	function () {
		console.log( '100% loaded' );
	},
	// called when loading has errors
	function () {
		console.log( 'An error happened' );
	}
);


dChurch.scale.x = 36;
dChurch.scale.y = 33;
dChurch.scale.z = 27.5;
dChurch.rotation.y = Math.PI/2; 
dChurch.position.x = (1800 - 3600) + (this.pX * 90) + 45;
dChurch.position.y = 15.0;
dChurch.position.z = (1800 - 3600) + (this.pZ * 90) - 30;

    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;        
        this.pZ = pZ;        
        this.init();
    }
}