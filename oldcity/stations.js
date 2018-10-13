var THREEx = THREEx || {}
THREEx.ProceduralRailStations = function(){

//generate material
var material16 = new THREE.MeshLambertMaterial({
color: 0x4e3f32
});

//city mesh
var railwayGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo16 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo16.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo16.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo16.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo16.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo16.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo16.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo16.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo16.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo16.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo16.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo16.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo16.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo16.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh16 = new THREE.Mesh( geo16  );


//loop
var railb = 1;
while (railb < 3)
  {
//railroad stations 2
if (railb ==1){
var railbcol =14;
var railbrow =59;
}
else if (railb ==2){
var railbcol =54;
var railbrow =59;
}
else {
var railbcol =1;
var railbrow =1;
}


// put a position
buildMesh16.position.x = (2700 - 5400) + (railbcol * 90) - 30;
buildMesh16.position.z = (2700 - 5400) + (railbrow * 90) + 15;
//put a rotation
buildMesh16.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh16.scale.x = 60;
buildMesh16.scale.y = 80;
buildMesh16.scale.z = 150;

//add geometry
var geo16 = buildMesh16.geo16;

THREE.GeometryUtils.merge( railwayGeometry, buildMesh16 );


//increment loop
railb ++;

   }




//return mesh
var mesh14 = new THREE.Mesh(railwayGeometry, material16);
return mesh14;

//new building end



//window canvas
function generateTextureStation(){
// build a small canvas 30x50 and paint it in white
var tchuchu = document.createElement( 'canvas' );
tchuchu.width = 60;
tchuchu.height = 80;
var context = tchuchu.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tchuchu, 0, 0, tchuchu.width, tchuchu.height );
// return the just built canvas
return tchuchu;
}


}


