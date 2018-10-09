var THREEx = THREEx || {}
THREEx.ProceduralPostOffice = function(){

//generate material
var material15 = new THREE.MeshLambertMaterial({
color: 0xf3f3f3
});

//city mesh
var postofficeGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo15 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo15.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo15.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo15.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo15.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo15.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo15.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo15.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo15.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo15.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo15.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo15.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo15.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo15.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh15 = new THREE.Mesh( geo15  );

//loop
var postofb = 1;
while (postofb < 9)
  {
//post offices 5
if (postofb ==1){
var postofbcol =34;
var postofbrow =31;
}
else if (postofb ==2){
var postofbcol =23;
var postofbrow =21;
}
else if (postofb ==3){
var postofbcol =12;
var postofbrow =48;
}
else if (postofb ==4){
var postofbcol =39;
var postofbrow =51;
}
else if (postofb ==5){
var postofbcol =11;
var postofbrow =17;
}
//telegraph office 1
else if (postofb ==6){
var postofbcol =49;
var postofbrow =30;
}
//stock exchange 1
else if (postofb ==7){
var postofbcol =23;
var postofbrow =25;
}
//labor exchange 1
else if (postofb ==8){
var postofbcol =32;
var postofbrow =23;
}
else {
var postofbcol =1;
var postofbrow =1;
}


// put a position
buildMesh15.position.x = (2700 - 5400) + (postofbcol * 90) - 30;
buildMesh15.position.z = (2700 - 5400) + (postofbrow * 90) - 30;
//put a rotation
buildMesh15.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh15.scale.x = 60;
buildMesh15.scale.y = 100;
buildMesh15.scale.z = buildMesh15.scale.x;

//add geometry
var geo15 = buildMesh15.geo15;

THREE.GeometryUtils.merge( postofficeGeometry, buildMesh15 );


//increment loop
postofb ++;

   }

//return mesh
var mesh13 = new THREE.Mesh(postofficeGeometry, material15);
return mesh13;

//new building end

//window canvas
function generateTexturePostOffice(){
// build a small canvas 30x50 and paint it in white
var tpo = document.createElement( 'canvas' );
tpo.width = 60;
tpo.height = 60;
var context = tpo.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 60 );

// then draw the image
context.drawImage( tpo, 0, 0, tpo.width, tpo.height );
// return the just built canvas
return tpo;
}


}


