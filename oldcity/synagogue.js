var THREEx = THREEx || {}
THREEx.ProceduralSynagogues = function(){

//generate material
var material17 = new THREE.MeshLambertMaterial({
color: 0xbbc7ba
});

//city mesh
var synagogueGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo17 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo17.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo17.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo17.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo17.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo17.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo17.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo17.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo17.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo17.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo17.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo17.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo17.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo17.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh17 = new THREE.Mesh( geo17  );

var synbcol =38;
var synbrow =5;

// put a position
buildMesh17.position.x = (2700 - 5400) + (synbcol * 90) - 30;
buildMesh17.position.z = (2700 - 5400) + (synbrow * 90) + 15;
//put a rotation
buildMesh17.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh17.scale.x = 60;
buildMesh17.scale.y = 100;
buildMesh17.scale.z = 150;

//add geometry
var geo17 = buildMesh17.geo17;

THREE.GeometryUtils.merge( synagogueGeometry, buildMesh17 );

//return mesh
var mesh15 = new THREE.Mesh(synagogueGeometry, material17);
return mesh15;

//new building end



//window canvas
function generateTextureSynagogue(){
// build a small canvas 30x50 and paint it in white
var tsyn = document.createElement( 'canvas' );
tsyn.width = 60;
tsyn.height = 100;
var context = tsyn.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 100 );

// then draw the image
context.drawImage( tsyn, 0, 0, tsyn.width, tsyn.height );
// return the just built canvas
return tsyn;
}


}


