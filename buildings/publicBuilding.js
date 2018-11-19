class PublicBuilding extends THREE.Group {

    init (){

        var mCityhall = this;
    
    //city geometry
    var cityGeometry= new THREE.Geometry();

    //city mesh
    var hallGeometry = new THREE.CubeGeometry(1, 1, 1 );

    // translate the geometry to place the pivot point at the bottom instead of the center
    hallGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

    //material
    var hallMaterials = [
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.leftTex+".jpg"), side: THREE.FrontSide }), //LEFT
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.rightTex+".jpg"), side: THREE.FrontSide }), //RIGHT
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/roof/roof1.jpg"), side: THREE.FrontSide }), //TOP
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide }), //BOTTOM
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.frontTex+".jpg"), side: THREE.FrontSide }), //FRONT
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.backTex+".jpg"), side: THREE.FrontSide }), //BACK
        ];
    var hallMaterial = new THREE.MeshFaceMaterial(hallMaterials);
    var meshCityhall = new THREE.Mesh(hallGeometry);

    // put a position
    meshCityhall.position.x = (1800 - 3600) + (this.nrow * 90) - 30;
    meshCityhall.position.z = (1800 - 3600) + (this.ncol * 90) - 30;
    //put a rotation
    meshCityhall.rotation.y = 0.5*Math.PI*2;
    //building scale
    meshCityhall.scale.x = 60;
    meshCityhall.scale.y = this.bHeight;
    meshCityhall.scale.z = 60;

    // merge it with cityGeometry - very important for performance
    var hallGeometry = meshCityhall.hallGeometry;
    cityGeometry.mergeMesh(meshCityhall);
    //add to class
    var mesh4 = new THREE.Mesh(cityGeometry, hallMaterial);
    mCityhall.add(mesh4);
    //add to collision
    collidableMeshList.push(mesh4);
    
    }

    constructor(frontTex,backTex,rightTex,leftTex,bHeight,crow,ccol){
    super();
    this.frontTex = frontTex;
    this.backTex = backTex;
    this.rightTex = rightTex;
    this.leftTex = leftTex;
    this.bHeight = bHeight;
    this.nrow = crow;
    this.ncol = ccol;
    this.init();
    }


}


