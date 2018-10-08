class Plane extends THREE.Group {
	init(){
                var mPlane = this;
                var material        = new THREE.MeshBasicMaterial({ color:0x008000 })
                var geometry        = new THREE.PlaneGeometry( 7430, 7430 )
                var plane        = new THREE.Mesh( geometry, material );
                plane.rotation.x= - 90 * Math.PI / 180;
                //plane.rotation.x = Math.PI / 2.0;
                //plane.position.x = 15;
                //plane.position.z = 15;
                mPlane.add(plane);
    }
    constructor(){
        super();
        this.init();
    }	
}