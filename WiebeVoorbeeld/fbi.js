var THREEx = THREEx || {}
THREEx.ProceduralFBI = function(){

//generate material
var material21 = new THREE.MeshLambertMaterial({
color: 0x32344e
});

//city mesh
var fbiGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo21 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo21.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo21.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo21.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo21.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo21.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo21.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo21.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo21.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo21.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo21.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo21.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo21.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo21.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh21 = new THREE.Mesh( geo21  );

var fbicol =35;
var fbirow =30;

// put a position
buildMesh21.position.x = (2700 - 5400) + (fbicol * 90) - 30;
buildMesh21.position.z = (2700 - 5400) + (fbirow * 90) - 30;
//put a rotation
buildMesh21.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh21.scale.x = 60;
buildMesh21.scale.y = 100;
buildMesh21.scale.z = buildMesh21.scale.x;

//add geometry
var geo21 = buildMesh21.geo21;

THREE.GeometryUtils.merge( fbiGeometry, buildMesh21 );

//return mesh
var mesh19 = new THREE.Mesh(fbiGeometry, material21);
return mesh19;

//new building end

//window canvas
function generateTextureFBI(){
// build a small canvas 30x50 and paint it in white
var tfbi = document.createElement( 'canvas' );
tfbi.width = 60;
tfbi.height = 100;
var context = tfbi.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 100 );

// then draw the image
context.drawImage( tfbi, 0, 0, tfbi.width, tfbi.height );
// return the just built canvas
return tfbi;
}


}


