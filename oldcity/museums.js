var THREEx = THREEx || {}
THREEx.ProceduralMuseums = function(){

//generate material
var material9 = new THREE.MeshLambertMaterial({
color: 0xbbc7ba
});

//city mesh
var museumGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo9 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo9.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo9.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo9.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo9.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo9.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo9.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo9.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo9.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo9.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo9.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo9.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo9.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo9.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh9 = new THREE.Mesh( geo9  );


//loop
var musb = 1;
while (musb < 16)
  {
//museums 4
if (musb ==1){
var musbcol =24;
var musbrow =17;
}
else if (musb ==2){
var musbcol =11;
var musbrow =22;
}
else if (musb ==3){
var musbcol =28;
var musbrow =28;
}
else if (musb ==4){
var musbcol =34;
var musbrow =18;
}
//orchestra halls 2
else if (musb ==5){
var musbcol =29;
var musbrow =22;
}
else if (musb ==6){
var musbcol =28;
var musbrow =36;
}
//opera hall 1
else if (musb ==7){
var musbcol =28;
var musbrow =34;
}
//theatres 3
else if (musb ==8){
var musbcol =45;
var musbrow =6;
}
else if (musb ==9){
var musbcol =43;
var musbrow =6;
}
else if (musb ==10){
var musbcol =42;
var musbrow =5;
}
//libraries 4
else if (musb ==11){
var musbcol =11;
var musbrow =49;
}
else if (musb ==12){
var musbcol =39;
var musbrow =49;
}
else if (musb ==13){
var musbcol =43;
var musbrow =13;
}
else if (musb ==14){
var musbcol =32;
var musbrow =26;
}
//public bath 1
else if (musb ==15){
var musbcol =42;
var musbrow =28;
}
else {
var musbcol =1;
var musbrow =1;
}


// put a position
buildMesh9.position.x = (2700 - 5400) + (musbcol * 90) - 30;
buildMesh9.position.z = (2700 - 5400) + (musbrow * 90) - 30;
//put a rotation
buildMesh9.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh9.scale.x = 60;
buildMesh9.scale.y = 80;
buildMesh9.scale.z = buildMesh9.scale.x;

//add geometry
var geo9 = buildMesh9.geo9;

THREE.GeometryUtils.merge( museumGeometry, buildMesh9 );


//increment loop
musb ++;

   }




//return mesh
var mesh7 = new THREE.Mesh(museumGeometry, material9);
return mesh7;

//new building end



//window canvas
function generateTextureMuseums(){
// build a small canvas 30x50 and paint it in white
var tmus = document.createElement( 'canvas' );
tmus.width = 60;
tmus.height = 80;
var context = tmus.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tmus, 0, 0, tmus.width, tmus.height );
// return the just built canvas
return tmus;
}


}


