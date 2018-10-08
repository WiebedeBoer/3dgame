var THREEx = THREEx || {}
THREEx.ProceduralLarHotels = function(){

//generate material
var material6 = new THREE.MeshLambertMaterial({
color: 0xebdaeb
});

//city mesh
var hotelsGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo6 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo6.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo6.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo6.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo6.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo6.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo6.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo6.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo6.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo6.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo6.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo6.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo6.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo6.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh6 = new THREE.Mesh( geo6  );


//loop
var lho = 1;
while (lho < 17)
  {

if (lho ==1){
var lhotecol =7;
var lhoterow =21;
}
else if (lho ==2){
var lhotecol =9;
var lhoterow =21;
}
else if (lho ==3){
var lhotecol =20;
var lhoterow =18;
}
else if (lho ==4){
var lhotecol =22;
var lhoterow =18;
}
else if (lho ==5){
var lhotecol =26;
var lhoterow =27;
}
else if (lho ==6){
var lhotecol =26;
var lhoterow =29;
}
else if (lho ==7){
var lhotecol =14;
var lhoterow =9;
}
else if (lho ==8){
var lhotecol =6;
var lhoterow =8;
}
else if (lho ==9){
var lhotecol =36;
var lhoterow =16;
}
else if (lho ==10){
var lhotecol =15;
var lhoterow =34;
}
else if (lho ==11){
var lhotecol =20;
var lhoterow =5;
}
else if (lho ==12){
var lhotecol =25;
var lhoterow =38;
}
else if (lho ==13){
var lhotecol =46;
var lhoterow =5;
}
else if (lho ==14){
var lhotecol =48;
var lhoterow =5;
}
else if (lho ==15){
var lhotecol =47;
var lhoterow =7;
}
else if (lho ==16){
var lhotecol =47;
var lhoterow =9;
}
else {
var lhotecol =1;
var lhoterow =1;
}

// put a position
buildMesh6.position.x = (2700 - 5400) + (lhotecol * 90) - 30;
buildMesh6.position.z = (2700 - 5400) + (lhoterow * 90) - 30;
//put a rotation
buildMesh6.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh6.scale.x = 60;
buildMesh6.scale.y = 100;
buildMesh6.scale.z = buildMesh6.scale.x;

//add geometry
var geo6 = buildMesh6.geo6;

THREE.GeometryUtils.merge( hotelsGeometry, buildMesh6 );


//increment loop
lho ++;

   }




//return mesh
var mesh4 = new THREE.Mesh(hotelsGeometry, material6);
return mesh4;

//new building end



//window canvas
function generateTextureHotels(){
// build a small canvas 30x50 and paint it in white
var tht = document.createElement( 'canvas' );
tht.width = 60;
tht.height = 80;
var context = tht.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tht, 0, 0, tht.width, tht.height );
// return the just built canvas
return tht;
}


}

