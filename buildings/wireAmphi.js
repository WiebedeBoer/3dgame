class wireAmphi extends THREE.Group {

  init (){

    var mCity = this;

    //city mesh
    var geometry = new THREE.CylinderGeometry( this.width, this.depth, this.height, 64 ); //new THREE.CubeGeometry(1,1,1);

    // translate the geometry to place the pivot point at the bottom instead of the center
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );    
 
    var comMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe:true, visible:false } );
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
      buildingMesh.position.y = this.height / 2;
      //put a rotation
      buildingMesh.rotation.y = 0.5*Math.PI*2;
      // merge it with cityGeometry - very important for performance
      var geometry = buildingMesh.geometry;
      //merge
      cityGeometry.mergeMesh(buildingMesh);
    }

    //increment loop
    i ++;

  }

  
  //add to class
  var meshw = new THREE.Mesh(cityGeometry, comMaterial);
  mCity.add(meshw);  
  //add to collision
  collidableMeshList.push(meshw);

}

  //constructor: building type, building height
  constructor(type,height,width,depth){
    super();
    this.type = type;
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.init();
  }

}