var THREEx = THREEx || {}
THREEx.ProceduralRadios = function(){

//generate material
var material8 = new THREE.MeshLambertMaterial({
color: 0x9a7c71
});

//city mesh
var radioGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo8 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo8.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo8.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo8.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo8.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo8.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo8.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo8.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo8.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo8.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo8.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo8.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo8.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo8.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh8 = new THREE.Mesh( geo8  );


//loop
var rdsb = 1;
while (rdsb < 3)
  {

if (rdsb ==1){
var rdsbcol =46;
var rdsbrow =27;
}
else if (rdsb ==2){
var rdsbcol =24;
var rdsbrow =51;
}
else {
var rdsbcol =1;
var rdsbrow =1;
}


// put a position
buildMesh8.position.x = (2700 - 5400) + (rdsbcol * 90) - 30;
buildMesh8.position.z = (2700 - 5400) + (rdsbrow * 90) - 30;
//put a rotation
buildMesh8.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh8.scale.x = 60;
buildMesh8.scale.y = 40;
buildMesh8.scale.z = buildMesh8.scale.x;

//add geometry
var geo8 = buildMesh8.geo8;

THREE.GeometryUtils.merge( radioGeometry, buildMesh8 );


//increment loop
rdsb ++;

   }




//return mesh
var mesh6 = new THREE.Mesh(radioGeometry, material8);
return mesh6;

//new building end



//window canvas
function generateTextureRadios(){
// build a small canvas 30x50 and paint it in white
var tradio = document.createElement( 'canvas' );
tradio.width = 60;
tradio.height = 40;
var context = tradio.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tradio, 0, 0, tradio.width, tradio.height );
// return the just built canvas
return tradio;
}


}


