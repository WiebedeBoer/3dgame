class Bank extends THREE.Group {

    init (){

        var mCityhall = this;
    
        //city geometry
        var cityGeometry= new THREE.Geometry();
        //city mesh
        var hallGeometry = new THREE.CubeGeometry(1, 1, 1 );
        // translate the geometry to place the pivot point at the bottom instead of the center
        hallGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
        //tiles
        var texture = new THREE.TextureLoader().load( "textures/ground/"+this.groundTex+".jpg" );
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( this.bSize / 40, this.bSize / 40 );
        //material
        var hallMaterials = [
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.leftTex+".jpg"), side: THREE.BackSide }), //LEFT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.rightTex+".jpg"), side: THREE.BackSide }), //RIGHT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/roof/roof_wood.jpg"), side: THREE.BackSide }), //TOP
            new THREE.MeshPhongMaterial({ map: texture, side: THREE.BackSide }), //BOTTOM
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.frontTex+".jpg"), side: THREE.BackSide }), //FRONT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.backTex+".jpg"), side: THREE.BackSide }), //BACK
        ];
        var hallMaterial = new THREE.MeshFaceMaterial(hallMaterials);
        var meshCityhall = new THREE.Mesh(hallGeometry);
        // put a position
        meshCityhall.position.x = 0;
        meshCityhall.position.z = 0;
        //put a rotation
        meshCityhall.rotation.y = 0.5*Math.PI*2;
        //building scale
        meshCityhall.scale.x = this.bSize;
        meshCityhall.scale.y = 36;
        meshCityhall.scale.z = this.bSize;

        // merge it with cityGeometry - very important for performance
        var hallGeometry = meshCityhall.hallGeometry;
        cityGeometry.mergeMesh(meshCityhall);
        //add to class
        var mesh4 = new THREE.Mesh(cityGeometry, hallMaterial);
        mCityhall.add(mesh4);
        //add to collision
        collidableMeshList.push(mesh4);
    
    }

    constructor(frontTex,backTex,rightTex,leftTex,groundTex,bSize){
        super();        
        this.frontTex = frontTex;
        this.backTex = backTex;
        this.rightTex = rightTex;
        this.leftTex = leftTex;
        this.groundTex = groundTex;
        this.bSize = bSize;
        this.init();
    }


}