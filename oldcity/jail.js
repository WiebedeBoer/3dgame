var THREEx = THREEx || {}
THREEx.ProceduralJails = function(){

//generate material
var material22 = new THREE.MeshLambertMaterial({
color: 0x32344e
});

//city mesh
var jailGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo22 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo22.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo22.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo22.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo22.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo22.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo22.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo22.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo22.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo22.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo22.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo22.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo22.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo22.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh22 = new THREE.Mesh( geo22  );

var jailcol =1;
var jailrow =45;

// put a position
buildMesh22.position.x = (2700 - 5400) + (jailcol * 90) - 30;
buildMesh22.position.z = (2700 - 5400) + (jailrow * 90) - 30;
//put a rotation
buildMesh22.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh22.scale.x = 60;
buildMesh22.scale.y = 80;
buildMesh22.scale.z = buildMesh22.scale.x;

//add geometry
var geo22 = buildMesh22.geo22;

THREE.GeometryUtils.merge( jailGeometry, buildMesh22 );

//return mesh
var mesh20 = new THREE.Mesh(jailGeometry, material22);
return mesh20;

//new building end

//window canvas
function generateTextureJail(){
// build a small canvas 30x50 and paint it in white
var tjail = document.createElement( 'canvas' );
tjail.width = 60;
tjail.height = 80;
var context = tjail.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tjail, 0, 0, tjail.width, tjail.height );
// return the just built canvas
return tjail;
}


}


