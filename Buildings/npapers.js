var THREEx = THREEx || {}
THREEx.ProceduralNewspapers = function(){

//generate material
var material7 = new THREE.MeshLambertMaterial({
color: 0x9a7c71
});

//city mesh
var newsGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo7 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo7.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo7.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo7.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo7.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo7.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo7.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo7.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo7.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo7.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo7.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo7.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo7.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo7.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh7 = new THREE.Mesh( geo7  );


//loop
var nwps = 1;
while (nwps < 7)
  {

if (nwps ==1){
var nwpscol =10;
var nwpsrow =7;
}
else if (nwps ==2){
var nwpscol =44;
var nwpsrow =11;
}
else if (nwps ==3){
var nwpscol =39;
var nwpsrow =53;
}
else if (nwps ==4){
var nwpscol =35;
var nwpsrow =25;
}
else if (nwps ==5){
var nwpscol =38;
var nwpsrow =26;
}
else if (nwps ==6){
var nwpscol =10;
var nwpsrow =49;
}
else {
var nwpscol =1;
var nwpsrow =1;
}


// put a position
buildMesh7.position.x = (2700 - 5400) + (nwpscol * 90) - 30;
buildMesh7.position.z = (2700 - 5400) + (nwpsrow * 90) - 30;
//put a rotation
buildMesh7.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh7.scale.x = 60;
buildMesh7.scale.y = 80;
buildMesh7.scale.z = buildMesh7.scale.x;

//add geometry
var geo7 = buildMesh7.geo7;

THREE.GeometryUtils.merge( newsGeometry, buildMesh7 );


//increment loop
nwps ++;

   }




//return mesh
var mesh5 = new THREE.Mesh(newsGeometry, material7);
return mesh5;

//new building end



//window canvas
function generateTextureNewspapers(){
// build a small canvas 30x50 and paint it in white
var newsp = document.createElement( 'canvas' );
newsp.width = 60;
newsp.height = 80;
var context = newsp.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( newsp, 0, 0, newsp.width, newsp.height );
// return the just built canvas
return newsp;
}


}


