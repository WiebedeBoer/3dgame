class AmphitheatreFull extends THREE.Group {

    init (){

        var dChurch = this;        

        // instantiate a loader
        var loader = new THREE.OBJLoader();

        var amphiMaterial = new THREE.MeshPhongMaterial( { color: 0xb18868 } );

        // load a resource
        loader.load('models/amphi/amphi_full.obj',	function ( object ) {

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

dChurch.scale.x = 5.2;
dChurch.scale.y = 3.5;
dChurch.scale.z = 5.2;
dChurch.rotation.y = Math.PI +0.41;
dChurch.position.x = ((1800 - 3600) + (this.pX * 90) - 30) + 0.5; //-3.4
dChurch.position.y = 13.0;
dChurch.position.z = ((1800 - 3600) + (this.pZ * 90) - 30) + 3.5; //1.5

    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;        
        this.pZ = pZ;        
        this.init();
    }
}