class AmphitheatreHalf extends THREE.Group {

    init (){

        var dChurch = this;

        // instantiate a loader
var loader = new THREE.OBJLoader();

var amphiMaterial = new THREE.MeshPhongMaterial( { color: 0xb18868 } );

// load a resource
loader.load(
	// resource URL
	'models/amphi/theatre.obj',
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
	function ( ) {
		console.log( '100% loaded' );
	},
	// called when loading has errors
	function ( ) {
		console.log( 'An error happened' );
	}
);

dChurch.scale.x = 6.53;
dChurch.scale.y = 3.5;
dChurch.scale.z = 4.58;
dChurch.rotation.y = 2.325; //2.231 -5 12 //2.225 -7 15 //2.237 -5 12 //2.3
dChurch.position.x = (1800 - 3600) + (this.pX * 90) - 35;
dChurch.position.y = 12.0;
dChurch.position.z = (1800 - 3600) + (this.pZ * 90) - 14;

    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;        
        this.pZ = pZ;        
        this.init();
    }
}