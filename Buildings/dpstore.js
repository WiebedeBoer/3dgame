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
      //var depMaterial = new THREE.MeshFaceMaterial(depMaterials);
      //var meshDep = new THREE.Mesh(depgeometry, depMaterial);
      var depMaterial = new THREE.MeshFaceMaterial(depMaterials);
      var meshDep = new THREE.Mesh(depgeometry, material3);
      //mDepartment.add(meshDep);

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
//building scale
//buildMesh2.scale.x = 60;
//buildMesh2.scale.y = 100;
//buildMesh2.scale.z = buildMesh2.scale.x;

//add geometry
var depgeometry = meshDep.depgeometry;

townGeometry.mergeMesh(meshDep);
//meshDep.merge(townGeometry);

//THREE.GeometryUtils.merge( depgeometry, meshDep );
//THREE.GeometryUtils.merge( townGeometry, meshDep );
//THREE.Geometry.merge( townGeometry, meshDep );

//increment loop
dp ++;

   }



//return mesh
//var mesh2 = new THREE.Mesh(townGeometry, material3);
var mesh2 = new THREE.Mesh(townGeometry, depMaterial);
mDepartment.add(mesh2);
collidableMeshList.push(mesh2);
//return mesh2;
      
  }
          
  constructor(){
      super();

      this.init();
  }

}








/*
var THREEx = THREEx || {}
THREEx.ProceduralDepStore = function(){

//generate material
var material3 = new THREE.MeshLambertMaterial({
color: 0xd7dadf
});

//city mesh
var townGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo2 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo2.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo2.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo2.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo2.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo2.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo2.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo2.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo2.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo2.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo2.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo2.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo2.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo2.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh2 = new THREE.Mesh( geo2  );

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
buildMesh2.position.x = (2700 - 5400) + (dpcol * 90) - 30;
buildMesh2.position.z = (2700 - 5400) + (dprow * 90) - 30;
//put a rotation
buildMesh2.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh2.scale.x = 60;
buildMesh2.scale.y = 100;
buildMesh2.scale.z = buildMesh2.scale.x;

//add geometry
var geo2 = buildMesh2.geo2;

THREE.GeometryUtils.merge( townGeometry, buildMesh2 );

//increment loop
dp ++;

   }




//return mesh
var mesh2 = new THREE.Mesh(townGeometry, material3);
return mesh2;

//new building end



//window canvas
function generateTextureDepartment(){
// build a small canvas 30x50 and paint it in white
var d = document.createElement( 'canvas' );
d.width = 60;
d.height = 80;
var context = d.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( d, 0, 0, d.width, d.height );
// return the just built canvas
return d;
}


}
*/
