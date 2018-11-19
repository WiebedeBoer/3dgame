class Square extends THREE.Group {

  init (){

    var mCity = this;

    //city mesh
    var geometry = new THREE.CubeGeometry(1, 1, 1 );

    // translate the geometry to place the pivot point at the bottom instead of the center
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
    
    var comMaterials = [
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //LEFT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //RIGHT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/"+this.topbuild+".jpg"), side: THREE.FrontSide }), //TOP
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide }), //BOTTOM
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //FRONT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //BACK
      ];  
    var comMaterial = new THREE.MeshFaceMaterial(comMaterials);
    var buildingMesh = new THREE.Mesh(geometry);

    //city geometry
    var cityGeometry= new THREE.Geometry();

      // put a position
      buildingMesh.position.x = this.xpos; //column
      buildingMesh.position.z = this.zpos; //row
      //put a rotation
      buildingMesh.rotation.y = 0.5*Math.PI*2;
      //building scale
      buildingMesh.scale.x = this.width;
      buildingMesh.scale.y = 2;
      buildingMesh.scale.z = this.length;
      // merge it with cityGeometry - very important for performance
      var geometry = buildingMesh.geometry;
      //merge
      cityGeometry.mergeMesh(buildingMesh);

        //add to class
        var mesh9 = new THREE.Mesh(cityGeometry, comMaterial);
        mCity.add(mesh9);  

}

  //constructor: texture, width, length, x position, z position
  constructor(topbuild,width,length,xPos,zPos){
    super();   
    this.topbuild = topbuild; 
    this.xpos = xPos;
    this.zpos = zPos;   
    this.width = width;
    this.length = length;
    this.init();
  }

}