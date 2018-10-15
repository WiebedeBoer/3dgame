var THREEx = THREEx || {}
THREEx.ProceduralWarehouses = function(){

//generate material
var material18 = new THREE.MeshLambertMaterial({
color: 0x4e3f32
});

//city mesh
var warehouseGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo18 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo18.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo18.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo18.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo18.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo18.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo18.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo18.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo18.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo18.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo18.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo18.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo18.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo18.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh18 = new THREE.Mesh( geo18  );

//loop
var warehb = 1;
while (warehb < 11)
  {
//warehouses 10
if (warehb ==1){
var warehbcol =60;
var warehbrow =36;
}
else if (warehb ==2){
var warehbcol =58;
var warehbrow =36;
}
else if (warehb ==3){
var warehbcol =56;
var warehbrow =36;
}
else if (warehb ==4){
var warehbcol =59;
var warehbrow =35;
}
else if (warehb ==5){
var warehbcol =57;
var warehbrow =34;
}
else if (warehb ==6){
var warehbcol =55;
var warehbrow =34;
}
else if (warehb ==7){
var warehbcol =29;
var warehbrow =55;
}
else if (warehb ==8){
var warehbcol =27;
var warehbrow =55;
}
else if (warehb ==9){
var warehbcol =50;
var warehbrow =53;
}
else if (warehb ==10){
var warehbcol =50;
var warehbrow =55;
}
else {
var warehbcol =1;
var warehbrow =1;
}


// put a position
buildMesh18.position.x = (2700 - 5400) + (warehbcol * 90) - 30;
buildMesh18.position.z = (2700 - 5400) + (warehbrow * 90) - 30;
//put a rotation
buildMesh18.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh18.scale.x = 60;
buildMesh18.scale.y = 40;
buildMesh18.scale.z = buildMesh18.scale.x;

//add geometry
var geo18 = buildMesh18.geo18;

THREE.GeometryUtils.merge( warehouseGeometry, buildMesh18 );

//increment loop
warehb ++;

   }

//return mesh
var mesh16 = new THREE.Mesh(warehouseGeometry, material18);
return mesh16;

//new building end

//window canvas
function generateTextureWarehouse(){
// build a small canvas 30x50 and paint it in white
var twah = document.createElement( 'canvas' );
twah.width = 60;
twah.height = 40;
var context = twah.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 60 );

// then draw the image
context.drawImage( twah, 0, 0, twah.width, twah.height );
// return the just built canvas
return twah;
}


}


