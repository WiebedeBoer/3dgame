var THREEx = THREEx || {}
THREEx.ProceduralLarBanks = function(){

//generate material
var material5 = new THREE.MeshLambertMaterial({
color: 0x9a7c71
});

//city mesh
var banksGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo5 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo5.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo5.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo5.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo5.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo5.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo5.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo5.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo5.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo5.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo5.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo5.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo5.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo5.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh5 = new THREE.Mesh( geo5  );


//loop
var larba = 1;
while (larba < 5)
  {

if (larba ==1){
var larbacol =22;
var larbarow =20;
}
else if (larba ==2){
var larbacol =8;
var larbarow =18;
}
else if (larba ==3){
var larbacol =19;
var larbarow =7;
}
else if (larba ==4){
var larbacol =23;
var larbarow =26;
}
else {
var larbacol =1;
var larbarow =1;
}


// put a position
buildMesh5.position.x = (2700 - 5400) + (larbacol * 90) - 30;
buildMesh5.position.z = (2700 - 5400) + (larbarow * 90) - 30;
//put a rotation
buildMesh5.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh5.scale.x = 60;
buildMesh5.scale.y = 100;
buildMesh5.scale.z = buildMesh5.scale.x;

//add geometry
var geo5 = buildMesh5.geo5;

THREE.GeometryUtils.merge( banksGeometry, buildMesh5 );


//increment loop
larba ++;

   }




//return mesh
var mesh3 = new THREE.Mesh(banksGeometry, material5);
return mesh3;

//new building end



//window canvas
function generateTextureBanks(){
// build a small canvas 30x50 and paint it in white
var tb = document.createElement( 'canvas' );
tb.width = 60;
tb.height = 80;
var context = tb.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tb, 0, 0, tb.width, tb.height );
// return the just built canvas
return tb;
}


}


