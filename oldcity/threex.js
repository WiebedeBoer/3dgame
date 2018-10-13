//houses radius, minimum 6, maximum 25
var outerradius = 20;
var innerradius = 3;

var THREEx = THREEx || {}
THREEx.ProceduralCity = function(){

// generate the texture
var texture  = new THREE.Texture( generateTextureWindows() );
texture.needsUpdate = true;

var materials = new THREE.MeshLambertMaterial({
map: texture,
vertexColors : THREE.VertexColors
});

//city mesh
var cityGeometry= new THREE.Geometry();

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
var buildingMesh= new THREE.Mesh( geometry  );

//multiply colors
var light = new THREE.Color( 0xf8d19a );
var redlight = new THREE.Color( 0xc58967 );
var brightlight = new THREE.Color( 0xd77b49 );
var darklight = new THREE.Color( 0xe7c08a );

//cbd
var cbdradiusl = innerradius * 50;
var cbdradiush = cbdradiusl - (cbdradiusl * 2);
var housesradius = innerradius + outerradius;
var maxhouses = 25 - housesradius;
var minhouses = 25 + housesradius;

//no. buildings, max = 2500
var mxi = 2500;
//loop
var i = 1;
while (i < mxi)
  {

//row
var jezi = (Math.floor(i / 50)) + 1;
var jexi = 50 + i - (jezi * 50);

//x position variation buildings
var xmodulu = i % 10;

if (xmodulu ==1){
var momez = (1000 - 2000) + (jezi * 40) + 8;
var momex = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 10;
}
else if (xmodulu ==2){
var momez = (1000 - 2000) + (jezi * 40) + 4;
var momex = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 8;
}
else if (xmodulu ==3){
var momez = (1000 - 2000) + (jezi * 40) + 8;
var momex = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 4;
}
else if (xmodulu ==4){
var momez = (1000 - 2000) + (jezi * 40) + 6;
var momex = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 2;
}
else if (xmodulu ==5){
var momez = (1000 - 2000) + (jezi * 40) + 9;
var momex = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 3;
}
else if (xmodulu ==6){
var momez = (1000 - 2000) + (jezi * 40) + 3;
var momex = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 10;
}
else if (xmodulu ==7){
var momez = (1000 - 2000) + (jezi * 40) + 5;
var momex = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 10;
}
else if (xmodulu ==8){
var momez = (1000 - 2000) + (jezi * 40) + 11;
var momex = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 7;
}
else if (xmodulu ==9){
var momez = (1000 - 2000) + (jezi * 40) + 5;
var momex = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 7;
}
else {
var momez = (1000 - 2000) + (jezi * 40);
var momex = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40);
}

//z position variation buildings
var zmodulu = i % 12;

if (zmodulu ==3){
var meshesz = (1000 - 2000) + (jezi * 40) + 5;
var meshesx = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 1;
}
else if (zmodulu ==9){
var meshesz = (1000 - 2000) + (jezi * 40) + 1;
var meshesx = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 1;
}
else if (zmodulu ==10){
var meshesz = (1000 - 2000) + (jezi * 40) + 2;
var meshesx = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40);
}
else if (zmodulu ==11){
var meshesz = (1000 - 2000) + (jezi * 40);
var meshesx = (1000 - 2000) + ((50 + i - (jezi * 50)) * 40) + 2;
}
else {
var meshesz = momez;
var meshesx = momex;
}

//increment loop
i ++;

//centerradiuscheck, 0 = clear of buildings
//center square
if (jezi >maxhouses && jezi <minhouses && jexi >maxhouses && jexi <minhouses){
if (meshesz < cbdradiusl && meshesz > cbdradiush && meshesx < cbdradiusl && meshesx > cbdradiush){
centerradiuscheck =0;}
else {
centerradiuscheck =1;}
}
else {
centerradiuscheck =0;
}

//if show building
if (centerradiuscheck ==1){

// put a position
buildingMesh.position.x = meshesx;
buildingMesh.position.z = meshesz;
//put a rotation
buildingMesh.rotation.y = 0.5*Math.PI*2;
//building scale
buildingMesh.scale.x = 30;
buildingMesh.scale.y = 50;
buildingMesh.scale.z = buildingMesh.scale.x;

//base color
var baseColor = new THREE.Color().setRGB( 0.98, 0.96, 0.98 );

//color variance
var cmodulu = i % 6;

// set adjustement of baseColor
if (cmodulu ==2){
var matColor = baseColor.clone().multiply( redlight );
}
else if (cmodulu ==3 || cmodulu ==4){
var matColor = baseColor.clone().multiply( brightlight );
}
else {
var matColor = baseColor.clone().multiply( darklight );
}

var roofColor = baseColor.clone().multiply( light );

var geometry = buildingMesh.geometry;


for ( var j = 0, jl = geometry.faces.length; j < jl; j ++ ) {
//0 = front, 1 = back, 2 = top, 3 = bottom?, 4 = right, 5 = left
if (j === 2){
geometry.faces[ j ].vertexColors = [ roofColor, roofColor, roofColor, roofColor ];
//geometry.faces[ j ].material = [ materials[ 2 ].material ];
//geometry.faces[ j ].materialIndex = 0;
}
else if (j === 0) {
geometry.faces[ j ].vertexColors = [ matColor, matColor, matColor, matColor ];
//geometry.faces[ j ].material = [ materials[ 0 ].material ];
//geometry.faces[ j ].materialIndex = 0;
}
else {
geometry.faces[ j ].vertexColors = [ roofColor, matColor, matColor, roofColor ];
//geometry.faces[ j ].material = [ materials[ 1 ].material ];
//geometry.faces[ j ].material = texture;
}
}

// merge it with cityGeometry - very important for performance
THREE.GeometryUtils.merge( cityGeometry, buildingMesh );

//end show building
}

  }

//return mesh
var mesh = new THREE.Mesh(cityGeometry, materials );
//var mesh = new THREE.Mesh(cityGeometry );
return mesh;

//window canvas
function generateTextureWindows(){
// build a small canvas 30x50 and paint it in white
var c = document.createElement( 'canvas' );
c.width = 30;
c.height = 50;
var context = c.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 30, 50 );
// draw the window rows and door - with a small noise to simulate light variations in each room
for( var y = 4; y < 50; y += 10 ){
for( var x = 4; x < 30; x += 9 ){
var ranwin = Math.floor( Math.random() * 50 );
context.fillStyle = 'rgb(' + [ranwin, ranwin, ranwin].join( ',' )  + ')';
if (y <44){
context.fillRect( x, y, 2, 3);
}
else {
if (x > 10 && x <20){
var door = x - 1;
context.fillRect( door, y, 4, 6);
}
else {
context.fillRect( x, y, 2, 3);
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
