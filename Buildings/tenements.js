class Tenement extends THREE.Group {

  init (){

    var mCity = this;

    //generate material
    var materials = new THREE.MeshLambertMaterial({
    //map: texture,
    vertexColors : THREE.VertexColors
    });

    //city mesh
    var geometry = new THREE.Geometry();

    var cityGeometry = new THREE.BoxGeometry(60, 100, 60);
    var cityMaterials = [
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //LEFT
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //RIGHT
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground11.jpg"), side: THREE.DoubleSide }), //TOP
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //BOTTOM
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //FRONT
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground9.jpg"), side: THREE.DoubleSide }), //BACK
      ];
    var cityMaterial = new THREE.MeshFaceMaterial(cityMaterials);
    var buildingMesh = new THREE.Mesh(cityGeometry, materials);

    /*
    //multiply colors
    var light = new THREE.Color( 0xf8d19a );
    var redlight = new THREE.Color( 0xc58967 );
    var brightlight = new THREE.Color( 0xd77b49 );
    var darklight = new THREE.Color( 0xe7c08a );
    */

  //no. buildings, max = 1600
  //var mxi = 3600;
  var mxi = 15;
  //loop
  var i = 1;
  while (i < mxi)
    {

    //row
    var jezi = (Math.floor(i / 60)) + 1;
    //column

    var itag = i - 1;
    var tench = xtag[itag].getElementsByTagName("BUSINESS")[0].childNodes[0].nodeValue;

    if (tench =="tenement"){

    // put a position
    buildingMesh.position.x = (2700 - 5400) + ((60 + i - (jezi * 60)) * 90) - 30;
    buildingMesh.position.z = (2700 - 5400) + (jezi * 90) - 30;
    //put a rotation
    buildingMesh.rotation.y = 0.5*Math.PI*2;

    /*
    //base color
    var baseColor = new THREE.Color().setRGB( 0.98, 0.96, 0.98 );

    //color variance
    var cmodulu = i % 6;

    // set adjustement of baseColor for tenements
    if (cmodulu ==2){
    var matColor = baseColor.clone().multiply( redlight );
    }
    else if (cmodulu ==3 || cmodulu ==4){
    var matColor = baseColor.clone().multiply( brightlight );
    }
    else {
    var matColor = baseColor.clone().multiply( darklight );
    }

    //roof color
    var roofColor = baseColor.clone().multiply( light );
    */

    //add geometry
    var geometry = buildingMesh.geometry;

    /*
    for ( var j = 0, jl = geometry.faces.length; j < jl; j ++ ) {
    //0 = front, 1 = back, 2 = top, 3 = bottom?, 4 = right, 5 = left
      if (j === 2){
        geometry.faces[ j ].vertexColors = [ roofColor, roofColor, roofColor, roofColor ];
      }
      else {
        geometry.faces[ j ].vertexColors = [ roofColor, matColor, matColor, roofColor ];
      }
    }
    */

  //end tenement check
  }

  // merge it with cityGeometry - very important for performance
  var cityGeometry = buildingMesh.cityGeometry;

  geometry.mergeMesh(buildingMesh);

  //increment loop
  i ++;

  }

  var mesh1 = new THREE.Mesh(geometry, cityMaterial);
  mCity.add(mesh1);
  collidableMeshList.push(mesh1);

}

  constructor(){
    super();
 
    this.init();
  }

}



