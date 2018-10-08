class Plane extends THREE.Group {
	init(){
                var mPlane = this;
                var material        = new THREE.MeshBasicMaterial({ color:0x808080 })
                var geometry        = new THREE.PlaneGeometry( 7430, 7430 )
                var plane        = new THREE.Mesh( geometry, material );
                plane.rotation.x= - 90 * Math.PI / 180;
                mPlane.add(plane);
    }
    constructor(){
        super();
        this.init();
    }	
}