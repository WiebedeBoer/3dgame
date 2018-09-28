var THREEx = THREEx || {}
THREEx.ProceduralFire = function(){

//generate material
var material13 = new THREE.MeshLambertMaterial({
color: 0xc0453f
});

//city mesh
var firedepGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo13 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo13.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo13.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo13.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo13.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo13.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo13.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo13.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo13.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo13.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo13.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo13.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo13.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo13.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh13 = new THREE.Mesh( geo13  );

//loop
var firdepb = 1;
while (firdepb < 3)
  {
//fire departments 2
if (firdepb ==1){
var firdepbcol =30;
var firdepbrow =43;
}
else if (firdepb ==2){
var firdepbcol =54;
var firdepbrow =29;
}
else {
var firdepbcol =1;
var firdepbrow =1;
}


// put a position
buildMesh13.position.x = (2700 - 5400) + (firdepbcol * 90) - 30;
buildMesh13.position.z = (2700 - 5400) + (firdepbrow * 90) - 30;
//put a rotation
buildMesh13.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh13.scale.x = 60;
buildMesh13.scale.y = 60;
buildMesh13.scale.z = buildMesh13.scale.x;

//add geometry
var geo13 = buildMesh13.geo13;

THREE.GeometryUtils.merge( firedepGeometry, buildMesh13 );


//increment loop
firdepb ++;

   }

//return mesh
var mesh11 = new THREE.Mesh(firedepGeometry, material13);
return mesh11;

//new building end

//window canvas
function generateTextureFireDep(){
// build a small canvas 30x50 and paint it in white
var tfd = document.createElement( 'canvas' );
tfd.width = 60;
tfd.height = 60;
var context = tfd.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 60 );

// then draw the image
context.drawImage( tfd, 0, 0, tfd.width, tfd.height );
// return the just built canvas
return tfd;
}


}


