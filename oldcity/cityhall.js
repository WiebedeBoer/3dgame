var THREEx = THREEx || {}
THREEx.ProceduralCityHall = function(){

//generate material
var material19 = new THREE.MeshLambertMaterial({
color: 0xf0f0f0
});

//city mesh
var cityhallGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo19 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo19.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo19.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo19.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo19.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo19.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo19.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo19.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo19.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo19.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo19.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo19.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo19.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo19.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh19 = new THREE.Mesh( geo19  );

var chcol =32;
var chrow =30;

// put a position
buildMesh19.position.x = (2700 - 5400) + (chcol * 90) - 30;
buildMesh19.position.z = (2700 - 5400) + (chrow * 90) - 30;
//put a rotation
buildMesh19.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh19.scale.x = 60;
buildMesh19.scale.y = 100;
buildMesh19.scale.z = buildMesh19.scale.x;

//add geometry
var geo19 = buildMesh19.geo19;

THREE.GeometryUtils.merge( cityhallGeometry, buildMesh19 );

//return mesh
var mesh17 = new THREE.Mesh(cityhallGeometry, material19);
return mesh17;

//new building end

//window canvas
function generateTextureCityHall(){
// build a small canvas 30x50 and paint it in white
var tch = document.createElement( 'canvas' );
tch.width = 60;
tch.height = 100;
var context = tch.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 100 );

// then draw the image
context.drawImage( tch, 0, 0, tch.width, tch.height );
// return the just built canvas
return tch;
}


}


