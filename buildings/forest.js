class Forest extends THREE.Group {

    init (){

    var mCityhall = this;
    
    //city geometry
    var cityGeometry= new THREE.Geometry();

    //city mesh
    var hallGeometry = new THREE.CubeGeometry(1, 1, 1 );

    // translate the geometry to place the pivot point at the bottom instead of the center
    hallGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

    var params = { opacity: 0.7 };
    var opaq = { opacity: 0.0 };

    //material
    var hallMaterials = [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/tree/tree_transparent.png"), side: THREE.FrontSide, opacity: params.opacity,transparent: true }), //LEFT
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/tree/tree_transparent.png"), side: THREE.FrontSide, opacity: params.opacity,transparent: true  }), //RIGHT
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide, opacity: opaq.opacity,transparent: true  }), //TOP
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide, opacity: opaq.opacity,transparent: true  }), //BOTTOM
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/tree/tree_transparent.png"), side: THREE.FrontSide, opacity: params.opacity,transparent: true  }), //FRONT
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/tree/tree_transparent.png"), side: THREE.FrontSide, opacity: params.opacity,transparent: true  }), //BACK
        ];
    var hallMaterial = new THREE.MeshFaceMaterial(hallMaterials);
    var meshTree = new THREE.Mesh(hallGeometry);

    // put a position
    meshTree.position.x = this.nrow;
    meshTree.position.z = this.ncol;
    //put a rotation
    meshTree.rotation.y = 0.5*Math.PI*2;
    //building scale
    meshTree.scale.x = 15;
    meshTree.scale.y = this.bHeight;
    meshTree.scale.z = 15;

    // merge it with cityGeometry - very important for performance
    var hallGeometry = meshTree.hallGeometry;
    cityGeometry.mergeMesh(meshTree);
    //add to class
    var mesh4 = new THREE.Mesh(cityGeometry, hallMaterial);
    mCityhall.add(mesh4);
    //add to collision
    collidableMeshList.push(mesh4);
    
    }

    constructor(crow,bHeight,ccol){
    super();
    this.bHeight = bHeight;
    this.nrow = crow;
    this.ncol = ccol;
    this.init();
    }


}