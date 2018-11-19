class Fora extends THREE.Group {

  init (){

    var mCity = this;

    //city mesh
    var geometry = new THREE.CubeGeometry(1, 1, 1 );

    // translate the geometry to place the pivot point at the bottom instead of the center
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

    //city geometry
    var cityGeometry= new THREE.Geometry();
    //building geometry
    var buildingMesh = new THREE.Mesh(geometry); 
    
    //materials
    var comMaterials = [
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //LEFT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //RIGHT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/"+this.topbuild+".jpg"), side: THREE.FrontSide }), //TOP
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide }), //BOTTOM
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //FRONT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //BACK
    ]; 
                
    //material
    var comMaterial = new THREE.MeshFaceMaterial(comMaterials);

  //no. buildings, max = 1600
  //var mxi = 1600; 40 x 40 grid
  var mxi = 1600;
  //loop
  var i = 1;
  console.log("itag"+i);
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
        buildingMesh.scale.x = this.length;
        buildingMesh.scale.y = this.height;
        buildingMesh.scale.z = this.width;
        // merge it with cityGeometry - very important for performance
        var geometry = buildingMesh.geometry;
        //merge
        cityGeometry.mergeMesh(buildingMesh);
        //pillars
        buildingMesh.position.x 
        var columnadeW = new Pillar_Fora(buildingMesh.position.x-25,2,buildingMesh.position.z-25);
        scene.add(columnadeW);
        var columnadeE = new Pillar_Fora(buildingMesh.position.x-25,2,buildingMesh.position.z+25);
        scene.add(columnadeE);
        var columnadeM = new Pillar_Fora(buildingMesh.position.x-25,2,buildingMesh.position.z);
        scene.add(columnadeM);

    }

    //increment loop
    i ++;

  }
  
  //add to class
  var mesh9 = new THREE.Mesh(cityGeometry, comMaterial);
  mCity.add(mesh9); 

}

  //constructor: building type, front texture, back texture, right texture, left texture, building height, width, length
  constructor(type,topbuild,height,width,length){
    super();
    this.type = type; 
    this.topbuild = topbuild;   
    this.height = height;
    this.width = width;
    this.length = length;
    this.init();
  }

}