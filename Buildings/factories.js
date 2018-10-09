var THREEx = THREEx || {}
THREEx.ProceduralFactories = function(){

//generate material
var material37 = new THREE.MeshLambertMaterial({
color: 0x877c6d
});

//city mesh
var factoryGeometry = new THREE.Geometry();

// build the base geometry for each building
var geo37 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo37.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo37.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo37.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo37.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo37.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo37.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo37.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo37.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo37.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo37.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo37.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo37.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo37.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh37 = new THREE.Mesh( geo37  );





/*

//loop
var facb = 1;
while (facb < 3600)
  {


//factories
if (facb ==1){
var facbcol =54;
var facbrow =30;
}
else if (facb ==2){
var facbcol =55;
var facbrow =30;
}
else {
var facbcol =1;
var facbrow =1;
}


//row
var faczi = (Math.floor(facb / 60)) + 1;
//column
//var facxi = 60 + facb - (faczi * 60);

var factag = facb - 1;
var facch = xtag[factag].getElementsByTagName("BUSINESS")[0].childNodes[0].nodeValue;

if (facch =="industrial"){

// put a position
buildMesh37.position.x = (2700 - 5400) + ((60 + facb - (faczi * 60)) * 90) - 30;
buildMesh37.position.z = (2700 - 5400) + (faczi * 90) - 30;
//put a rotation
buildMesh37.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh37.scale.x = 60;
buildMesh37.scale.y = 60;
buildMesh37.scale.z = buildMesh37.scale.x;

//add geometry
var geo37 = buildMesh37.geo37;
}

THREE.GeometryUtils.merge( factoryGeometry, buildMesh37 );

//increment loop
facb ++;

   }

*/



//loop
var facb = 1;
while (facb < 329)
  {


//factories

if (facb ==1){
var facbcol =59;
var facbrow =28;
}
else if (facb ==2){
var facbcol =60;
var facbrow =28;
}
else if (facb ==3){
var facbcol =57;
var facbrow =29;
}
else if (facb ==4){
var facbcol =58;
var facbrow =29;
}
else if (facb ==5){
var facbcol =59;
var facbrow =29;
}
else if (facb ==6){
var facbcol =60;
var facbrow =29;
}
else if (facb ==7){
var facbcol =54;
var facbrow =30;
}
else if (facb ==8){
var facbcol =55;
var facbrow =30;
}
else if (facb ==9){
var facbcol =56;
var facbrow =30;
}
else if (facb ==10){
var facbcol =57;
var facbrow =30;
}
else if (facb ==11){
var facbcol =58;
var facbrow =30;
}
else if (facb ==12){
var facbcol =59;
var facbrow =30;
}
else if (facb ==13){
var facbcol =60;
var facbrow =30;
}
else if (facb ==14){
var facbcol =53;
var facbrow =31;
}
else if (facb ==15){
var facbcol =54;
var facbrow =31;
}
else if (facb ==16){
var facbcol =55;
var facbrow =31;
}
else if (facb ==17){
var facbcol =56;
var facbrow =31;
}
else if (facb ==18){
var facbcol =57;
var facbrow =31;
}
else if (facb ==19){
var facbcol =58;
var facbrow =31;
}
else if (facb ==20){
var facbcol =59;
var facbrow =31;
}
else if (facb ==21){
var facbcol =60;
var facbrow =31;
}
else if (facb ==22){
var facbcol =52;
var facbrow =32;
}
else if (facb ==23){
var facbcol =53;
var facbrow =32;
}
else if (facb ==24){
var facbcol =54;
var facbrow =32;
}
else if (facb ==25){
var facbcol =55;
var facbrow =32;
}
else if (facb ==26){
var facbcol =56;
var facbrow =32;
}
else if (facb ==27){
var facbcol =57;
var facbrow =32;
}
else if (facb ==28){
var facbcol =58;
var facbrow =32;
}
else if (facb ==29){
var facbcol =59;
var facbrow =32;
}
else if (facb ==30){
var facbcol =60;
var facbrow =32;
}
else if (facb ==31){
var facbcol =52;
var facbrow =33;
}
else if (facb ==32){
var facbcol =53;
var facbrow =33;
}
else if (facb ==33){
var facbcol =54;
var facbrow =33;
}
else if (facb ==34){
var facbcol =55;
var facbrow =33;
}
else if (facb ==35){
var facbcol =56;
var facbrow =33;
}
else if (facb ==36){
var facbcol =57;
var facbrow =33;
}
else if (facb ==37){
var facbcol =58;
var facbrow =33;
}
else if (facb ==38){
var facbcol =59;
var facbrow =33;
}
else if (facb ==39){
var facbcol =60;
var facbrow =33;
}
else if (facb ==40){
var facbcol =52;
var facbrow =34;
}
else if (facb ==41){
var facbcol =53;
var facbrow =34;
}
else if (facb ==42){
var facbcol =54;
var facbrow =34;
}
else if (facb ==43){
var facbcol =56;
var facbrow =34;
}
else if (facb ==44){
var facbcol =58;
var facbrow =34;
}
else if (facb ==45){
var facbcol =59;
var facbrow =34;
}
else if (facb ==46){
var facbcol =60;
var facbrow =34;
}
else if (facb ==47){
var facbcol =53;
var facbrow =35;
}
else if (facb ==48){
var facbcol =54;
var facbrow =35;
}
else if (facb ==49){
var facbcol =55;
var facbrow =35;
}
else if (facb ==50){
var facbcol =56;
var facbrow =35;
}
else if (facb ==51){
var facbcol =57;
var facbrow =35;
}
else if (facb ==52){
var facbcol =58;
var facbrow =35;
}
else if (facb ==53){
var facbcol =60;
var facbrow =35;
}
else if (facb ==54){
var facbcol =53;
var facbrow =36;
}
else if (facb ==55){
var facbcol =54;
var facbrow =36;
}
else if (facb ==56){
var facbcol =55;
var facbrow =36;
}
else if (facb ==57){
var facbcol =57;
var facbrow =36;
}
else if (facb ==58){
var facbcol =59;
var facbrow =36;
}
else if (facb ==59){
var facbcol =54;
var facbrow =37;
}
else if (facb ==60){
var facbcol =55;
var facbrow =37;
}
else if (facb ==61){
var facbcol =56;
var facbrow =37;
}
else if (facb ==62){
var facbcol =57;
var facbrow =37;
}
else if (facb ==63){
var facbcol =58;
var facbrow =37;
}
else if (facb ==64){
var facbcol =59;
var facbrow =37;
}
else if (facb ==65){
var facbcol =60;
var facbrow =37;
}
else if (facb ==66){
var facbcol =55;
var facbrow =38;
}
else if (facb ==67){
var facbcol =56;
var facbrow =38;
}
else if (facb ==68){
var facbcol =57;
var facbrow =38;
}
else if (facb ==69){
var facbcol =58;
var facbrow =38;
}
else if (facb ==70){
var facbcol =59;
var facbrow =38;
}
else if (facb ==71){
var facbcol =60;
var facbrow =38;
}
else if (facb ==72){
var facbcol =57;
var facbrow =39;
}
else if (facb ==73){
var facbcol =58;
var facbrow =39;
}
else if (facb ==74){
var facbcol =59;
var facbrow =39;
}
else if (facb ==75){
var facbcol =60;
var facbrow =39;
}
else if (facb ==76){
var facbcol =57;
var facbrow =40;
}
else if (facb ==77){
var facbcol =58;
var facbrow =40;
}
else if (facb ==78){
var facbcol =59;
var facbrow =40;
}
else if (facb ==79){
var facbcol =60;
var facbrow =40;
}
else if (facb ==80){
var facbcol =1;
var facbrow =46;
}
else if (facb ==81){
var facbcol =2;
var facbrow =46;
}
else if (facb ==82){
var facbcol =3;
var facbrow =46;
}
else if (facb ==83){
var facbcol =4;
var facbrow =46;
}
else if (facb ==84){
var facbcol =1;
var facbrow =47;
}
else if (facb ==85){
var facbcol =2;
var facbrow =47;
}
else if (facb ==86){
var facbcol =3;
var facbrow =47;
}
else if (facb ==87){
var facbcol =4;
var facbrow =47;
}
else if (facb ==88){
var facbcol =1;
var facbrow =48;
}
else if (facb ==89){
var facbcol =2;
var facbrow =48;
}
else if (facb ==90){
var facbcol =3;
var facbrow =48;
}
else if (facb ==91){
var facbcol =4;
var facbrow =48;
}
else if (facb ==92){
var facbcol =1;
var facbrow =49;
}
else if (facb ==93){
var facbcol =2;
var facbrow =49;
}
else if (facb ==94){
var facbcol =3;
var facbrow =49;
}
else if (facb ==95){
var facbcol =4;
var facbrow =49;
}
else if (facb ==96){
var facbcol =47;
var facbrow =49;
}
else if (facb ==97){
var facbcol =48;
var facbrow =49;
}
else if (facb ==98){
var facbcol =49;
var facbrow =49;
}
else if (facb ==99){
var facbcol =1;
var facbrow =50;
}
else if (facb ==100){
var facbcol =2;
var facbrow =50;
}
else if (facb ==101){
var facbcol =3;
var facbrow =50;
}
else if (facb ==102){
var facbcol =4;
var facbrow =50;
}
else if (facb ==103){
var facbcol =46;
var facbrow =50;
}
else if (facb ==104){
var facbcol =47;
var facbrow =50;
}
else if (facb ==105){
var facbcol =48;
var facbrow =50;
}
else if (facb ==106){
var facbcol =49;
var facbrow =50;
}
else if (facb ==107){
var facbcol =50;
var facbrow =50;
}
else if (facb ==108){
var facbcol =51;
var facbrow =50;
}
else if (facb ==109){
var facbcol =52;
var facbrow =50;
}
else if (facb ==110){
var facbcol =1;
var facbrow =51;
}
else if (facb ==111){
var facbcol =2;
var facbrow =51;
}
else if (facb ==112){
var facbcol =3;
var facbrow =51;
}
else if (facb ==113){
var facbcol =27;
var facbrow =51;
}
else if (facb ==114){
var facbcol =28;
var facbrow =51;
}
else if (facb ==115){
var facbcol =29;
var facbrow =51;
}
else if (facb ==116){
var facbcol =30;
var facbrow =51;
}
else if (facb ==117){
var facbcol =31;
var facbrow =51;
}
else if (facb ==118){
var facbcol =46;
var facbrow =51;
}
else if (facb ==119){
var facbcol =47;
var facbrow =51;
}
else if (facb ==120){
var facbcol =48;
var facbrow =51;
}
else if (facb ==121){
var facbcol =49;
var facbrow =51;
}
else if (facb ==122){
var facbcol =50;
var facbrow =51;
}
else if (facb ==123){
var facbcol =51;
var facbrow =51;
}
else if (facb ==124){
var facbcol =52;
var facbrow =51;
}
else if (facb ==125){
var facbcol =53;
var facbrow =51;
}
else if (facb ==126){
var facbcol =1;
var facbrow =52;
}
else if (facb ==127){
var facbcol =2;
var facbrow =52;
}
else if (facb ==128){
var facbcol =25;
var facbrow =52;
}
else if (facb ==129){
var facbcol =26;
var facbrow =52;
}
else if (facb ==130){
var facbcol =27;
var facbrow =52;
}
else if (facb ==131){
var facbcol =28;
var facbrow =52;
}
else if (facb ==132){
var facbcol =29;
var facbrow =52;
}
else if (facb ==133){
var facbcol =30;
var facbrow =52;
}
else if (facb ==134){
var facbcol =31;
var facbrow =52;
}
else if (facb ==135){
var facbcol =32;
var facbrow =52;
}
else if (facb ==136){
var facbcol =46;
var facbrow =52;
}
else if (facb ==137){
var facbcol =47;
var facbrow =52;
}
else if (facb ==138){
var facbcol =48;
var facbrow =52;
}
else if (facb ==139){
var facbcol =49;
var facbrow =52;
}
else if (facb ==140){
var facbcol =50;
var facbrow =52;
}
else if (facb ==141){
var facbcol =51;
var facbrow =52;
}
else if (facb ==142){
var facbcol =52;
var facbrow =52;
}
else if (facb ==143){
var facbcol =53;
var facbrow =52;
}
else if (facb ==144){
var facbcol =1;
var facbrow =53;
}
else if (facb ==145){
var facbcol =25;
var facbrow =53;
}
else if (facb ==146){
var facbcol =26;
var facbrow =53;
}
else if (facb ==147){
var facbcol =27;
var facbrow =53;
}
else if (facb ==148){
var facbcol =28;
var facbrow =53;
}
else if (facb ==149){
var facbcol =29;
var facbrow =53;
}
else if (facb ==150){
var facbcol =30;
var facbrow =53;
}
else if (facb ==151){
var facbcol =31;
var facbrow =53;
}
else if (facb ==152){
var facbcol =32;
var facbrow =53;
}
else if (facb ==153){
var facbcol =46;
var facbrow =53;
}
else if (facb ==154){
var facbcol =47;
var facbrow =53;
}
else if (facb ==155){
var facbcol =48;
var facbrow =53;
}
else if (facb ==156){
var facbcol =49;
var facbrow =53;
}
else if (facb ==157){
var facbcol =51;
var facbrow =53;
}
else if (facb ==158){
var facbcol =52;
var facbrow =53;
}
else if (facb ==159){
var facbcol =53;
var facbrow =53;
}
else if (facb ==160){
var facbcol =24;
var facbrow =54;
}
else if (facb ==161){
var facbcol =25;
var facbrow =54;
}
else if (facb ==162){
var facbcol =26;
var facbrow =54;
}
else if (facb ==163){
var facbcol =27;
var facbrow =54;
}
else if (facb ==164){
var facbcol =28;
var facbrow =54;
}
else if (facb ==165){
var facbcol =29;
var facbrow =54;
}
else if (facb ==166){
var facbcol =30;
var facbrow =54;
}
else if (facb ==167){
var facbcol =31;
var facbrow =54;
}
else if (facb ==168){
var facbcol =32;
var facbrow =54;
}
else if (facb ==169){
var facbcol =33;
var facbrow =54;
}
else if (facb ==170){
var facbcol =44;
var facbrow =54;
}
else if (facb ==171){
var facbcol =45;
var facbrow =54;
}
else if (facb ==172){
var facbcol =46;
var facbrow =54;
}
else if (facb ==173){
var facbcol =47;
var facbrow =54;
}
else if (facb ==174){
var facbcol =48;
var facbrow =54;
}
else if (facb ==175){
var facbcol =49;
var facbrow =54;
}
else if (facb ==176){
var facbcol =50;
var facbrow =54;
}
else if (facb ==177){
var facbcol =51;
var facbrow =54;
}
else if (facb ==178){
var facbcol =52;
var facbrow =54;
}
else if (facb ==179){
var facbcol =53;
var facbrow =54;
}
else if (facb ==180){
var facbcol =23;
var facbrow =55;
}
else if (facb ==181){
var facbcol =24;
var facbrow =55;
}
else if (facb ==182){
var facbcol =25;
var facbrow =55;
}
else if (facb ==183){
var facbcol =26;
var facbrow =55;
}
else if (facb ==184){
var facbcol =28;
var facbrow =55;
}
else if (facb ==185){
var facbcol =30;
var facbrow =55;
}
else if (facb ==186){
var facbcol =31;
var facbrow =55;
}
else if (facb ==187){
var facbcol =32;
var facbrow =55;
}
else if (facb ==188){
var facbcol =33;
var facbrow =55;
}
else if (facb ==189){
var facbcol =34;
var facbrow =55;
}
else if (facb ==190){
var facbcol =43;
var facbrow =55;
}
else if (facb ==191){
var facbcol =44;
var facbrow =55;
}
else if (facb ==192){
var facbcol =45;
var facbrow =55;
}
else if (facb ==193){
var facbcol =46;
var facbrow =55;
}
else if (facb ==194){
var facbcol =47;
var facbrow =55;
}
else if (facb ==195){
var facbcol =48;
var facbrow =55;
}
else if (facb ==196){
var facbcol =49;
var facbrow =55;
}
else if (facb ==197){
var facbcol =51;
var facbrow =55;
}
else if (facb ==198){
var facbcol =52;
var facbrow =55;
}
else if (facb ==199){
var facbcol =53;
var facbrow =55;
}
else if (facb ==200){
var facbcol =22;
var facbrow =56;
}
else if (facb ==201){
var facbcol =23;
var facbrow =56;
}
else if (facb ==202){
var facbcol =24;
var facbrow =56;
}
else if (facb ==203){
var facbcol =25;
var facbrow =56;
}
else if (facb ==204){
var facbcol =26;
var facbrow =56;
}
else if (facb ==205){
var facbcol =27;
var facbrow =56;
}
else if (facb ==206){
var facbcol =28;
var facbrow =56;
}
else if (facb ==207){
var facbcol =29;
var facbrow =56;
}
else if (facb ==208){
var facbcol =30;
var facbrow =56;
}
else if (facb ==209){
var facbcol =31;
var facbrow =56;
}
else if (facb ==210){
var facbcol =32;
var facbrow =56;
}
else if (facb ==211){
var facbcol =33;
var facbrow =56;
}
else if (facb ==212){
var facbcol =34;
var facbrow =56;
}
else if (facb ==213){
var facbcol =43;
var facbrow =56;
}
else if (facb ==214){
var facbcol =44;
var facbrow =56;
}
else if (facb ==215){
var facbcol =45;
var facbrow =56;
}
else if (facb ==216){
var facbcol =46;
var facbrow =56;
}
else if (facb ==217){
var facbcol =47;
var facbrow =56;
}
else if (facb ==218){
var facbcol =48;
var facbrow =56;
}
else if (facb ==219){
var facbcol =49;
var facbrow =56;
}
else if (facb ==220){
var facbcol =50;
var facbrow =56;
}
else if (facb ==221){
var facbcol =51;
var facbrow =56;
}
else if (facb ==222){
var facbcol =52;
var facbrow =56;
}
else if (facb ==223){
var facbcol =53;
var facbrow =56;
}
else if (facb ==224){
var facbcol =21;
var facbrow =57;
}
else if (facb ==225){
var facbcol =22;
var facbrow =57;
}
else if (facb ==226){
var facbcol =23;
var facbrow =57;
}
else if (facb ==227){
var facbcol =24;
var facbrow =57;
}
else if (facb ==228){
var facbcol =25;
var facbrow =57;
}
else if (facb ==229){
var facbcol =26;
var facbrow =57;
}
else if (facb ==230){
var facbcol =27;
var facbrow =57;
}
else if (facb ==231){
var facbcol =28;
var facbrow =57;
}
else if (facb ==232){
var facbcol =29;
var facbrow =57;
}
else if (facb ==233){
var facbcol =30;
var facbrow =57;
}
else if (facb ==234){
var facbcol =31;
var facbrow =57;
}
else if (facb ==235){
var facbcol =32;
var facbrow =57;
}
else if (facb ==236){
var facbcol =33;
var facbrow =57;
}
else if (facb ==237){
var facbcol =34;
var facbrow =57;
}
else if (facb ==238){
var facbcol =43;
var facbrow =57;
}
else if (facb ==239){
var facbcol =44;
var facbrow =57;
}
else if (facb ==240){
var facbcol =45;
var facbrow =57;
}
else if (facb ==241){
var facbcol =46;
var facbrow =57;
}
else if (facb ==242){
var facbcol =47;
var facbrow =57;
}
else if (facb ==243){
var facbcol =48;
var facbrow =57;
}
else if (facb ==244){
var facbcol =49;
var facbrow =57;
}
else if (facb ==245){
var facbcol =50;
var facbrow =57;
}
else if (facb ==246){
var facbcol =51;
var facbrow =57;
}
else if (facb ==247){
var facbcol =52;
var facbrow =57;
}
else if (facb ==248){
var facbcol =53;
var facbrow =57;
}
else if (facb ==249){
var facbcol =20;
var facbrow =58;
}
else if (facb ==250){
var facbcol =21;
var facbrow =58;
}
else if (facb ==251){
var facbcol =22;
var facbrow =58;
}
else if (facb ==252){
var facbcol =23;
var facbrow =58;
}
else if (facb ==253){
var facbcol =24;
var facbrow =58;
}
else if (facb ==254){
var facbcol =25;
var facbrow =58;
}
else if (facb ==255){
var facbcol =26;
var facbrow =58;
}
else if (facb ==256){
var facbcol =27;
var facbrow =58;
}
else if (facb ==257){
var facbcol =28;
var facbrow =58;
}
else if (facb ==258){
var facbcol =29;
var facbrow =58;
}
else if (facb ==259){
var facbcol =30;
var facbrow =58;
}
else if (facb ==260){
var facbcol =31;
var facbrow =58;
}
else if (facb ==261){
var facbcol =32;
var facbrow =58;
}
else if (facb ==262){
var facbcol =33;
var facbrow =58;
}
else if (facb ==263){
var facbcol =34;
var facbrow =58;
}
else if (facb ==264){
var facbcol =43;
var facbrow =58;
}
else if (facb ==265){
var facbcol =44;
var facbrow =58;
}
else if (facb ==266){
var facbcol =45;
var facbrow =58;
}
else if (facb ==267){
var facbcol =46;
var facbrow =58;
}
else if (facb ==268){
var facbcol =47;
var facbrow =58;
}
else if (facb ==269){
var facbcol =48;
var facbrow =58;
}
else if (facb ==270){
var facbcol =49;
var facbrow =58;
}
else if (facb ==271){
var facbcol =50;
var facbrow =58;
}
else if (facb ==272){
var facbcol =51;
var facbrow =58;
}
else if (facb ==273){
var facbcol =52;
var facbrow =58;
}
else if (facb ==274){
var facbcol =53;
var facbrow =58;
}
else if (facb ==275){
var facbcol =20;
var facbrow =59;
}
else if (facb ==276){
var facbcol =21;
var facbrow =59;
}
else if (facb ==277){
var facbcol =22;
var facbrow =59;
}
else if (facb ==278){
var facbcol =23;
var facbrow =59;
}
else if (facb ==279){
var facbcol =24;
var facbrow =59;
}
else if (facb ==280){
var facbcol =25;
var facbrow =59;
}
else if (facb ==281){
var facbcol =26;
var facbrow =59;
}
else if (facb ==282){
var facbcol =27;
var facbrow =59;
}
else if (facb ==283){
var facbcol =28;
var facbrow =59;
}
else if (facb ==284){
var facbcol =29;
var facbrow =59;
}
else if (facb ==285){
var facbcol =30;
var facbrow =59;
}
else if (facb ==286){
var facbcol =31;
var facbrow =59;
}
else if (facb ==287){
var facbcol =32;
var facbrow =59;
}
else if (facb ==288){
var facbcol =33;
var facbrow =59;
}
else if (facb ==289){
var facbcol =34;
var facbrow =59;
}
else if (facb ==290){
var facbcol =42;
var facbrow =59;
}
else if (facb ==291){
var facbcol =43;
var facbrow =59;
}
else if (facb ==292){
var facbcol =44;
var facbrow =59;
}
else if (facb ==293){
var facbcol =45;
var facbrow =59;
}
else if (facb ==294){
var facbcol =46;
var facbrow =59;
}
else if (facb ==295){
var facbcol =47;
var facbrow =59;
}
else if (facb ==296){
var facbcol =48;
var facbrow =59;
}
else if (facb ==297){
var facbcol =49;
var facbrow =59;
}
else if (facb ==298){
var facbcol =50;
var facbrow =59;
}
else if (facb ==299){
var facbcol =51;
var facbrow =59;
}
else if (facb ==300){
var facbcol =52;
var facbrow =59;
}
else if (facb ==301){
var facbcol =53;
var facbrow =59;
}
else if (facb ==302){
var facbcol =20;
var facbrow =60;
}
else if (facb ==303){
var facbcol =21;
var facbrow =60;
}
else if (facb ==304){
var facbcol =22;
var facbrow =60;
}
else if (facb ==305){
var facbcol =23;
var facbrow =60;
}
else if (facb ==306){
var facbcol =24;
var facbrow =60;
}
else if (facb ==307){
var facbcol =25;
var facbrow =60;
}
else if (facb ==308){
var facbcol =26;
var facbrow =60;
}
else if (facb ==309){
var facbcol =27;
var facbrow =60;
}
else if (facb ==310){
var facbcol =28;
var facbrow =60;
}
else if (facb ==311){
var facbcol =29;
var facbrow =60;
}
else if (facb ==312){
var facbcol =30;
var facbrow =60;
}
else if (facb ==313){
var facbcol =31;
var facbrow =60;
}
else if (facb ==314){
var facbcol =32;
var facbrow =60;
}
else if (facb ==315){
var facbcol =33;
var facbrow =60;
}
else if (facb ==316){
var facbcol =34;
var facbrow =60;
}
else if (facb ==317){
var facbcol =42;
var facbrow =60;
}
else if (facb ==318){
var facbcol =43;
var facbrow =60;
}
else if (facb ==319){
var facbcol =44;
var facbrow =60;
}
else if (facb ==320){
var facbcol =45;
var facbrow =60;
}
else if (facb ==321){
var facbcol =46;
var facbrow =60;
}
else if (facb ==322){
var facbcol =47;
var facbrow =60;
}
else if (facb ==323){
var facbcol =48;
var facbrow =60;
}
else if (facb ==324){
var facbcol =49;
var facbrow =60;
}
else if (facb ==325){
var facbcol =50;
var facbrow =60;
}
else if (facb ==326){
var facbcol =51;
var facbrow =60;
}
else if (facb ==327){
var facbcol =52;
var facbrow =60;
}
else if (facb ==328){
var facbcol =53;
var facbrow =60;
}
else {
var facbcol =1;
var facbrow =1;
}

// put a position
buildMesh37.position.x = (2700 - 5400) + (facbcol * 90) - 30;
buildMesh37.position.z = (2700 - 5400) + (facbrow * 90) - 30;
//put a rotation
buildMesh37.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh37.scale.x = 60;
buildMesh37.scale.y = 60;
buildMesh37.scale.z = buildMesh37.scale.x;

//add geometry
var geo37 = buildMesh37.geo37;

THREE.GeometryUtils.merge( factoryGeometry, buildMesh37 );

//increment loop
facb ++;

   }








//return mesh
var mesh37 = new THREE.Mesh(factoryGeometry, material37);
return mesh37;

//new building end

//window canvas
function generateTextureWarehouse(){
// build a small canvas 30x50 and paint it in white
var tfac = document.createElement( 'canvas' );
tfac.width = 60;
tfac.height = 60;
var context = tfac.getContext( '2d' );
// plain it in white
context.fillStyle = '#ffffff';
context.fillRect( 0, 0, 60, 60 );

// then draw the image
context.drawImage( tfac, 0, 0, tfac.width, tfac.height );
// return the just built canvas
return tfac;
}


}


