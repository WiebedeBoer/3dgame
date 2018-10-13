var THREEx = THREEx || {}
THREEx.ProceduralPolice = function(){

//generate material
var material12 = new THREE.MeshLambertMaterial({
color: 0x6f95bb
});

//city mesh
var policedepGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo12 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo12.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo12.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo12.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo12.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo12.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo12.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo12.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo12.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo12.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo12.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo12.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo12.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo12.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh12 = new THREE.Mesh( geo12  );

//loop
var poldepb = 1;
while (poldepb < 6)
  {
//police 5
if (poldepb ==1){
var poldepbcol =31;
var poldepbrow =30;
}
//precincts
else if (poldepb ==2){
var poldepbcol =21;
var poldepbrow =10;
}
else if (poldepb ==3){
var poldepbcol =15;
var poldepbrow =47;
}
else if (poldepb ==4){
var poldepbcol =42;
var poldepbrow =50;
}
else if (poldepb ==5){
var poldepbcol =48;
var poldepbrow =12;
}
else {
var poldepbcol =1;
var poldepbrow =1;
}


// put a position
buildMesh12.position.x = (2700 - 5400) + (poldepbcol * 90) - 30;
buildMesh12.position.z = (2700 - 5400) + (poldepbrow * 90) - 30;
//put a rotation
buildMesh12.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh12.scale.x = 60;
buildMesh12.scale.y = 80;
buildMesh12.scale.z = buildMesh12.scale.x;

//add geometry
var geo12 = buildMesh12.geo12;

THREE.GeometryUtils.merge( policedepGeometry, buildMesh12 );


//increment loop
poldepb ++;

   }

//return mesh
var mesh10 = new THREE.Mesh(policedepGeometry, material12);
return mesh10;

//new building end

//window canvas
function generateTexturePoliceDep(){
// build a small canvas 30x50 and paint it in white
var tpd = document.createElement( 'canvas' );
tpd.width = 60;
tpd.height = 80;
var context = tpd.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tpd, 0, 0, tpd.width, tpd.height );
// return the just built canvas
return tpd;
}


}


