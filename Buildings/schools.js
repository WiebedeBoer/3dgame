var THREEx = THREEx || {}
THREEx.ProceduralSchools = function(){

//generate material
var material24 = new THREE.MeshLambertMaterial({
color: 0xbcc5c4
});

//city mesh
var schoolsGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo24 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo24.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo24.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo24.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo24.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo24.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo24.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo24.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo24.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo24.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo24.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo24.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo24.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo24.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh24 = new THREE.Mesh( geo24  );


//loop
var schb = 1;
while (schb < 7)
  {

if (schb ==1){
var schbcol =25;
var schbrow =11;
}
else if (schb ==2){
var schbcol =53;
var schbrow =18;
}
else if (schb ==3){
var schbcol =7;
var schbrow =27;
}
else if (schb ==4){
var schbcol =7;
var schbrow =51;
}
else if (schb ==5){
var schbcol =43;
var schbrow =44;
}
else if (schb ==6){
var schbcol =18;
var schbrow =39;
}
else {
var schbcol =1;
var schbrow =1;
}


// put a position
buildMesh24.position.x = (2700 - 5400) + (schbcol * 90) - 30;
buildMesh24.position.z = (2700 - 5400) + (schbrow * 90) - 30;
//put a rotation
buildMesh24.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh24.scale.x = 60;
buildMesh24.scale.y = 80;
buildMesh24.scale.z = buildMesh24.scale.x;

//add geometry
var geo24 = buildMesh24.geo24;

THREE.GeometryUtils.merge( schoolsGeometry, buildMesh24 );


//increment loop
schb ++;

   }




//return mesh
var mesh22 = new THREE.Mesh(schoolsGeometry, material24);
return mesh22;

//new building end



//window canvas
function generateTextureSchools(){
// build a small canvas 30x50 and paint it in white
var tschool = document.createElement( 'canvas' );
tschool.width = 60;
tschool.height = 40;
var context = tschool.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tschool, 0, 0, tschool.width, tschool.height );
// return the just built canvas
return tschool;
}


}


