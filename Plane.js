class Plane extends THREE.Group {
    init(){
        var plane, geometry, material, mPlane, texture;

        mPlane = this;

            texture = new THREE.TextureLoader().load( "textures/plane/ground_texture3.jpg" );
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set( 200, 200 );
            material = new THREE.MeshBasicMaterial( { map: texture} );


        geometry = new THREE.PlaneGeometry( this.width, this.length );
        plane = new THREE.Mesh( geometry, material );
        plane.rotation.x= - 90 * Math.PI / 180;
        plane.recieveShadow = true;
        mPlane.add(plane);
    }
    constructor(width,length){
        super();
        this.width = width;
        this.length = length;
        this.init();
    }
}
