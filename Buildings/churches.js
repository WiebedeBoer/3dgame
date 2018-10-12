class Church extends THREE.Group {

  init (){

      var mChurch = this;
     
     //generate material
     var material4 = new THREE.MeshLambertMaterial({
      color: 0xd7dadf
    });

    //city mesh
    var townGeometry = new THREE.Geometry();

    var churchGeometry = new THREE.BoxGeometry(60, 80, 60);
    var churchMaterials = [
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //LEFT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //RIGHT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground11.jpg"), side: THREE.DoubleSide }), //TOP
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //BOTTOM
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //FRONT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/concrete.jpg"), side: THREE.DoubleSide }), //BACK
        ];
    var churchMaterial = new THREE.MeshFaceMaterial(churchMaterials);
    var meshChurch = new THREE.Mesh(churchGeometry, material4);


//loop
var churb = 1;
while (churb < 7)
  {
//churches 6
if (churb ==1){
var churbcol =29;
var churbrow =39;
}
else if (churb ==2){
var churbcol =13;
var churbrow =51;
}
else if (churb ==3){
var churbcol =42;
var churbrow =47;
}
else if (churb ==4){
var churbcol =10;
var churbrow =25;
}
else if (churb ==5){
var churbcol =48;
var churbrow =20;
}
else if (churb ==6){
var churbcol =24;
var churbrow =9;
}
else {
var churbcol =1;
var churbrow =1;
}


// put a position
meshChurch.position.x = (2700 - 5400) + (churbcol * 90) + 15;
meshChurch.position.z = (2700 - 5400) + (churbrow * 90) - 30;
//put a rotation
meshChurch.rotation.y = 0.5*Math.PI*2;

//add geometry
var churchGeometry = meshChurch.churchGeometry;

townGeometry.mergeMesh(meshChurch);


//increment loop
churb ++;

  }
  var mesh3 = new THREE.Mesh(townGeometry, churchMaterial);
  mChurch.add(mesh3);
  collidableMeshList.push(mesh3);
         
  }
             
  constructor(){
    super();
   
    this.init();
  }
   
}





