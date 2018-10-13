class Plane extends THREE.Group {
    init(){
            var plane, geometry, material, mPlane, texture;

            mPlane = this;
            texture = new THREE.TextureLoader().load( "textures/plane/ground_texture3.jpg" );
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set( 200, 200 );
            material = new THREE.MeshBasicMaterial( { map: texture} );
    //material = new THREE.MeshBasicMaterial({ color:0x008000 });
    geometry = new THREE.PlaneGeometry( 5630, 5630 );
    plane = new THREE.Mesh( geometry, material );
    plane.rotation.x= - 90 * Math.PI / 180;
    mPlane.add(plane);
}
constructor(){
        super();
    this.init();
}
}