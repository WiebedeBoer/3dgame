var THREEx = THREEx || {}
THREEx.ProceduralHospitals = function(){

//generate material
var material14 = new THREE.MeshLambertMaterial({
color: 0xf3f3f3
});

//city mesh
var hospitalGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo14 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo14.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo14.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo14.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo14.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo14.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo14.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo14.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo14.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo14.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo14.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo14.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo14.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo14.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh14 = new THREE.Mesh( geo14  );

//loop
var hospib = 1;
while (hospib < 4)
  {
//hospitals 3
if (hospib ==1){
var hospibcol =40;
var hospibrow =12;
}
else if (hospib ==2){
var hospibcol =30;
var hospibrow =41;
}
else if (hospib ==3){
var hospibcol =19;
var hospibrow =29;
}
else {
var hospibcol =1;
var hospibrow =1;
}


// put a position
buildMesh14.position.x = (2700 - 5400) + (hospibcol * 90) - 30;
buildMesh14.position.z = (2700 - 5400) + (hospibrow * 90) - 30;
//put a rotation
buildMesh14.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh14.scale.x = 60;
buildMesh14.scale.y = 80;
buildMesh14.scale.z = buildMesh14.scale.x;

//add geometry
var geo14 = buildMesh14.geo14;

THREE.GeometryUtils.merge( hospitalGeometry, buildMesh14 );


//increment loop
hospib ++;

   }

//return mesh
var mesh12 = new THREE.Mesh(hospitalGeometry, material14);
return mesh12;

//new building end

//window canvas
function generateTextureHospital(){
// build a small canvas 30x50 and paint it in white
var thos = document.createElement( 'canvas' );
thos.width = 60;
thos.height = 60;
var context = thos.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 60 );

// then draw the image
context.drawImage( thos, 0, 0, thos.width, thos.height );
// return the just built canvas
return thos;
}


}


