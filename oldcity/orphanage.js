var THREEx = THREEx || {}
THREEx.ProceduralOrphanages = function(){

//generate material
var material23 = new THREE.MeshLambertMaterial({
color: 0x32344e
});

//city mesh
var orphanageGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo23 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo23.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo23.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo23.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo23.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo23.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo23.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo23.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo23.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo23.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo23.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo23.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo23.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo23.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh23 = new THREE.Mesh( geo23  );

var orphcol =12;
var orphrow =31;

// put a position
buildMesh23.position.x = (2700 - 5400) + (orphcol * 90) - 30;
buildMesh23.position.z = (2700 - 5400) + (orphrow * 90) - 30;
//put a rotation
buildMesh23.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh23.scale.x = 60;
buildMesh23.scale.y = 80;
buildMesh23.scale.z = buildMesh23.scale.x;

//add geometry
var geo23 = buildMesh23.geo23;

THREE.GeometryUtils.merge( orphanageGeometry, buildMesh23 );

//return mesh
var mesh21 = new THREE.Mesh(orphanageGeometry, material23);
return mesh21;

//new building end

//window canvas
function generateTextureOrphanage(){
// build a small canvas 30x50 and paint it in white
var torph = document.createElement( 'canvas' );
torph.width = 60;
torph.height = 80;
var context = torph.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( torph, 0, 0, torph.width, torph.height );
// return the just built canvas
return torph;
}


}


