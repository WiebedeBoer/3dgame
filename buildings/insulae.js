class Commercial extends THREE.Group {

  init (){

    var mCity = this;

    //city mesh
    var geometry = new THREE.CubeGeometry(1, 1, 1 );

    // translate the geometry to place the pivot point at the bottom instead of the center
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

    
    var comMaterials = [
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.leftbuild+".jpg"), side: THREE.FrontSide }), //LEFT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.rightbuild+".jpg"), side: THREE.FrontSide }), //RIGHT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/roof/roof2.jpg"), side: THREE.FrontSide }), //TOP
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide }), //BOTTOM
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.frontbuild+".jpg"), side: THREE.FrontSide }), //FRONT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.backbuild+".jpg"), side: THREE.FrontSide }), //BACK
      ];  
    var comMaterial = new THREE.MeshFaceMaterial(comMaterials);
    var buildingMesh = new THREE.Mesh(geometry);

    //city geometry
    var cityGeometry= new THREE.Geometry();

  //no. buildings, max = 1600
  //var mxi = 1600; 40 x 40 grid
  var mxi = 1600;
  //loop
  var i = 1;
  while (i < mxi){

    //row
    var jezi = (Math.floor(i / 40)) + 1;
    //column

    var itag = i - 1;
    var tench = xtag[itag].getElementsByTagName("BUSINESS")[0].childNodes[0].nodeValue;

    if (tench ==this.type){

      // put a position
      buildingMesh.position.x = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
      buildingMesh.position.z = (1800 - 3600) + (jezi * 90) - 30; //row
      //put a rotation
      buildingMesh.rotation.y = 0.5*Math.PI*2;
      //building scale
      buildingMesh.scale.x = 60;
      buildingMesh.scale.y = this.height;
      buildingMesh.scale.z = buildingMesh.scale.x;
      // merge it with cityGeometry - very important for performance
      var geometry = buildingMesh.geometry;
      //merge
      cityGeometry.mergeMesh(buildingMesh);
    }

    //increment loop
    i ++;

  }

  
  //add to class
  var mesh8 = new THREE.Mesh(cityGeometry, comMaterial);
  mCity.add(mesh8);  
  //add to collision
  collidableMeshList.push(mesh8);

}

  //constructor: building type, front texture, back texture, right texture, left texture, building height
  constructor(type,frontbuild,backbuild,rightbuild,leftbuild,height){
    super();
    this.type = type;
    this.frontbuild = frontbuild;
    this.backbuild = backbuild;
    this.rightbuild = rightbuild
    this.leftbuild = leftbuild;
    this.height = height;
    this.init();
  }

}