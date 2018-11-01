class Plane extends THREE.Group {
    init(){
        var plane, geometry, material, mPlane, texture;

        mPlane = this;
        
            texture = new THREE.TextureLoader().load( "textures/plane/ground2.jpg" );
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set( this.width / 90, this.length / 90 );
            texture.offset.set( 0.45 , 0.45 ); 
            //material = new THREE.MeshPhongMaterial( { map: texture} );
            material = new THREE.MeshBasicMaterial( { map: texture} );
            //var planeMaterial = new THREE.MeshFaceMaterial(material);
        
      
        geometry = new THREE.PlaneGeometry( this.width, this.length );
        //plane = new THREE.Mesh( geometry, planeMaterial );
        plane = new THREE.Mesh( geometry, material );

        plane.rotation.x= - 90 * Math.PI / 180;
        //receive shadow
        plane.traverse(function (child) { child.receiveShadow = true;  });

        //add plane
        mPlane.add(plane);
    }
    constructor(width,length){
        super();
        this.width = width;
        this.length = length;
        this.init();
    }
}