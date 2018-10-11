class DepartmentStore extends THREE.Group {

  init (){

      var mDepartment = this;

      //generate material
      var material3 = new THREE.MeshLambertMaterial({
        color: 0xd7dadf
      });

      //city mesh
      var townGeometry = new THREE.Geometry();

      var depgeometry = new THREE.BoxGeometry(60, 100, 60);
      var depMaterials = [
              new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //LEFT
              new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //RIGHT
              new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //TOP
              new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //BOTTOM
              new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //FRONT
              new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/bricks.jpg"), side: THREE.DoubleSide }), //BACK
          ];
      var depMaterial = new THREE.MeshFaceMaterial(depMaterials);
      var meshDep = new THREE.Mesh(depgeometry, material3);

      //loop
var dp = 1;
while (dp < 13)
  {

if (dp ==1){
var dpcol =5;
var dprow =10;
}
else if (dp ==2){
var dpcol =10;
var dprow =15;
}
else if (dp ==3){
var dpcol =20;
var dprow =20;
}
else if (dp ==4){
var dpcol =25;
var dprow =25;
}
else if (dp ==5){
var dpcol =21;
var dprow =20;
}
else if (dp ==6){
var dpcol =20;
var dprow =21;
}
else if (dp ==7){
var dpcol =17;
var dprow =18;
}
else if (dp ==8){
var dpcol =9;
var dprow =15;
}
else if (dp ==9){
var dpcol =47;
var dprow =8;
}
else if (dp ==10){
var dpcol =29;
var dprow =30;
}
else if (dp ==11){
var dpcol =29;
var dprow =32;
}
else if (dp ==12){
var dpcol =38;
var dprow =51;
}
else {
var dpcol =1;
var dprow =1;
}

// put a position
meshDep.position.x = (2700 - 5400) + (dpcol * 90) - 30;
meshDep.position.z = (2700 - 5400) + (dprow * 90) - 30;
//put a rotation
meshDep.rotation.y = 0.5*Math.PI*2;

//add geometry
var depgeometry = meshDep.depgeometry;

townGeometry.mergeMesh(meshDep);

//increment loop
dp ++;

   }

var mesh2 = new THREE.Mesh(townGeometry, depMaterial);
mDepartment.add(mesh2);
collidableMeshList.push(mesh2);
      
  }
          
  constructor(){
      super();

      this.init();
  }

}