var THREEx = THREEx || {}
THREEx.ProceduralUniversity = function(){

//generate material
var material10 = new THREE.MeshLambertMaterial({
color: 0xbbc7ba
});

//city mesh
var univGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo10 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo10.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo10.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo10.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo10.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo10.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo10.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo10.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo10.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo10.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo10.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo10.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo10.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo10.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh10 = new THREE.Mesh( geo10  );

var univcol =32;
var univrow =40;

// put a position
buildMesh10.position.x = (2700 - 5400) + (univcol * 90) + 15;  //-30
buildMesh10.position.z = (2700 - 5400) + (univrow * 90) + 15;  //-30
//put a rotation
buildMesh10.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh10.scale.x = 150;
buildMesh10.scale.y = 100;
buildMesh10.scale.z = buildMesh10.scale.x;

//add geometry
var geo10 = buildMesh10.geo10;

THREE.GeometryUtils.merge( univGeometry, buildMesh10 );


//return mesh
var mesh8 = new THREE.Mesh(univGeometry, material10);
return mesh8;

//new building end



//window canvas
function generateTextureUni(){
// build a small canvas 30x50 and paint it in white
var tuni = document.createElement( 'canvas' );
tuni.width = 60;
tuni.height = 80;
var context = tuni.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// then draw the image
context.drawImage( tuni, 0, 0, tuni.width, tuni.height );
// return the just built canvas
return tuni;
}


}


