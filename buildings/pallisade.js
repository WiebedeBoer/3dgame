class Pallisade extends THREE.Group {

    init (){

        var mCityhall = this;
    
    //city geometry
    var cityGeometry= new THREE.Geometry();

    //city mesh
    var hallGeometry = new THREE.CubeGeometry(1, 1, 1 );

    // translate the geometry to place the pivot point at the bottom instead of the center
    hallGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

    //mesh
    var meshCityhall = new THREE.Mesh(hallGeometry);

    //north south direction
    if (this.type =="wallNS"){
        var texture = new THREE.TextureLoader().load( "textures/wall/pallisade.jpg" );    
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
        texture.repeat.set( this.bWidth / 60, 1 );    
        //material
        var hallMaterials = [
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/pallisade.jpg"), side: THREE.FrontSide }), //LEFT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/pallisade.jpg"), side: THREE.FrontSide }), //RIGHT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/roof/roof_wood.jpg"), side: THREE.FrontSide }), //TOP
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide }), //BOTTOM
            new THREE.MeshPhongMaterial({ map: texture, side: THREE.FrontSide }), //FRONT
            new THREE.MeshPhongMaterial({ map: texture, side: THREE.FrontSide }), //BACK
            ];
    }
    //south west direction
    else {
        var texture = new THREE.TextureLoader().load( "textures/wall/pallisade.jpg" );    
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
        texture.repeat.set( this.bDepth / 60, 1 );     
        //material
        var hallMaterials = [
            new THREE.MeshPhongMaterial({ map: texture,side: THREE.FrontSide }), //LEFT
            new THREE.MeshPhongMaterial({ map: texture, side: THREE.FrontSide }), //RIGHT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/roof/roof_wood.jpg"), side: THREE.FrontSide }), //TOP
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide }), //BOTTOM
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/pallisade.jpg"), side: THREE.FrontSide }), //FRONT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/pallisade.jpg"), side: THREE.FrontSide }), //BACK
            ];
    }

    // put a position
    meshCityhall.position.x = this.nrow;
    meshCityhall.position.z = this.ncol;

    var hallMaterial = new THREE.MeshFaceMaterial(hallMaterials); 

    //put a rotation
    meshCityhall.rotation.y = 0.5*Math.PI*2;
    //building scale
    meshCityhall.scale.x = this.bWidth;
    meshCityhall.scale.y = this.bHeight;
    meshCityhall.scale.z = this.bDepth;

    // merge it with cityGeometry - very important for performance
    var hallGeometry = meshCityhall.hallGeometry;
    cityGeometry.mergeMesh(meshCityhall);
    //add to class
    var mesh4 = new THREE.Mesh(cityGeometry, hallMaterial);
    mCityhall.add(mesh4);
    //add to collision
    collidableMeshList.push(mesh4);
    
    }

    constructor(type,bHeight,bWidth,bDepth,crow,ccol){
    super();
    this.type = type;
    this.bHeight = bHeight;
    this.bWidth = bWidth;
    this.bDepth = bDepth;
    this.nrow = crow;
    this.ncol = ccol;
    this.init();
    }


}