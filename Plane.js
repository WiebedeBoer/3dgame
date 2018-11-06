class Plane extends THREE.Group {
    init(){
        var plane, geometry, material, mPlane, texture;
        mPlane = this;
        //texturing repeat
        texture = new THREE.TextureLoader().load( "textures/plane/ground2.jpg" );
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( this.width / 90, this.length / 90 );
        texture.offset.set( 0.45 , 0.45 ); 
        //material
        material = new THREE.MeshBasicMaterial( { map: texture} );         
        //geometry
        geometry = new THREE.PlaneGeometry( this.width, this.length );
        //plane
        plane = new THREE.Mesh( geometry, material );
        //rotation
        plane.rotation.x= - 90 * Math.PI / 180;    
        //add plane
        mPlane.add(plane);
    }
    //constructor
    constructor(width,length){
        super();
        this.width = width;
        this.length = length;
        this.init();
    }
}