var THREEx = THREEx || {}
THREEx.ProceduralChurches = function(){

//generate material
var material11 = new THREE.MeshLambertMaterial({
color: 0xbbc7ba
});

//city mesh
var churchGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo11 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo11.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo11.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo11.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo11.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo11.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo11.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo11.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo11.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo11.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo11.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo11.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo11.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo11.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh11 = new THREE.Mesh( geo11  );


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
buildMesh11.position.x = (2700 - 5400) + (churbcol * 90) + 15;
buildMesh11.position.z = (2700 - 5400) + (churbrow * 90) - 30;
//put a rotation
buildMesh11.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh11.scale.x = 150;
buildMesh11.scale.y = 100;
buildMesh11.scale.z = 60;

//add geometry
var geo11 = buildMesh11.geo11;

THREE.GeometryUtils.merge( churchGeometry, buildMesh11 );


//increment loop
churb ++;

   }




//return mesh
var mesh9 = new THREE.Mesh(churchGeometry, material11);
return mesh9;

//new building end



//window canvas
function generateTextureChurch(){
// build a small canvas 30x50 and paint it in white
var tchu = document.createElement( 'canvas' );
tchu.width = 60;
tchu.height = 80;
var context = tchu.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tchu, 0, 0, tchu.width, tchu.height );
// return the just built canvas
return tchu;
}


}


