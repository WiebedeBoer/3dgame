var THREEx = THREEx || {}
THREEx.ProceduralCity = function(){

// generate texture
var texture  = new THREE.Texture( generateTextureWindows() );
texture.needsUpdate = true;

//generate material
var materials = new THREE.MeshLambertMaterial({
map: texture,
vertexColors : THREE.VertexColors
});

// build the base geometry for each building
var geometry = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

//faces
geometry.faces.splice( 3, 1 );
geometry.faceVertexUvs[0].splice( 3, 1 );
geometry.faceVertexUvs[0][2][0].set( 0, 0 );
geometry.faceVertexUvs[0][2][1].set( 0, 0 );
geometry.faceVertexUvs[0][2][2].set( 0, 0 );
geometry.faceVertexUvs[0][2][3].set( 0, 0 );

// buildMesh
var buildingMesh= new THREE.Mesh( geometry );

//multiply colors
var light = new THREE.Color( 0xf8d19a );
var redlight = new THREE.Color( 0xc58967 );
var brightlight = new THREE.Color( 0xd77b49 );
var darklight = new THREE.Color( 0xe7c08a );

//var comlight = new THREE.Color( 0xb7821e );
//var comlight = new THREE.Color( 0xf8cfa7 );
//var indlight = new THREE.Color( 0x877c6d );

//city geometry
var cityGeometry= new THREE.Geometry();

//no. buildings, max = 1600
var mxi = 3600;
//loop
var i = 1;
while (i < mxi)
  {

//row
var jezi = (Math.floor(i / 60)) + 1;
//column
//var jexi = 60 + i - (jezi * 60);

var itag = i - 1;
var tench = xtag[itag].getElementsByTagName("BUSINESS")[0].childNodes[0].nodeValue;

if (tench =="tenement"){

// put a position
buildingMesh.position.x = (2700 - 5400) + ((60 + i - (jezi * 60)) * 90) - 30;
buildingMesh.position.z = (2700 - 5400) + (jezi * 90) - 30;
//put a rotation
buildingMesh.rotation.y = 0.5*Math.PI*2;
//building scale
buildingMesh.scale.x = 60;
buildingMesh.scale.y = 80;
buildingMesh.scale.z = buildingMesh.scale.x;

//base color
var baseColor = new THREE.Color().setRGB( 0.98, 0.96, 0.98 );




//color variance
var cmodulu = i % 6;

// set adjustement of baseColor for tenements
if (cmodulu ==2){
var matColor = baseColor.clone().multiply( redlight );
}
else if (cmodulu ==3 || cmodulu ==4){
var matColor = baseColor.clone().multiply( brightlight );
}
else {
var matColor = baseColor.clone().multiply( darklight );
}



//roof color
var roofColor = baseColor.clone().multiply( light );

//add geometry
var geometry = buildingMesh.geometry;

for ( var j = 0, jl = geometry.faces.length; j < jl; j ++ ) {
//0 = front, 1 = back, 2 = top, 3 = bottom?, 4 = right, 5 = left
if (j === 2){
geometry.faces[ j ].vertexColors = [ roofColor, roofColor, roofColor, roofColor ];
}
else {
geometry.faces[ j ].vertexColors = [ roofColor, matColor, matColor, roofColor ];
}
}


//end tenement check
}


// merge it with cityGeometry - very important for performance
THREE.GeometryUtils.merge( cityGeometry, buildingMesh );



//increment loop
i ++;

  }

var mesh = new THREE.Mesh(cityGeometry, materials );
return mesh

//window canvas
function generateTextureWindows(){
// build a small canvas 30x50 and paint it in white
var c = document.createElement( 'canvas' );
c.width = 60;
c.height = 80;
var context = c.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 80 );

// draw the window rows and door - with a small noise to simulate light variations in each room
for( var y = 8; y < 80; y += 20 ){
for( var x = 6; x < 60; x += 20 ){
var ranwin = Math.floor( Math.random() * 50 );
context.fillStyle = 'rgb(' + [ranwin, ranwin, ranwin].join( ',' )  + ')';
if (y <54){
context.fillRect( x, y, 4, 6);
}
else {
if (x > 20 && x <40){
var door = x - 1;
context.fillRect( door, y, 6, 11);
}
else {
context.fillRect( x, y, 4, 6);
}
}
}
}

// then draw the image
context.drawImage( c, 0, 0, c.width, c.height );
// return the just built canvas
return c;
}



}
