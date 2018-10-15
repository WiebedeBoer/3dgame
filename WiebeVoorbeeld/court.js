var THREEx = THREEx || {}
THREEx.ProceduralCourt = function(){

//generate material
var material20 = new THREE.MeshLambertMaterial({
color: 0xf0f0f0
});

//city mesh
var courtGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo20 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo20.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo20.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo20.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo20.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo20.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo20.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo20.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo20.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo20.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo20.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo20.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo20.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo20.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh20 = new THREE.Mesh( geo20  );

var cocol =32;
var corow =31;

// put a position
buildMesh20.position.x = (2700 - 5400) + (cocol * 90) - 30;
buildMesh20.position.z = (2700 - 5400) + (corow * 90) - 30;
//put a rotation
buildMesh20.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh20.scale.x = 60;
buildMesh20.scale.y = 100;
buildMesh20.scale.z = buildMesh20.scale.x;

//add geometry
var geo20 = buildMesh20.geo20;

THREE.GeometryUtils.merge( courtGeometry, buildMesh20 );

//return mesh
var mesh18 = new THREE.Mesh(courtGeometry, material20);
return mesh18;

//new building end

//window canvas
function generateTextureCourt(){
// build a small canvas 30x50 and paint it in white
var tco = document.createElement( 'canvas' );
tco.width = 60;
tco.height = 100;
var context = tco.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 100 );

// then draw the image
context.drawImage( tco, 0, 0, tco.width, tco.height );
// return the just built canvas
return tco;
}


}


