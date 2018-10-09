var THREEx = THREEx || {}
THREEx.ProceduralMovTheatres = function(){

//generate material
var material25 = new THREE.MeshLambertMaterial({
color: 0xb7a8a6
});

//city mesh
var movieGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo25 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo25.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo25.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo25.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo25.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo25.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo25.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo25.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo25.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo25.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo25.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo25.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo25.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo25.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh25 = new THREE.Mesh( geo25  );


//loop
var movieb = 1;
while (movieb < 5)
  {

if (movieb ==1){
var moviebcol =42;
var moviebrow =9;
}
else if (movieb ==2){
var moviebcol =37;
var moviebrow =10;
}
else if (movieb ==3){
var moviebcol =24;
var moviebrow =33;
}
else if (movieb ==4){
var moviebcol =36;
var moviebrow =45;
}
else {
var moviebcol =1;
var moviebrow =1;
}


// put a position
buildMesh25.position.x = (2700 - 5400) + (moviebcol * 90) - 30;
buildMesh25.position.z = (2700 - 5400) + (moviebrow * 90) - 30;
//put a rotation
buildMesh25.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh25.scale.x = 60;
buildMesh25.scale.y = 60;
buildMesh25.scale.z = buildMesh25.scale.x;

//add geometry
var geo25 = buildMesh25.geo25;

THREE.GeometryUtils.merge( movieGeometry, buildMesh25 );


//increment loop
movieb ++;

   }




//return mesh
var mesh23 = new THREE.Mesh(movieGeometry, material25);
return mesh23;

//new building end



//window canvas
function generateTextureMovTh(){
// build a small canvas 30x50 and paint it in white
var tmovie = document.createElement( 'canvas' );
tmovie.width = 60;
tmovie.height = 40;
var context = tmovie.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tmovie, 0, 0, tmovie.width, tmovie.height );
// return the just built canvas
return tmovie;
}


}


