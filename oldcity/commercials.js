var THREEx = THREEx || {}
THREEx.ProceduralCommercials = function(){

// generate texture
var texturecom  = new THREE.Texture( generateTextureBusiness() );
texturecom.needsUpdate = true;

//generate material
var material36 = new THREE.MeshLambertMaterial({
//map: texturecom,
color: 0xf8cfa7
//vertexColors : THREE.VertexColors
});

//city mesh
var businessGeometry = new THREE.Geometry();

//multiply colors
var comlight = new THREE.Color( 0xf8cfa7 );

/*
var cube = createMesh(new THREE.CubeGeometry(5, 5, 5), "brick-wall.jpg");
cube.position.x = -12;
scene.add(cube);
console.log(cube.geometry.faceVertexUvs);
*/


// build the base geometry for each building
var geo36 = new THREE.CubeGeometry( 1, 1, 1 );

// translate the geometry to place the pivot point at the bottom instead of the center
geo36.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

geo36.faceVertexUvs[0][0] = [ [0], [1], [3] ];
geo36.faceVertexUvs[0][1] = [ [1], [2], [3] ];
geo36.faceVertexUvs[0][2] = [ [0], [1], [3] ];
geo36.faceVertexUvs[0][3] = [ [1], [2], [3] ];
geo36.faceVertexUvs[0][4] = [ [0], [1], [3] ];
geo36.faceVertexUvs[0][5] = [ [1], [2], [3] ];
geo36.faceVertexUvs[0][6] = [ [0], [1], [3] ];
geo36.faceVertexUvs[0][7] = [ [1], [2], [3] ];
geo36.faceVertexUvs[0][8] = [ [0], [1], [3] ];
geo36.faceVertexUvs[0][9] = [ [1], [2], [3] ];
geo36.faceVertexUvs[0][10] = [ [0], [1], [3] ];
geo36.faceVertexUvs[0][11] = [ [1], [2], [3] ];

// buildMesh
var buildMesh36 = new THREE.Mesh( geo36  );
//var buildMesh36 = new THREE.Mesh(geo36, "colorfetch.png");

//loop
var dpbus = 1;
while (dpbus < 1378)
  {

 /*
var buitag = dpbus - 1;

var buxtag =xmlDoc.getElementsByTagName("GRID");
var busch = buxtag[buitag].getElementsByTagName("BUSINESS")[0].childNodes[0].nodeValue;

if (busch =="commercial"){

//row
var dpbusrow = (Math.floor(dpbus / 60)) + 1;
//column
var dpbuscol = 60 + dpbus - (dpbusrow * 60);
*/




if (dpbus ==1){
var dpbuscol =41;
var dpbusrow =2;
}
else if (dpbus ==2){
var dpbuscol =42;
var dpbusrow =2;
}
else if (dpbus ==3){
var dpbuscol =43;
var dpbusrow =2;
}
else if (dpbus ==4){
var dpbuscol =44;
var dpbusrow =2;
}
else if (dpbus ==5){
var dpbuscol =45;
var dpbusrow =2;
}
else if (dpbus ==6){
var dpbuscol =46;
var dpbusrow =2;
}
else if (dpbus ==7){
var dpbuscol =47;
var dpbusrow =2;
}
else if (dpbus ==8){
var dpbuscol =48;
var dpbusrow =2;
}
else if (dpbus ==9){
var dpbuscol =19;
var dpbusrow =3;
}
else if (dpbus ==10){
var dpbuscol =20;
var dpbusrow =3;
}
else if (dpbus ==11){
var dpbuscol =40;
var dpbusrow =3;
}
else if (dpbus ==12){
var dpbuscol =41;
var dpbusrow =3;
}
else if (dpbus ==13){
var dpbuscol =42;
var dpbusrow =3;
}
else if (dpbus ==14){
var dpbuscol =43;
var dpbusrow =3;
}
else if (dpbus ==15){
var dpbuscol =44;
var dpbusrow =3;
}
else if (dpbus ==16){
var dpbuscol =45;
var dpbusrow =3;
}
else if (dpbus ==17){
var dpbuscol =46;
var dpbusrow =3;
}
else if (dpbus ==18){
var dpbuscol =47;
var dpbusrow =3;
}
else if (dpbus ==19){
var dpbuscol =48;
var dpbusrow =3;
}
else if (dpbus ==20){
var dpbuscol =49;
var dpbusrow =3;
}
else if (dpbus ==21){
var dpbuscol =6;
var dpbusrow =4;
}
else if (dpbus ==22){
var dpbuscol =7;
var dpbusrow =4;
}
else if (dpbus ==23){
var dpbuscol =8;
var dpbusrow =4;
}
else if (dpbus ==24){
var dpbuscol =9;
var dpbusrow =4;
}
else if (dpbus ==25){
var dpbuscol =17;
var dpbusrow =4;
}
else if (dpbus ==26){
var dpbuscol =18;
var dpbusrow =4;
}
else if (dpbus ==27){
var dpbuscol =19;
var dpbusrow =4;
}
else if (dpbus ==28){
var dpbuscol =20;
var dpbusrow =4;
}
else if (dpbus ==29){
var dpbuscol =21;
var dpbusrow =4;
}
else if (dpbus ==30){
var dpbuscol =39;
var dpbusrow =4;
}
else if (dpbus ==31){
var dpbuscol =40;
var dpbusrow =4;
}
else if (dpbus ==32){
var dpbuscol =41;
var dpbusrow =4;
}
else if (dpbus ==33){
var dpbuscol =42;
var dpbusrow =4;
}
else if (dpbus ==34){
var dpbuscol =43;
var dpbusrow =4;
}
else if (dpbus ==35){
var dpbuscol =44;
var dpbusrow =4;
}
else if (dpbus ==36){
var dpbuscol =45;
var dpbusrow =4;
}
else if (dpbus ==37){
var dpbuscol =46;
var dpbusrow =4;
}
else if (dpbus ==38){
var dpbuscol =47;
var dpbusrow =4;
}
else if (dpbus ==39){
var dpbuscol =48;
var dpbusrow =4;
}
else if (dpbus ==40){
var dpbuscol =49;
var dpbusrow =4;
}
else if (dpbus ==41){
var dpbuscol =50;
var dpbusrow =4;
}
else if (dpbus ==42){
var dpbuscol =51;
var dpbusrow =4;
}
else if (dpbus ==43){
var dpbuscol =4;
var dpbusrow =5;
}
else if (dpbus ==44){
var dpbuscol =5;
var dpbusrow =5;
}
else if (dpbus ==45){
var dpbuscol =6;
var dpbusrow =5;
}
else if (dpbus ==46){
var dpbuscol =7;
var dpbusrow =5;
}
else if (dpbus ==47){
var dpbuscol =8;
var dpbusrow =5;
}
else if (dpbus ==48){
var dpbuscol =9;
var dpbusrow =5;
}
else if (dpbus ==49){
var dpbuscol =10;
var dpbusrow =5;
}
else if (dpbus ==50){
var dpbuscol =11;
var dpbusrow =5;
}
else if (dpbus ==51){
var dpbuscol =12;
var dpbusrow =5;
}
else if (dpbus ==52){
var dpbuscol =13;
var dpbusrow =5;
}
else if (dpbus ==53){
var dpbuscol =17;
var dpbusrow =5;
}
else if (dpbus ==54){
var dpbuscol =18;
var dpbusrow =5;
}
else if (dpbus ==55){
var dpbuscol =19;
var dpbusrow =5;
}
else if (dpbus ==56){
var dpbuscol =21;
var dpbusrow =5;
}
else if (dpbus ==57){
var dpbuscol =22;
var dpbusrow =5;
}
else if (dpbus ==58){
var dpbuscol =23;
var dpbusrow =5;
}
else if (dpbus ==59){
var dpbuscol =39;
var dpbusrow =5;
}
else if (dpbus ==60){
var dpbuscol =40;
var dpbusrow =5;
}
else if (dpbus ==61){
var dpbuscol =41;
var dpbusrow =5;
}
else if (dpbus ==62){
var dpbuscol =43;
var dpbusrow =5;
}
else if (dpbus ==63){
var dpbuscol =44;
var dpbusrow =5;
}
else if (dpbus ==64){
var dpbuscol =45;
var dpbusrow =5;
}
else if (dpbus ==65){
var dpbuscol =47;
var dpbusrow =5;
}
else if (dpbus ==66){
var dpbuscol =49;
var dpbusrow =5;
}
else if (dpbus ==67){
var dpbuscol =50;
var dpbusrow =5;
}
else if (dpbus ==68){
var dpbuscol =51;
var dpbusrow =5;
}
else if (dpbus ==69){
var dpbuscol =52;
var dpbusrow =5;
}
else if (dpbus ==70){
var dpbuscol =3;
var dpbusrow =6;
}
else if (dpbus ==71){
var dpbuscol =4;
var dpbusrow =6;
}
else if (dpbus ==72){
var dpbuscol =5;
var dpbusrow =6;
}
else if (dpbus ==73){
var dpbuscol =6;
var dpbusrow =6;
}
else if (dpbus ==74){
var dpbuscol =7;
var dpbusrow =6;
}
else if (dpbus ==75){
var dpbuscol =8;
var dpbusrow =6;
}
else if (dpbus ==76){
var dpbuscol =9;
var dpbusrow =6;
}
else if (dpbus ==77){
var dpbuscol =10;
var dpbusrow =6;
}
else if (dpbus ==78){
var dpbuscol =11;
var dpbusrow =6;
}
else if (dpbus ==79){
var dpbuscol =12;
var dpbusrow =6;
}
else if (dpbus ==80){
var dpbuscol =13;
var dpbusrow =6;
}
else if (dpbus ==81){
var dpbuscol =16;
var dpbusrow =6;
}
else if (dpbus ==82){
var dpbuscol =17;
var dpbusrow =6;
}
else if (dpbus ==83){
var dpbuscol =18;
var dpbusrow =6;
}
else if (dpbus ==84){
var dpbuscol =19;
var dpbusrow =6;
}
else if (dpbus ==85){
var dpbuscol =20;
var dpbusrow =6;
}
else if (dpbus ==86){
var dpbuscol =21;
var dpbusrow =6;
}
else if (dpbus ==87){
var dpbuscol =22;
var dpbusrow =6;
}
else if (dpbus ==88){
var dpbuscol =23;
var dpbusrow =6;
}
else if (dpbus ==89){
var dpbuscol =39;
var dpbusrow =6;
}
else if (dpbus ==90){
var dpbuscol =40;
var dpbusrow =6;
}
else if (dpbus ==91){
var dpbuscol =41;
var dpbusrow =6;
}
else if (dpbus ==92){
var dpbuscol =42;
var dpbusrow =6;
}
else if (dpbus ==93){
var dpbuscol =44;
var dpbusrow =6;
}
else if (dpbus ==94){
var dpbuscol =46;
var dpbusrow =6;
}
else if (dpbus ==95){
var dpbuscol =47;
var dpbusrow =6;
}
else if (dpbus ==96){
var dpbuscol =48;
var dpbusrow =6;
}
else if (dpbus ==97){
var dpbuscol =49;
var dpbusrow =6;
}
else if (dpbus ==98){
var dpbuscol =50;
var dpbusrow =6;
}
else if (dpbus ==99){
var dpbuscol =51;
var dpbusrow =6;
}
else if (dpbus ==100){
var dpbuscol =52;
var dpbusrow =6;
}
else if (dpbus ==101){
var dpbuscol =2;
var dpbusrow =7;
}
else if (dpbus ==102){
var dpbuscol =3;
var dpbusrow =7;
}
else if (dpbus ==103){
var dpbuscol =4;
var dpbusrow =7;
}
else if (dpbus ==104){
var dpbuscol =5;
var dpbusrow =7;
}
else if (dpbus ==105){
var dpbuscol =6;
var dpbusrow =7;
}
else if (dpbus ==106){
var dpbuscol =7;
var dpbusrow =7;
}
else if (dpbus ==107){
var dpbuscol =8;
var dpbusrow =7;
}
else if (dpbus ==108){
var dpbuscol =9;
var dpbusrow =7;
}
else if (dpbus ==109){
var dpbuscol =11;
var dpbusrow =7;
}
else if (dpbus ==110){
var dpbuscol =12;
var dpbusrow =7;
}
else if (dpbus ==111){
var dpbuscol =13;
var dpbusrow =7;
}
else if (dpbus ==112){
var dpbuscol =14;
var dpbusrow =7;
}
else if (dpbus ==113){
var dpbuscol =15;
var dpbusrow =7;
}
else if (dpbus ==114){
var dpbuscol =16;
var dpbusrow =7;
}
else if (dpbus ==115){
var dpbuscol =17;
var dpbusrow =7;
}
else if (dpbus ==116){
var dpbuscol =18;
var dpbusrow =7;
}
else if (dpbus ==117){
var dpbuscol =20;
var dpbusrow =7;
}
else if (dpbus ==118){
var dpbuscol =21;
var dpbusrow =7;
}
else if (dpbus ==119){
var dpbuscol =22;
var dpbusrow =7;
}
else if (dpbus ==120){
var dpbuscol =23;
var dpbusrow =7;
}
else if (dpbus ==121){
var dpbuscol =35;
var dpbusrow =7;
}
else if (dpbus ==122){
var dpbuscol =36;
var dpbusrow =7;
}
else if (dpbus ==123){
var dpbuscol =37;
var dpbusrow =7;
}
else if (dpbus ==124){
var dpbuscol =38;
var dpbusrow =7;
}
else if (dpbus ==125){
var dpbuscol =39;
var dpbusrow =7;
}
else if (dpbus ==126){
var dpbuscol =40;
var dpbusrow =7;
}
else if (dpbus ==127){
var dpbuscol =41;
var dpbusrow =7;
}
else if (dpbus ==128){
var dpbuscol =42;
var dpbusrow =7;
}
else if (dpbus ==129){
var dpbuscol =43;
var dpbusrow =7;
}
else if (dpbus ==130){
var dpbuscol =44;
var dpbusrow =7;
}
else if (dpbus ==131){
var dpbuscol =45;
var dpbusrow =7;
}
else if (dpbus ==132){
var dpbuscol =46;
var dpbusrow =7;
}
else if (dpbus ==133){
var dpbuscol =48;
var dpbusrow =7;
}
else if (dpbus ==134){
var dpbuscol =49;
var dpbusrow =7;
}
else if (dpbus ==135){
var dpbuscol =50;
var dpbusrow =7;
}
else if (dpbus ==136){
var dpbuscol =51;
var dpbusrow =7;
}
else if (dpbus ==137){
var dpbuscol =52;
var dpbusrow =7;
}
else if (dpbus ==138){
var dpbuscol =2;
var dpbusrow =8;
}
else if (dpbus ==139){
var dpbuscol =3;
var dpbusrow =8;
}
else if (dpbus ==140){
var dpbuscol =4;
var dpbusrow =8;
}
else if (dpbus ==141){
var dpbuscol =5;
var dpbusrow =8;
}
else if (dpbus ==142){
var dpbuscol =7;
var dpbusrow =8;
}
else if (dpbus ==143){
var dpbuscol =8;
var dpbusrow =8;
}
else if (dpbus ==144){
var dpbuscol =9;
var dpbusrow =8;
}
else if (dpbus ==145){
var dpbuscol =10;
var dpbusrow =8;
}
else if (dpbus ==146){
var dpbuscol =11;
var dpbusrow =8;
}
else if (dpbus ==147){
var dpbuscol =12;
var dpbusrow =8;
}
else if (dpbus ==148){
var dpbuscol =13;
var dpbusrow =8;
}
else if (dpbus ==149){
var dpbuscol =14;
var dpbusrow =8;
}
else if (dpbus ==150){
var dpbuscol =15;
var dpbusrow =8;
}
else if (dpbus ==151){
var dpbuscol =16;
var dpbusrow =8;
}
else if (dpbus ==152){
var dpbuscol =17;
var dpbusrow =8;
}
else if (dpbus ==153){
var dpbuscol =18;
var dpbusrow =8;
}
else if (dpbus ==154){
var dpbuscol =19;
var dpbusrow =8;
}
else if (dpbus ==155){
var dpbuscol =20;
var dpbusrow =8;
}
else if (dpbus ==156){
var dpbuscol =21;
var dpbusrow =8;
}
else if (dpbus ==157){
var dpbuscol =22;
var dpbusrow =8;
}
else if (dpbus ==158){
var dpbuscol =23;
var dpbusrow =8;
}
else if (dpbus ==159){
var dpbuscol =34;
var dpbusrow =8;
}
else if (dpbus ==160){
var dpbuscol =35;
var dpbusrow =8;
}
else if (dpbus ==161){
var dpbuscol =36;
var dpbusrow =8;
}
else if (dpbus ==162){
var dpbuscol =37;
var dpbusrow =8;
}
else if (dpbus ==163){
var dpbuscol =38;
var dpbusrow =8;
}
else if (dpbus ==164){
var dpbuscol =39;
var dpbusrow =8;
}
else if (dpbus ==165){
var dpbuscol =40;
var dpbusrow =8;
}
else if (dpbus ==166){
var dpbuscol =41;
var dpbusrow =8;
}
else if (dpbus ==167){
var dpbuscol =42;
var dpbusrow =8;
}
else if (dpbus ==168){
var dpbuscol =43;
var dpbusrow =8;
}
else if (dpbus ==169){
var dpbuscol =44;
var dpbusrow =8;
}
else if (dpbus ==170){
var dpbuscol =45;
var dpbusrow =8;
}
else if (dpbus ==171){
var dpbuscol =46;
var dpbusrow =8;
}
else if (dpbus ==172){
var dpbuscol =48;
var dpbusrow =8;
}
else if (dpbus ==173){
var dpbuscol =49;
var dpbusrow =8;
}
else if (dpbus ==174){
var dpbuscol =50;
var dpbusrow =8;
}
else if (dpbus ==175){
var dpbuscol =51;
var dpbusrow =8;
}
else if (dpbus ==176){
var dpbuscol =52;
var dpbusrow =8;
}
else if (dpbus ==177){
var dpbuscol =2;
var dpbusrow =9;
}
else if (dpbus ==178){
var dpbuscol =3;
var dpbusrow =9;
}
else if (dpbus ==179){
var dpbuscol =4;
var dpbusrow =9;
}
else if (dpbus ==180){
var dpbuscol =5;
var dpbusrow =9;
}
else if (dpbus ==181){
var dpbuscol =6;
var dpbusrow =9;
}
else if (dpbus ==182){
var dpbuscol =7;
var dpbusrow =9;
}
else if (dpbus ==183){
var dpbuscol =8;
var dpbusrow =9;
}
else if (dpbus ==184){
var dpbuscol =9;
var dpbusrow =9;
}
else if (dpbus ==185){
var dpbuscol =10;
var dpbusrow =9;
}
else if (dpbus ==186){
var dpbuscol =11;
var dpbusrow =9;
}
else if (dpbus ==187){
var dpbuscol =12;
var dpbusrow =9;
}
else if (dpbus ==188){
var dpbuscol =13;
var dpbusrow =9;
}
else if (dpbus ==189){
var dpbuscol =15;
var dpbusrow =9;
}
else if (dpbus ==190){
var dpbuscol =16;
var dpbusrow =9;
}
else if (dpbus ==191){
var dpbuscol =17;
var dpbusrow =9;
}
else if (dpbus ==192){
var dpbuscol =18;
var dpbusrow =9;
}
else if (dpbus ==193){
var dpbuscol =19;
var dpbusrow =9;
}
else if (dpbus ==194){
var dpbuscol =20;
var dpbusrow =9;
}
else if (dpbus ==195){
var dpbuscol =21;
var dpbusrow =9;
}
else if (dpbus ==196){
var dpbuscol =22;
var dpbusrow =9;
}
else if (dpbus ==197){
var dpbuscol =23;
var dpbusrow =9;
}
else if (dpbus ==198){
var dpbuscol =34;
var dpbusrow =9;
}
else if (dpbus ==199){
var dpbuscol =35;
var dpbusrow =9;
}
else if (dpbus ==200){
var dpbuscol =36;
var dpbusrow =9;
}
else if (dpbus ==201){
var dpbuscol =37;
var dpbusrow =9;
}
else if (dpbus ==202){
var dpbuscol =38;
var dpbusrow =9;
}
else if (dpbus ==203){
var dpbuscol =39;
var dpbusrow =9;
}
else if (dpbus ==204){
var dpbuscol =40;
var dpbusrow =9;
}
else if (dpbus ==205){
var dpbuscol =41;
var dpbusrow =9;
}
else if (dpbus ==206){
var dpbuscol =43;
var dpbusrow =9;
}
else if (dpbus ==207){
var dpbuscol =44;
var dpbusrow =9;
}
else if (dpbus ==208){
var dpbuscol =45;
var dpbusrow =9;
}
else if (dpbus ==209){
var dpbuscol =46;
var dpbusrow =9;
}
else if (dpbus ==210){
var dpbuscol =48;
var dpbusrow =9;
}
else if (dpbus ==211){
var dpbuscol =49;
var dpbusrow =9;
}
else if (dpbus ==212){
var dpbuscol =50;
var dpbusrow =9;
}
else if (dpbus ==213){
var dpbuscol =51;
var dpbusrow =9;
}
else if (dpbus ==214){
var dpbuscol =52;
var dpbusrow =9;
}
else if (dpbus ==215){
var dpbuscol =2;
var dpbusrow =10;
}
else if (dpbus ==216){
var dpbuscol =3;
var dpbusrow =10;
}
else if (dpbus ==217){
var dpbuscol =4;
var dpbusrow =10;
}
else if (dpbus ==218){
var dpbuscol =6;
var dpbusrow =10;
}
else if (dpbus ==219){
var dpbuscol =7;
var dpbusrow =10;
}
else if (dpbus ==220){
var dpbuscol =8;
var dpbusrow =10;
}
else if (dpbus ==221){
var dpbuscol =9;
var dpbusrow =10;
}
else if (dpbus ==222){
var dpbuscol =10;
var dpbusrow =10;
}
else if (dpbus ==223){
var dpbuscol =11;
var dpbusrow =10;
}
else if (dpbus ==224){
var dpbuscol =12;
var dpbusrow =10;
}
else if (dpbus ==225){
var dpbuscol =13;
var dpbusrow =10;
}
else if (dpbus ==226){
var dpbuscol =14;
var dpbusrow =10;
}
else if (dpbus ==227){
var dpbuscol =15;
var dpbusrow =10;
}
else if (dpbus ==228){
var dpbuscol =16;
var dpbusrow =10;
}
else if (dpbus ==229){
var dpbuscol =17;
var dpbusrow =10;
}
else if (dpbus ==230){
var dpbuscol =18;
var dpbusrow =10;
}
else if (dpbus ==231){
var dpbuscol =19;
var dpbusrow =10;
}
else if (dpbus ==232){
var dpbuscol =20;
var dpbusrow =10;
}
else if (dpbus ==233){
var dpbuscol =22;
var dpbusrow =10;
}
else if (dpbus ==234){
var dpbuscol =23;
var dpbusrow =10;
}
else if (dpbus ==235){
var dpbuscol =24;
var dpbusrow =10;
}
else if (dpbus ==236){
var dpbuscol =34;
var dpbusrow =10;
}
else if (dpbus ==237){
var dpbuscol =35;
var dpbusrow =10;
}
else if (dpbus ==238){
var dpbuscol =36;
var dpbusrow =10;
}
else if (dpbus ==239){
var dpbuscol =38;
var dpbusrow =10;
}
else if (dpbus ==240){
var dpbuscol =39;
var dpbusrow =10;
}
else if (dpbus ==241){
var dpbuscol =40;
var dpbusrow =10;
}
else if (dpbus ==242){
var dpbuscol =41;
var dpbusrow =10;
}
else if (dpbus ==243){
var dpbuscol =42;
var dpbusrow =10;
}
else if (dpbus ==244){
var dpbuscol =43;
var dpbusrow =10;
}
else if (dpbus ==245){
var dpbuscol =44;
var dpbusrow =10;
}
else if (dpbus ==246){
var dpbuscol =45;
var dpbusrow =10;
}
else if (dpbus ==247){
var dpbuscol =46;
var dpbusrow =10;
}
else if (dpbus ==248){
var dpbuscol =47;
var dpbusrow =10;
}
else if (dpbus ==249){
var dpbuscol =48;
var dpbusrow =10;
}
else if (dpbus ==250){
var dpbuscol =49;
var dpbusrow =10;
}
else if (dpbus ==251){
var dpbuscol =50;
var dpbusrow =10;
}
else if (dpbus ==252){
var dpbuscol =51;
var dpbusrow =10;
}
else if (dpbus ==253){
var dpbuscol =52;
var dpbusrow =10;
}
else if (dpbus ==254){
var dpbuscol =2;
var dpbusrow =11;
}
else if (dpbus ==255){
var dpbuscol =3;
var dpbusrow =11;
}
else if (dpbus ==256){
var dpbuscol =4;
var dpbusrow =11;
}
else if (dpbus ==257){
var dpbuscol =5;
var dpbusrow =11;
}
else if (dpbus ==258){
var dpbuscol =6;
var dpbusrow =11;
}
else if (dpbus ==259){
var dpbuscol =7;
var dpbusrow =11;
}
else if (dpbus ==260){
var dpbuscol =8;
var dpbusrow =11;
}
else if (dpbus ==261){
var dpbuscol =9;
var dpbusrow =11;
}
else if (dpbus ==262){
var dpbuscol =10;
var dpbusrow =11;
}
else if (dpbus ==263){
var dpbuscol =11;
var dpbusrow =11;
}
else if (dpbus ==264){
var dpbuscol =12;
var dpbusrow =11;
}
else if (dpbus ==265){
var dpbuscol =13;
var dpbusrow =11;
}
else if (dpbus ==266){
var dpbuscol =14;
var dpbusrow =11;
}
else if (dpbus ==267){
var dpbuscol =15;
var dpbusrow =11;
}
else if (dpbus ==268){
var dpbuscol =16;
var dpbusrow =11;
}
else if (dpbus ==269){
var dpbuscol =17;
var dpbusrow =11;
}
else if (dpbus ==270){
var dpbuscol =18;
var dpbusrow =11;
}
else if (dpbus ==271){
var dpbuscol =19;
var dpbusrow =11;
}
else if (dpbus ==272){
var dpbuscol =20;
var dpbusrow =11;
}
else if (dpbus ==273){
var dpbuscol =21;
var dpbusrow =11;
}
else if (dpbus ==274){
var dpbuscol =22;
var dpbusrow =11;
}
else if (dpbus ==275){
var dpbuscol =23;
var dpbusrow =11;
}
else if (dpbus ==276){
var dpbuscol =24;
var dpbusrow =11;
}
else if (dpbus ==277){
var dpbuscol =34;
var dpbusrow =11;
}
else if (dpbus ==278){
var dpbuscol =35;
var dpbusrow =11;
}
else if (dpbus ==279){
var dpbuscol =36;
var dpbusrow =11;
}
else if (dpbus ==280){
var dpbuscol =37;
var dpbusrow =11;
}
else if (dpbus ==281){
var dpbuscol =38;
var dpbusrow =11;
}
else if (dpbus ==282){
var dpbuscol =39;
var dpbusrow =11;
}
else if (dpbus ==283){
var dpbuscol =40;
var dpbusrow =11;
}
else if (dpbus ==284){
var dpbuscol =41;
var dpbusrow =11;
}
else if (dpbus ==285){
var dpbuscol =42;
var dpbusrow =11;
}
else if (dpbus ==286){
var dpbuscol =43;
var dpbusrow =11;
}
else if (dpbus ==287){
var dpbuscol =45;
var dpbusrow =11;
}
else if (dpbus ==288){
var dpbuscol =46;
var dpbusrow =11;
}
else if (dpbus ==289){
var dpbuscol =47;
var dpbusrow =11;
}
else if (dpbus ==290){
var dpbuscol =48;
var dpbusrow =11;
}
else if (dpbus ==291){
var dpbuscol =49;
var dpbusrow =11;
}
else if (dpbus ==292){
var dpbuscol =50;
var dpbusrow =11;
}
else if (dpbus ==293){
var dpbuscol =51;
var dpbusrow =11;
}
else if (dpbus ==294){
var dpbuscol =3;
var dpbusrow =12;
}
else if (dpbus ==295){
var dpbuscol =4;
var dpbusrow =12;
}
else if (dpbus ==296){
var dpbuscol =5;
var dpbusrow =12;
}
else if (dpbus ==297){
var dpbuscol =6;
var dpbusrow =12;
}
else if (dpbus ==298){
var dpbuscol =7;
var dpbusrow =12;
}
else if (dpbus ==299){
var dpbuscol =8;
var dpbusrow =12;
}
else if (dpbus ==300){
var dpbuscol =9;
var dpbusrow =12;
}
else if (dpbus ==301){
var dpbuscol =10;
var dpbusrow =12;
}
else if (dpbus ==302){
var dpbuscol =11;
var dpbusrow =12;
}
else if (dpbus ==303){
var dpbuscol =12;
var dpbusrow =12;
}
else if (dpbus ==304){
var dpbuscol =13;
var dpbusrow =12;
}
else if (dpbus ==305){
var dpbuscol =14;
var dpbusrow =12;
}
else if (dpbus ==306){
var dpbuscol =15;
var dpbusrow =12;
}
else if (dpbus ==307){
var dpbuscol =16;
var dpbusrow =12;
}
else if (dpbus ==308){
var dpbuscol =17;
var dpbusrow =12;
}
else if (dpbus ==309){
var dpbuscol =18;
var dpbusrow =12;
}
else if (dpbus ==310){
var dpbuscol =19;
var dpbusrow =12;
}
else if (dpbus ==311){
var dpbuscol =20;
var dpbusrow =12;
}
else if (dpbus ==312){
var dpbuscol =21;
var dpbusrow =12;
}
else if (dpbus ==313){
var dpbuscol =22;
var dpbusrow =12;
}
else if (dpbus ==314){
var dpbuscol =23;
var dpbusrow =12;
}
else if (dpbus ==315){
var dpbuscol =24;
var dpbusrow =12;
}
else if (dpbus ==316){
var dpbuscol =33;
var dpbusrow =12;
}
else if (dpbus ==317){
var dpbuscol =34;
var dpbusrow =12;
}
else if (dpbus ==318){
var dpbuscol =35;
var dpbusrow =12;
}
else if (dpbus ==319){
var dpbuscol =36;
var dpbusrow =12;
}
else if (dpbus ==320){
var dpbuscol =37;
var dpbusrow =12;
}
else if (dpbus ==321){
var dpbuscol =38;
var dpbusrow =12;
}
else if (dpbus ==322){
var dpbuscol =39;
var dpbusrow =12;
}
else if (dpbus ==323){
var dpbuscol =41;
var dpbusrow =12;
}
else if (dpbus ==324){
var dpbuscol =42;
var dpbusrow =12;
}
else if (dpbus ==325){
var dpbuscol =43;
var dpbusrow =12;
}
else if (dpbus ==326){
var dpbuscol =44;
var dpbusrow =12;
}
else if (dpbus ==327){
var dpbuscol =45;
var dpbusrow =12;
}
else if (dpbus ==328){
var dpbuscol =46;
var dpbusrow =12;
}
else if (dpbus ==329){
var dpbuscol =47;
var dpbusrow =12;
}
else if (dpbus ==330){
var dpbuscol =49;
var dpbusrow =12;
}
else if (dpbus ==331){
var dpbuscol =50;
var dpbusrow =12;
}
else if (dpbus ==332){
var dpbuscol =51;
var dpbusrow =12;
}
else if (dpbus ==333){
var dpbuscol =3;
var dpbusrow =13;
}
else if (dpbus ==334){
var dpbuscol =4;
var dpbusrow =13;
}
else if (dpbus ==335){
var dpbuscol =5;
var dpbusrow =13;
}
else if (dpbus ==336){
var dpbuscol =6;
var dpbusrow =13;
}
else if (dpbus ==337){
var dpbuscol =7;
var dpbusrow =13;
}
else if (dpbus ==338){
var dpbuscol =8;
var dpbusrow =13;
}
else if (dpbus ==339){
var dpbuscol =9;
var dpbusrow =13;
}
else if (dpbus ==340){
var dpbuscol =10;
var dpbusrow =13;
}
else if (dpbus ==341){
var dpbuscol =11;
var dpbusrow =13;
}
else if (dpbus ==342){
var dpbuscol =12;
var dpbusrow =13;
}
else if (dpbus ==343){
var dpbuscol =13;
var dpbusrow =13;
}
else if (dpbus ==344){
var dpbuscol =14;
var dpbusrow =13;
}
else if (dpbus ==345){
var dpbuscol =15;
var dpbusrow =13;
}
else if (dpbus ==346){
var dpbuscol =16;
var dpbusrow =13;
}
else if (dpbus ==347){
var dpbuscol =17;
var dpbusrow =13;
}
else if (dpbus ==348){
var dpbuscol =18;
var dpbusrow =13;
}
else if (dpbus ==349){
var dpbuscol =19;
var dpbusrow =13;
}
else if (dpbus ==350){
var dpbuscol =20;
var dpbusrow =13;
}
else if (dpbus ==351){
var dpbuscol =21;
var dpbusrow =13;
}
else if (dpbus ==352){
var dpbuscol =22;
var dpbusrow =13;
}
else if (dpbus ==353){
var dpbuscol =23;
var dpbusrow =13;
}
else if (dpbus ==354){
var dpbuscol =24;
var dpbusrow =13;
}
else if (dpbus ==355){
var dpbuscol =25;
var dpbusrow =13;
}
else if (dpbus ==356){
var dpbuscol =32;
var dpbusrow =13;
}
else if (dpbus ==357){
var dpbuscol =33;
var dpbusrow =13;
}
else if (dpbus ==358){
var dpbuscol =34;
var dpbusrow =13;
}
else if (dpbus ==359){
var dpbuscol =35;
var dpbusrow =13;
}
else if (dpbus ==360){
var dpbuscol =36;
var dpbusrow =13;
}
else if (dpbus ==361){
var dpbuscol =37;
var dpbusrow =13;
}
else if (dpbus ==362){
var dpbuscol =38;
var dpbusrow =13;
}
else if (dpbus ==363){
var dpbuscol =39;
var dpbusrow =13;
}
else if (dpbus ==364){
var dpbuscol =40;
var dpbusrow =13;
}
else if (dpbus ==365){
var dpbuscol =41;
var dpbusrow =13;
}
else if (dpbus ==366){
var dpbuscol =42;
var dpbusrow =13;
}
else if (dpbus ==367){
var dpbuscol =44;
var dpbusrow =13;
}
else if (dpbus ==368){
var dpbuscol =45;
var dpbusrow =13;
}
else if (dpbus ==369){
var dpbuscol =46;
var dpbusrow =13;
}
else if (dpbus ==370){
var dpbuscol =47;
var dpbusrow =13;
}
else if (dpbus ==371){
var dpbuscol =48;
var dpbusrow =13;
}
else if (dpbus ==372){
var dpbuscol =49;
var dpbusrow =13;
}
else if (dpbus ==373){
var dpbuscol =50;
var dpbusrow =13;
}
else if (dpbus ==374){
var dpbuscol =4;
var dpbusrow =14;
}
else if (dpbus ==375){
var dpbuscol =5;
var dpbusrow =14;
}
else if (dpbus ==376){
var dpbuscol =6;
var dpbusrow =14;
}
else if (dpbus ==377){
var dpbuscol =7;
var dpbusrow =14;
}
else if (dpbus ==378){
var dpbuscol =8;
var dpbusrow =14;
}
else if (dpbus ==379){
var dpbuscol =9;
var dpbusrow =14;
}
else if (dpbus ==380){
var dpbuscol =10;
var dpbusrow =14;
}
else if (dpbus ==381){
var dpbuscol =11;
var dpbusrow =14;
}
else if (dpbus ==382){
var dpbuscol =12;
var dpbusrow =14;
}
else if (dpbus ==383){
var dpbuscol =13;
var dpbusrow =14;
}
else if (dpbus ==384){
var dpbuscol =14;
var dpbusrow =14;
}
else if (dpbus ==385){
var dpbuscol =15;
var dpbusrow =14;
}
else if (dpbus ==386){
var dpbuscol =16;
var dpbusrow =14;
}
else if (dpbus ==387){
var dpbuscol =17;
var dpbusrow =14;
}
else if (dpbus ==388){
var dpbuscol =18;
var dpbusrow =14;
}
else if (dpbus ==389){
var dpbuscol =19;
var dpbusrow =14;
}
else if (dpbus ==390){
var dpbuscol =20;
var dpbusrow =14;
}
else if (dpbus ==391){
var dpbuscol =21;
var dpbusrow =14;
}
else if (dpbus ==392){
var dpbuscol =22;
var dpbusrow =14;
}
else if (dpbus ==393){
var dpbuscol =23;
var dpbusrow =14;
}
else if (dpbus ==394){
var dpbuscol =24;
var dpbusrow =14;
}
else if (dpbus ==395){
var dpbuscol =25;
var dpbusrow =14;
}
else if (dpbus ==396){
var dpbuscol =26;
var dpbusrow =14;
}
else if (dpbus ==397){
var dpbuscol =27;
var dpbusrow =14;
}
else if (dpbus ==398){
var dpbuscol =32;
var dpbusrow =14;
}
else if (dpbus ==399){
var dpbuscol =33;
var dpbusrow =14;
}
else if (dpbus ==400){
var dpbuscol =34;
var dpbusrow =14;
}
else if (dpbus ==401){
var dpbuscol =35;
var dpbusrow =14;
}
else if (dpbus ==402){
var dpbuscol =36;
var dpbusrow =14;
}
else if (dpbus ==403){
var dpbuscol =37;
var dpbusrow =14;
}
else if (dpbus ==404){
var dpbuscol =38;
var dpbusrow =14;
}
else if (dpbus ==405){
var dpbuscol =39;
var dpbusrow =14;
}
else if (dpbus ==406){
var dpbuscol =40;
var dpbusrow =14;
}
else if (dpbus ==407){
var dpbuscol =41;
var dpbusrow =14;
}
else if (dpbus ==408){
var dpbuscol =42;
var dpbusrow =14;
}
else if (dpbus ==409){
var dpbuscol =43;
var dpbusrow =14;
}
else if (dpbus ==410){
var dpbuscol =44;
var dpbusrow =14;
}
else if (dpbus ==411){
var dpbuscol =45;
var dpbusrow =14;
}
else if (dpbus ==412){
var dpbuscol =46;
var dpbusrow =14;
}
else if (dpbus ==413){
var dpbuscol =47;
var dpbusrow =14;
}
else if (dpbus ==414){
var dpbuscol =48;
var dpbusrow =14;
}
else if (dpbus ==415){
var dpbuscol =49;
var dpbusrow =14;
}
else if (dpbus ==416){
var dpbuscol =5;
var dpbusrow =15;
}
else if (dpbus ==417){
var dpbuscol =6;
var dpbusrow =15;
}
else if (dpbus ==418){
var dpbuscol =7;
var dpbusrow =15;
}
else if (dpbus ==419){
var dpbuscol =8;
var dpbusrow =15;
}
else if (dpbus ==420){
var dpbuscol =11;
var dpbusrow =15;
}
else if (dpbus ==421){
var dpbuscol =12;
var dpbusrow =15;
}
else if (dpbus ==422){
var dpbuscol =13;
var dpbusrow =15;
}
else if (dpbus ==423){
var dpbuscol =14;
var dpbusrow =15;
}
else if (dpbus ==424){
var dpbuscol =15;
var dpbusrow =15;
}
else if (dpbus ==425){
var dpbuscol =16;
var dpbusrow =15;
}
else if (dpbus ==426){
var dpbuscol =17;
var dpbusrow =15;
}
else if (dpbus ==427){
var dpbuscol =18;
var dpbusrow =15;
}
else if (dpbus ==428){
var dpbuscol =19;
var dpbusrow =15;
}
else if (dpbus ==429){
var dpbuscol =20;
var dpbusrow =15;
}
else if (dpbus ==430){
var dpbuscol =21;
var dpbusrow =15;
}
else if (dpbus ==431){
var dpbuscol =22;
var dpbusrow =15;
}
else if (dpbus ==432){
var dpbuscol =23;
var dpbusrow =15;
}
else if (dpbus ==433){
var dpbuscol =24;
var dpbusrow =15;
}
else if (dpbus ==434){
var dpbuscol =25;
var dpbusrow =15;
}
else if (dpbus ==435){
var dpbuscol =26;
var dpbusrow =15;
}
else if (dpbus ==436){
var dpbuscol =27;
var dpbusrow =15;
}
else if (dpbus ==437){
var dpbuscol =28;
var dpbusrow =15;
}
else if (dpbus ==438){
var dpbuscol =30;
var dpbusrow =15;
}
else if (dpbus ==439){
var dpbuscol =31;
var dpbusrow =15;
}
else if (dpbus ==440){
var dpbuscol =32;
var dpbusrow =15;
}
else if (dpbus ==441){
var dpbuscol =33;
var dpbusrow =15;
}
else if (dpbus ==442){
var dpbuscol =34;
var dpbusrow =15;
}
else if (dpbus ==443){
var dpbuscol =35;
var dpbusrow =15;
}
else if (dpbus ==444){
var dpbuscol =36;
var dpbusrow =15;
}
else if (dpbus ==445){
var dpbuscol =37;
var dpbusrow =15;
}
else if (dpbus ==446){
var dpbuscol =38;
var dpbusrow =15;
}
else if (dpbus ==447){
var dpbuscol =39;
var dpbusrow =15;
}
else if (dpbus ==448){
var dpbuscol =40;
var dpbusrow =15;
}
else if (dpbus ==449){
var dpbuscol =41;
var dpbusrow =15;
}
else if (dpbus ==450){
var dpbuscol =42;
var dpbusrow =15;
}
else if (dpbus ==451){
var dpbuscol =43;
var dpbusrow =15;
}
else if (dpbus ==452){
var dpbuscol =44;
var dpbusrow =15;
}
else if (dpbus ==453){
var dpbuscol =45;
var dpbusrow =15;
}
else if (dpbus ==454){
var dpbuscol =46;
var dpbusrow =15;
}
else if (dpbus ==455){
var dpbuscol =47;
var dpbusrow =15;
}
else if (dpbus ==456){
var dpbuscol =48;
var dpbusrow =15;
}
else if (dpbus ==457){
var dpbuscol =5;
var dpbusrow =16;
}
else if (dpbus ==458){
var dpbuscol =6;
var dpbusrow =16;
}
else if (dpbus ==459){
var dpbuscol =7;
var dpbusrow =16;
}
else if (dpbus ==460){
var dpbuscol =8;
var dpbusrow =16;
}
else if (dpbus ==461){
var dpbuscol =9;
var dpbusrow =16;
}
else if (dpbus ==462){
var dpbuscol =10;
var dpbusrow =16;
}
else if (dpbus ==463){
var dpbuscol =11;
var dpbusrow =16;
}
else if (dpbus ==464){
var dpbuscol =12;
var dpbusrow =16;
}
else if (dpbus ==465){
var dpbuscol =13;
var dpbusrow =16;
}
else if (dpbus ==466){
var dpbuscol =14;
var dpbusrow =16;
}
else if (dpbus ==467){
var dpbuscol =15;
var dpbusrow =16;
}
else if (dpbus ==468){
var dpbuscol =16;
var dpbusrow =16;
}
else if (dpbus ==469){
var dpbuscol =17;
var dpbusrow =16;
}
else if (dpbus ==470){
var dpbuscol =18;
var dpbusrow =16;
}
else if (dpbus ==471){
var dpbuscol =19;
var dpbusrow =16;
}
else if (dpbus ==472){
var dpbuscol =20;
var dpbusrow =16;
}
else if (dpbus ==473){
var dpbuscol =21;
var dpbusrow =16;
}
else if (dpbus ==474){
var dpbuscol =22;
var dpbusrow =16;
}
else if (dpbus ==475){
var dpbuscol =23;
var dpbusrow =16;
}
else if (dpbus ==476){
var dpbuscol =24;
var dpbusrow =16;
}
else if (dpbus ==477){
var dpbuscol =25;
var dpbusrow =16;
}
else if (dpbus ==478){
var dpbuscol =26;
var dpbusrow =16;
}
else if (dpbus ==479){
var dpbuscol =27;
var dpbusrow =16;
}
else if (dpbus ==480){
var dpbuscol =28;
var dpbusrow =16;
}
else if (dpbus ==481){
var dpbuscol =30;
var dpbusrow =16;
}
else if (dpbus ==482){
var dpbuscol =31;
var dpbusrow =16;
}
else if (dpbus ==483){
var dpbuscol =32;
var dpbusrow =16;
}
else if (dpbus ==484){
var dpbuscol =33;
var dpbusrow =16;
}
else if (dpbus ==485){
var dpbuscol =34;
var dpbusrow =16;
}
else if (dpbus ==486){
var dpbuscol =35;
var dpbusrow =16;
}
else if (dpbus ==487){
var dpbuscol =37;
var dpbusrow =16;
}
else if (dpbus ==488){
var dpbuscol =38;
var dpbusrow =16;
}
else if (dpbus ==489){
var dpbuscol =39;
var dpbusrow =16;
}
else if (dpbus ==490){
var dpbuscol =40;
var dpbusrow =16;
}
else if (dpbus ==491){
var dpbuscol =41;
var dpbusrow =16;
}
else if (dpbus ==492){
var dpbuscol =42;
var dpbusrow =16;
}
else if (dpbus ==493){
var dpbuscol =43;
var dpbusrow =16;
}
else if (dpbus ==494){
var dpbuscol =44;
var dpbusrow =16;
}
else if (dpbus ==495){
var dpbuscol =45;
var dpbusrow =16;
}
else if (dpbus ==496){
var dpbuscol =46;
var dpbusrow =16;
}
else if (dpbus ==497){
var dpbuscol =47;
var dpbusrow =16;
}
else if (dpbus ==498){
var dpbuscol =5;
var dpbusrow =17;
}
else if (dpbus ==499){
var dpbuscol =6;
var dpbusrow =17;
}
else if (dpbus ==500){
var dpbuscol =7;
var dpbusrow =17;
}
else if (dpbus ==501){
var dpbuscol =8;
var dpbusrow =17;
}
else if (dpbus ==502){
var dpbuscol =9;
var dpbusrow =17;
}
else if (dpbus ==503){
var dpbuscol =10;
var dpbusrow =17;
}
else if (dpbus ==504){
var dpbuscol =12;
var dpbusrow =17;
}
else if (dpbus ==505){
var dpbuscol =13;
var dpbusrow =17;
}
else if (dpbus ==506){
var dpbuscol =14;
var dpbusrow =17;
}
else if (dpbus ==507){
var dpbuscol =15;
var dpbusrow =17;
}
else if (dpbus ==508){
var dpbuscol =16;
var dpbusrow =17;
}
else if (dpbus ==509){
var dpbuscol =17;
var dpbusrow =17;
}
else if (dpbus ==510){
var dpbuscol =18;
var dpbusrow =17;
}
else if (dpbus ==511){
var dpbuscol =19;
var dpbusrow =17;
}
else if (dpbus ==512){
var dpbuscol =20;
var dpbusrow =17;
}
else if (dpbus ==513){
var dpbuscol =21;
var dpbusrow =17;
}
else if (dpbus ==514){
var dpbuscol =22;
var dpbusrow =17;
}
else if (dpbus ==515){
var dpbuscol =23;
var dpbusrow =17;
}
else if (dpbus ==516){
var dpbuscol =25;
var dpbusrow =17;
}
else if (dpbus ==517){
var dpbuscol =26;
var dpbusrow =17;
}
else if (dpbus ==518){
var dpbuscol =27;
var dpbusrow =17;
}
else if (dpbus ==519){
var dpbuscol =28;
var dpbusrow =17;
}
else if (dpbus ==520){
var dpbuscol =30;
var dpbusrow =17;
}
else if (dpbus ==521){
var dpbuscol =31;
var dpbusrow =17;
}
else if (dpbus ==522){
var dpbuscol =32;
var dpbusrow =17;
}
else if (dpbus ==523){
var dpbuscol =33;
var dpbusrow =17;
}
else if (dpbus ==524){
var dpbuscol =34;
var dpbusrow =17;
}
else if (dpbus ==525){
var dpbuscol =35;
var dpbusrow =17;
}
else if (dpbus ==526){
var dpbuscol =36;
var dpbusrow =17;
}
else if (dpbus ==527){
var dpbuscol =37;
var dpbusrow =17;
}
else if (dpbus ==528){
var dpbuscol =38;
var dpbusrow =17;
}
else if (dpbus ==529){
var dpbuscol =39;
var dpbusrow =17;
}
else if (dpbus ==530){
var dpbuscol =4;
var dpbusrow =18;
}
else if (dpbus ==531){
var dpbuscol =5;
var dpbusrow =18;
}
else if (dpbus ==532){
var dpbuscol =6;
var dpbusrow =18;
}
else if (dpbus ==533){
var dpbuscol =7;
var dpbusrow =18;
}
else if (dpbus ==534){
var dpbuscol =9;
var dpbusrow =18;
}
else if (dpbus ==535){
var dpbuscol =10;
var dpbusrow =18;
}
else if (dpbus ==536){
var dpbuscol =11;
var dpbusrow =18;
}
else if (dpbus ==537){
var dpbuscol =12;
var dpbusrow =18;
}
else if (dpbus ==538){
var dpbuscol =13;
var dpbusrow =18;
}
else if (dpbus ==539){
var dpbuscol =14;
var dpbusrow =18;
}
else if (dpbus ==540){
var dpbuscol =15;
var dpbusrow =18;
}
else if (dpbus ==541){
var dpbuscol =16;
var dpbusrow =18;
}
else if (dpbus ==542){
var dpbuscol =18;
var dpbusrow =18;
}
else if (dpbus ==543){
var dpbuscol =19;
var dpbusrow =18;
}
else if (dpbus ==544){
var dpbuscol =21;
var dpbusrow =18;
}
else if (dpbus ==545){
var dpbuscol =23;
var dpbusrow =18;
}
else if (dpbus ==546){
var dpbuscol =24;
var dpbusrow =18;
}
else if (dpbus ==547){
var dpbuscol =25;
var dpbusrow =18;
}
else if (dpbus ==548){
var dpbuscol =26;
var dpbusrow =18;
}
else if (dpbus ==549){
var dpbuscol =27;
var dpbusrow =18;
}
else if (dpbus ==550){
var dpbuscol =31;
var dpbusrow =18;
}
else if (dpbus ==551){
var dpbuscol =32;
var dpbusrow =18;
}
else if (dpbus ==552){
var dpbuscol =33;
var dpbusrow =18;
}
else if (dpbus ==553){
var dpbuscol =35;
var dpbusrow =18;
}
else if (dpbus ==554){
var dpbuscol =36;
var dpbusrow =18;
}
else if (dpbus ==555){
var dpbuscol =37;
var dpbusrow =18;
}
else if (dpbus ==556){
var dpbuscol =38;
var dpbusrow =18;
}
else if (dpbus ==557){
var dpbuscol =39;
var dpbusrow =18;
}
else if (dpbus ==558){
var dpbuscol =4;
var dpbusrow =19;
}
else if (dpbus ==559){
var dpbuscol =5;
var dpbusrow =19;
}
else if (dpbus ==560){
var dpbuscol =6;
var dpbusrow =19;
}
else if (dpbus ==561){
var dpbuscol =7;
var dpbusrow =19;
}
else if (dpbus ==562){
var dpbuscol =8;
var dpbusrow =19;
}
else if (dpbus ==563){
var dpbuscol =9;
var dpbusrow =19;
}
else if (dpbus ==564){
var dpbuscol =10;
var dpbusrow =19;
}
else if (dpbus ==565){
var dpbuscol =11;
var dpbusrow =19;
}
else if (dpbus ==566){
var dpbuscol =12;
var dpbusrow =19;
}
else if (dpbus ==567){
var dpbuscol =13;
var dpbusrow =19;
}
else if (dpbus ==568){
var dpbuscol =14;
var dpbusrow =19;
}
else if (dpbus ==569){
var dpbuscol =15;
var dpbusrow =19;
}
else if (dpbus ==570){
var dpbuscol =16;
var dpbusrow =19;
}
else if (dpbus ==571){
var dpbuscol =17;
var dpbusrow =19;
}
else if (dpbus ==572){
var dpbuscol =18;
var dpbusrow =19;
}
else if (dpbus ==573){
var dpbuscol =19;
var dpbusrow =19;
}
else if (dpbus ==574){
var dpbuscol =20;
var dpbusrow =19;
}
else if (dpbus ==575){
var dpbuscol =21;
var dpbusrow =19;
}
else if (dpbus ==576){
var dpbuscol =22;
var dpbusrow =19;
}
else if (dpbus ==577){
var dpbuscol =23;
var dpbusrow =19;
}
else if (dpbus ==578){
var dpbuscol =24;
var dpbusrow =19;
}
else if (dpbus ==579){
var dpbuscol =25;
var dpbusrow =19;
}
else if (dpbus ==580){
var dpbuscol =26;
var dpbusrow =19;
}
else if (dpbus ==581){
var dpbuscol =27;
var dpbusrow =19;
}
else if (dpbus ==582){
var dpbuscol =31;
var dpbusrow =19;
}
else if (dpbus ==583){
var dpbuscol =32;
var dpbusrow =19;
}
else if (dpbus ==584){
var dpbuscol =33;
var dpbusrow =19;
}
else if (dpbus ==585){
var dpbuscol =34;
var dpbusrow =19;
}
else if (dpbus ==586){
var dpbuscol =35;
var dpbusrow =19;
}
else if (dpbus ==587){
var dpbuscol =36;
var dpbusrow =19;
}
else if (dpbus ==588){
var dpbuscol =37;
var dpbusrow =19;
}
else if (dpbus ==589){
var dpbuscol =38;
var dpbusrow =19;
}
else if (dpbus ==590){
var dpbuscol =4;
var dpbusrow =20;
}
else if (dpbus ==591){
var dpbuscol =5;
var dpbusrow =20;
}
else if (dpbus ==592){
var dpbuscol =6;
var dpbusrow =20;
}
else if (dpbus ==593){
var dpbuscol =7;
var dpbusrow =20;
}
else if (dpbus ==594){
var dpbuscol =8;
var dpbusrow =20;
}
else if (dpbus ==595){
var dpbuscol =9;
var dpbusrow =20;
}
else if (dpbus ==596){
var dpbuscol =10;
var dpbusrow =20;
}
else if (dpbus ==597){
var dpbuscol =11;
var dpbusrow =20;
}
else if (dpbus ==598){
var dpbuscol =12;
var dpbusrow =20;
}
else if (dpbus ==599){
var dpbuscol =13;
var dpbusrow =20;
}
else if (dpbus ==600){
var dpbuscol =14;
var dpbusrow =20;
}
else if (dpbus ==601){
var dpbuscol =15;
var dpbusrow =20;
}
else if (dpbus ==602){
var dpbuscol =16;
var dpbusrow =20;
}
else if (dpbus ==603){
var dpbuscol =17;
var dpbusrow =20;
}
else if (dpbus ==604){
var dpbuscol =18;
var dpbusrow =20;
}
else if (dpbus ==605){
var dpbuscol =19;
var dpbusrow =20;
}
else if (dpbus ==606){
var dpbuscol =23;
var dpbusrow =20;
}
else if (dpbus ==607){
var dpbuscol =24;
var dpbusrow =20;
}
else if (dpbus ==608){
var dpbuscol =25;
var dpbusrow =20;
}
else if (dpbus ==609){
var dpbuscol =26;
var dpbusrow =20;
}
else if (dpbus ==610){
var dpbuscol =27;
var dpbusrow =20;
}
else if (dpbus ==611){
var dpbuscol =28;
var dpbusrow =20;
}
else if (dpbus ==612){
var dpbuscol =29;
var dpbusrow =20;
}
else if (dpbus ==613){
var dpbuscol =30;
var dpbusrow =20;
}
else if (dpbus ==614){
var dpbuscol =31;
var dpbusrow =20;
}
else if (dpbus ==615){
var dpbuscol =32;
var dpbusrow =20;
}
else if (dpbus ==616){
var dpbuscol =33;
var dpbusrow =20;
}
else if (dpbus ==617){
var dpbuscol =34;
var dpbusrow =20;
}
else if (dpbus ==618){
var dpbuscol =35;
var dpbusrow =20;
}
else if (dpbus ==619){
var dpbuscol =36;
var dpbusrow =20;
}
else if (dpbus ==620){
var dpbuscol =37;
var dpbusrow =20;
}
else if (dpbus ==621){
var dpbuscol =38;
var dpbusrow =20;
}
else if (dpbus ==622){
var dpbuscol =4;
var dpbusrow =21;
}
else if (dpbus ==623){
var dpbuscol =5;
var dpbusrow =21;
}
else if (dpbus ==624){
var dpbuscol =6;
var dpbusrow =21;
}
else if (dpbus ==625){
var dpbuscol =8;
var dpbusrow =21;
}
else if (dpbus ==626){
var dpbuscol =10;
var dpbusrow =21;
}
else if (dpbus ==627){
var dpbuscol =11;
var dpbusrow =21;
}
else if (dpbus ==628){
var dpbuscol =12;
var dpbusrow =21;
}
else if (dpbus ==629){
var dpbuscol =16;
var dpbusrow =21;
}
else if (dpbus ==630){
var dpbuscol =17;
var dpbusrow =21;
}
else if (dpbus ==631){
var dpbuscol =18;
var dpbusrow =21;
}
else if (dpbus ==632){
var dpbuscol =19;
var dpbusrow =21;
}
else if (dpbus ==633){
var dpbuscol =21;
var dpbusrow =21;
}
else if (dpbus ==634){
var dpbuscol =22;
var dpbusrow =21;
}
else if (dpbus ==635){
var dpbuscol =24;
var dpbusrow =21;
}
else if (dpbus ==636){
var dpbuscol =25;
var dpbusrow =21;
}
else if (dpbus ==637){
var dpbuscol =26;
var dpbusrow =21;
}
else if (dpbus ==638){
var dpbuscol =27;
var dpbusrow =21;
}
else if (dpbus ==639){
var dpbuscol =28;
var dpbusrow =21;
}
else if (dpbus ==640){
var dpbuscol =29;
var dpbusrow =21;
}
else if (dpbus ==641){
var dpbuscol =30;
var dpbusrow =21;
}
else if (dpbus ==642){
var dpbuscol =31;
var dpbusrow =21;
}
else if (dpbus ==643){
var dpbuscol =32;
var dpbusrow =21;
}
else if (dpbus ==644){
var dpbuscol =33;
var dpbusrow =21;
}
else if (dpbus ==645){
var dpbuscol =34;
var dpbusrow =21;
}
else if (dpbus ==646){
var dpbuscol =35;
var dpbusrow =21;
}
else if (dpbus ==647){
var dpbuscol =36;
var dpbusrow =21;
}
else if (dpbus ==648){
var dpbuscol =37;
var dpbusrow =21;
}
else if (dpbus ==649){
var dpbuscol =38;
var dpbusrow =21;
}
else if (dpbus ==650){
var dpbuscol =39;
var dpbusrow =21;
}
else if (dpbus ==651){
var dpbuscol =5;
var dpbusrow =22;
}
else if (dpbus ==652){
var dpbuscol =6;
var dpbusrow =22;
}
else if (dpbus ==653){
var dpbuscol =7;
var dpbusrow =22;
}
else if (dpbus ==654){
var dpbuscol =8;
var dpbusrow =22;
}
else if (dpbus ==655){
var dpbuscol =9;
var dpbusrow =22;
}
else if (dpbus ==656){
var dpbuscol =10;
var dpbusrow =22;
}
else if (dpbus ==657){
var dpbuscol =12;
var dpbusrow =22;
}
else if (dpbus ==658){
var dpbuscol =13;
var dpbusrow =22;
}
else if (dpbus ==659){
var dpbuscol =16;
var dpbusrow =22;
}
else if (dpbus ==660){
var dpbuscol =17;
var dpbusrow =22;
}
else if (dpbus ==661){
var dpbuscol =18;
var dpbusrow =22;
}
else if (dpbus ==662){
var dpbuscol =19;
var dpbusrow =22;
}
else if (dpbus ==663){
var dpbuscol =20;
var dpbusrow =22;
}
else if (dpbus ==664){
var dpbuscol =21;
var dpbusrow =22;
}
else if (dpbus ==665){
var dpbuscol =22;
var dpbusrow =22;
}
else if (dpbus ==666){
var dpbuscol =23;
var dpbusrow =22;
}
else if (dpbus ==667){
var dpbuscol =24;
var dpbusrow =22;
}
else if (dpbus ==668){
var dpbuscol =25;
var dpbusrow =22;
}
else if (dpbus ==669){
var dpbuscol =26;
var dpbusrow =22;
}
else if (dpbus ==670){
var dpbuscol =27;
var dpbusrow =22;
}
else if (dpbus ==671){
var dpbuscol =28;
var dpbusrow =22;
}
else if (dpbus ==672){
var dpbuscol =30;
var dpbusrow =22;
}
else if (dpbus ==673){
var dpbuscol =31;
var dpbusrow =22;
}
else if (dpbus ==674){
var dpbuscol =32;
var dpbusrow =22;
}
else if (dpbus ==675){
var dpbuscol =33;
var dpbusrow =22;
}
else if (dpbus ==676){
var dpbuscol =34;
var dpbusrow =22;
}
else if (dpbus ==677){
var dpbuscol =35;
var dpbusrow =22;
}
else if (dpbus ==678){
var dpbuscol =36;
var dpbusrow =22;
}
else if (dpbus ==679){
var dpbuscol =37;
var dpbusrow =22;
}
else if (dpbus ==680){
var dpbuscol =38;
var dpbusrow =22;
}
else if (dpbus ==681){
var dpbuscol =39;
var dpbusrow =22;
}
else if (dpbus ==682){
var dpbuscol =40;
var dpbusrow =22;
}
else if (dpbus ==683){
var dpbuscol =5;
var dpbusrow =23;
}
else if (dpbus ==684){
var dpbuscol =6;
var dpbusrow =23;
}
else if (dpbus ==685){
var dpbuscol =7;
var dpbusrow =23;
}
else if (dpbus ==686){
var dpbuscol =8;
var dpbusrow =23;
}
else if (dpbus ==687){
var dpbuscol =9;
var dpbusrow =23;
}
else if (dpbus ==688){
var dpbuscol =10;
var dpbusrow =23;
}
else if (dpbus ==689){
var dpbuscol =11;
var dpbusrow =23;
}
else if (dpbus ==690){
var dpbuscol =12;
var dpbusrow =23;
}
else if (dpbus ==691){
var dpbuscol =13;
var dpbusrow =23;
}
else if (dpbus ==692){
var dpbuscol =17;
var dpbusrow =23;
}
else if (dpbus ==693){
var dpbuscol =18;
var dpbusrow =23;
}
else if (dpbus ==694){
var dpbuscol =19;
var dpbusrow =23;
}
else if (dpbus ==695){
var dpbuscol =20;
var dpbusrow =23;
}
else if (dpbus ==696){
var dpbuscol =21;
var dpbusrow =23;
}
else if (dpbus ==697){
var dpbuscol =22;
var dpbusrow =23;
}
else if (dpbus ==698){
var dpbuscol =23;
var dpbusrow =23;
}
else if (dpbus ==699){
var dpbuscol =24;
var dpbusrow =23;
}
else if (dpbus ==700){
var dpbuscol =25;
var dpbusrow =23;
}
else if (dpbus ==701){
var dpbuscol =26;
var dpbusrow =23;
}
else if (dpbus ==702){
var dpbuscol =27;
var dpbusrow =23;
}
else if (dpbus ==703){
var dpbuscol =28;
var dpbusrow =23;
}
else if (dpbus ==704){
var dpbuscol =29;
var dpbusrow =23;
}
else if (dpbus ==705){
var dpbuscol =30;
var dpbusrow =23;
}
else if (dpbus ==706){
var dpbuscol =31;
var dpbusrow =23;
}
else if (dpbus ==707){
var dpbuscol =33;
var dpbusrow =23;
}
else if (dpbus ==708){
var dpbuscol =34;
var dpbusrow =23;
}
else if (dpbus ==709){
var dpbuscol =35;
var dpbusrow =23;
}
else if (dpbus ==710){
var dpbuscol =36;
var dpbusrow =23;
}
else if (dpbus ==711){
var dpbuscol =37;
var dpbusrow =23;
}
else if (dpbus ==712){
var dpbuscol =38;
var dpbusrow =23;
}
else if (dpbus ==713){
var dpbuscol =39;
var dpbusrow =23;
}
else if (dpbus ==714){
var dpbuscol =40;
var dpbusrow =23;
}
else if (dpbus ==715){
var dpbuscol =41;
var dpbusrow =23;
}
else if (dpbus ==716){
var dpbuscol =8;
var dpbusrow =24;
}
else if (dpbus ==717){
var dpbuscol =9;
var dpbusrow =24;
}
else if (dpbus ==718){
var dpbuscol =10;
var dpbusrow =24;
}
else if (dpbus ==719){
var dpbuscol =11;
var dpbusrow =24;
}
else if (dpbus ==720){
var dpbuscol =12;
var dpbusrow =24;
}
else if (dpbus ==721){
var dpbuscol =17;
var dpbusrow =24;
}
else if (dpbus ==722){
var dpbuscol =18;
var dpbusrow =24;
}
else if (dpbus ==723){
var dpbuscol =19;
var dpbusrow =24;
}
else if (dpbus ==724){
var dpbuscol =20;
var dpbusrow =24;
}
else if (dpbus ==725){
var dpbuscol =21;
var dpbusrow =24;
}
else if (dpbus ==726){
var dpbuscol =22;
var dpbusrow =24;
}
else if (dpbus ==727){
var dpbuscol =23;
var dpbusrow =24;
}
else if (dpbus ==728){
var dpbuscol =24;
var dpbusrow =24;
}
else if (dpbus ==729){
var dpbuscol =25;
var dpbusrow =24;
}
else if (dpbus ==730){
var dpbuscol =26;
var dpbusrow =24;
}
else if (dpbus ==731){
var dpbuscol =27;
var dpbusrow =24;
}
else if (dpbus ==732){
var dpbuscol =28;
var dpbusrow =24;
}
else if (dpbus ==733){
var dpbuscol =29;
var dpbusrow =24;
}
else if (dpbus ==734){
var dpbuscol =30;
var dpbusrow =24;
}
else if (dpbus ==735){
var dpbuscol =31;
var dpbusrow =24;
}
else if (dpbus ==736){
var dpbuscol =32;
var dpbusrow =24;
}
else if (dpbus ==737){
var dpbuscol =33;
var dpbusrow =24;
}
else if (dpbus ==738){
var dpbuscol =34;
var dpbusrow =24;
}
else if (dpbus ==739){
var dpbuscol =35;
var dpbusrow =24;
}
else if (dpbus ==740){
var dpbuscol =36;
var dpbusrow =24;
}
else if (dpbus ==741){
var dpbuscol =37;
var dpbusrow =24;
}
else if (dpbus ==742){
var dpbuscol =38;
var dpbusrow =24;
}
else if (dpbus ==743){
var dpbuscol =39;
var dpbusrow =24;
}
else if (dpbus ==744){
var dpbuscol =40;
var dpbusrow =24;
}
else if (dpbus ==745){
var dpbuscol =41;
var dpbusrow =24;
}
else if (dpbus ==746){
var dpbuscol =42;
var dpbusrow =24;
}
else if (dpbus ==747){
var dpbuscol =19;
var dpbusrow =25;
}
else if (dpbus ==748){
var dpbuscol =20;
var dpbusrow =25;
}
else if (dpbus ==749){
var dpbuscol =21;
var dpbusrow =25;
}
else if (dpbus ==750){
var dpbuscol =22;
var dpbusrow =25;
}
else if (dpbus ==751){
var dpbuscol =24;
var dpbusrow =25;
}
else if (dpbus ==752){
var dpbuscol =26;
var dpbusrow =25;
}
else if (dpbus ==753){
var dpbuscol =27;
var dpbusrow =25;
}
else if (dpbus ==754){
var dpbuscol =28;
var dpbusrow =25;
}
else if (dpbus ==755){
var dpbuscol =29;
var dpbusrow =25;
}
else if (dpbus ==756){
var dpbuscol =30;
var dpbusrow =25;
}
else if (dpbus ==757){
var dpbuscol =31;
var dpbusrow =25;
}
else if (dpbus ==758){
var dpbuscol =32;
var dpbusrow =25;
}
else if (dpbus ==759){
var dpbuscol =33;
var dpbusrow =25;
}
else if (dpbus ==760){
var dpbuscol =34;
var dpbusrow =25;
}
else if (dpbus ==761){
var dpbuscol =36;
var dpbusrow =25;
}
else if (dpbus ==762){
var dpbuscol =37;
var dpbusrow =25;
}
else if (dpbus ==763){
var dpbuscol =38;
var dpbusrow =25;
}
else if (dpbus ==764){
var dpbuscol =39;
var dpbusrow =25;
}
else if (dpbus ==765){
var dpbuscol =40;
var dpbusrow =25;
}
else if (dpbus ==766){
var dpbuscol =41;
var dpbusrow =25;
}
else if (dpbus ==767){
var dpbuscol =42;
var dpbusrow =25;
}
else if (dpbus ==768){
var dpbuscol =43;
var dpbusrow =25;
}
else if (dpbus ==769){
var dpbuscol =44;
var dpbusrow =25;
}
else if (dpbus ==770){
var dpbuscol =45;
var dpbusrow =25;
}
else if (dpbus ==771){
var dpbuscol =46;
var dpbusrow =25;
}
else if (dpbus ==772){
var dpbuscol =47;
var dpbusrow =25;
}
else if (dpbus ==773){
var dpbuscol =48;
var dpbusrow =25;
}
else if (dpbus ==774){
var dpbuscol =49;
var dpbusrow =25;
}
else if (dpbus ==775){
var dpbuscol =20;
var dpbusrow =26;
}
else if (dpbus ==776){
var dpbuscol =21;
var dpbusrow =26;
}
else if (dpbus ==777){
var dpbuscol =22;
var dpbusrow =26;
}
else if (dpbus ==778){
var dpbuscol =24;
var dpbusrow =26;
}
else if (dpbus ==779){
var dpbuscol =25;
var dpbusrow =26;
}
else if (dpbus ==780){
var dpbuscol =26;
var dpbusrow =26;
}
else if (dpbus ==781){
var dpbuscol =27;
var dpbusrow =26;
}
else if (dpbus ==782){
var dpbuscol =28;
var dpbusrow =26;
}
else if (dpbus ==783){
var dpbuscol =29;
var dpbusrow =26;
}
else if (dpbus ==784){
var dpbuscol =30;
var dpbusrow =26;
}
else if (dpbus ==785){
var dpbuscol =31;
var dpbusrow =26;
}
else if (dpbus ==786){
var dpbuscol =33;
var dpbusrow =26;
}
else if (dpbus ==787){
var dpbuscol =34;
var dpbusrow =26;
}
else if (dpbus ==788){
var dpbuscol =35;
var dpbusrow =26;
}
else if (dpbus ==789){
var dpbuscol =36;
var dpbusrow =26;
}
else if (dpbus ==790){
var dpbuscol =37;
var dpbusrow =26;
}
else if (dpbus ==791){
var dpbuscol =39;
var dpbusrow =26;
}
else if (dpbus ==792){
var dpbuscol =40;
var dpbusrow =26;
}
else if (dpbus ==793){
var dpbuscol =41;
var dpbusrow =26;
}
else if (dpbus ==794){
var dpbuscol =42;
var dpbusrow =26;
}
else if (dpbus ==795){
var dpbuscol =43;
var dpbusrow =26;
}
else if (dpbus ==796){
var dpbuscol =44;
var dpbusrow =26;
}
else if (dpbus ==797){
var dpbuscol =45;
var dpbusrow =26;
}
else if (dpbus ==798){
var dpbuscol =46;
var dpbusrow =26;
}
else if (dpbus ==799){
var dpbuscol =47;
var dpbusrow =26;
}
else if (dpbus ==800){
var dpbuscol =48;
var dpbusrow =26;
}
else if (dpbus ==801){
var dpbuscol =49;
var dpbusrow =26;
}
else if (dpbus ==802){
var dpbuscol =50;
var dpbusrow =26;
}
else if (dpbus ==803){
var dpbuscol =18;
var dpbusrow =27;
}
else if (dpbus ==804){
var dpbuscol =19;
var dpbusrow =27;
}
else if (dpbus ==805){
var dpbuscol =20;
var dpbusrow =27;
}
else if (dpbus ==806){
var dpbuscol =21;
var dpbusrow =27;
}
else if (dpbus ==807){
var dpbuscol =22;
var dpbusrow =27;
}
else if (dpbus ==808){
var dpbuscol =23;
var dpbusrow =27;
}
else if (dpbus ==809){
var dpbuscol =24;
var dpbusrow =27;
}
else if (dpbus ==810){
var dpbuscol =25;
var dpbusrow =27;
}
else if (dpbus ==811){
var dpbuscol =27;
var dpbusrow =27;
}
else if (dpbus ==812){
var dpbuscol =28;
var dpbusrow =27;
}
else if (dpbus ==813){
var dpbuscol =29;
var dpbusrow =27;
}
else if (dpbus ==814){
var dpbuscol =30;
var dpbusrow =27;
}
else if (dpbus ==815){
var dpbuscol =31;
var dpbusrow =27;
}
else if (dpbus ==816){
var dpbuscol =32;
var dpbusrow =27;
}
else if (dpbus ==817){
var dpbuscol =33;
var dpbusrow =27;
}
else if (dpbus ==818){
var dpbuscol =34;
var dpbusrow =27;
}
else if (dpbus ==819){
var dpbuscol =35;
var dpbusrow =27;
}
else if (dpbus ==820){
var dpbuscol =36;
var dpbusrow =27;
}
else if (dpbus ==821){
var dpbuscol =37;
var dpbusrow =27;
}
else if (dpbus ==822){
var dpbuscol =38;
var dpbusrow =27;
}
else if (dpbus ==823){
var dpbuscol =39;
var dpbusrow =27;
}
else if (dpbus ==824){
var dpbuscol =40;
var dpbusrow =27;
}
else if (dpbus ==825){
var dpbuscol =41;
var dpbusrow =27;
}
else if (dpbus ==826){
var dpbuscol =42;
var dpbusrow =27;
}
else if (dpbus ==827){
var dpbuscol =43;
var dpbusrow =27;
}
else if (dpbus ==828){
var dpbuscol =44;
var dpbusrow =27;
}
else if (dpbus ==829){
var dpbuscol =45;
var dpbusrow =27;
}
else if (dpbus ==830){
var dpbuscol =47;
var dpbusrow =27;
}
else if (dpbus ==831){
var dpbuscol =48;
var dpbusrow =27;
}
else if (dpbus ==832){
var dpbuscol =49;
var dpbusrow =27;
}
else if (dpbus ==833){
var dpbuscol =50;
var dpbusrow =27;
}
else if (dpbus ==834){
var dpbuscol =51;
var dpbusrow =27;
}
else if (dpbus ==835){
var dpbuscol =52;
var dpbusrow =27;
}
else if (dpbus ==836){
var dpbuscol =16;
var dpbusrow =28;
}
else if (dpbus ==837){
var dpbuscol =17;
var dpbusrow =28;
}
else if (dpbus ==838){
var dpbuscol =18;
var dpbusrow =28;
}
else if (dpbus ==839){
var dpbuscol =19;
var dpbusrow =28;
}
else if (dpbus ==840){
var dpbuscol =20;
var dpbusrow =28;
}
else if (dpbus ==841){
var dpbuscol =21;
var dpbusrow =28;
}
else if (dpbus ==842){
var dpbuscol =22;
var dpbusrow =28;
}
else if (dpbus ==843){
var dpbuscol =23;
var dpbusrow =28;
}
else if (dpbus ==844){
var dpbuscol =24;
var dpbusrow =28;
}
else if (dpbus ==845){
var dpbuscol =25;
var dpbusrow =28;
}
else if (dpbus ==846){
var dpbuscol =26;
var dpbusrow =28;
}
else if (dpbus ==847){
var dpbuscol =27;
var dpbusrow =28;
}
else if (dpbus ==848){
var dpbuscol =29;
var dpbusrow =28;
}
else if (dpbus ==849){
var dpbuscol =30;
var dpbusrow =28;
}
else if (dpbus ==850){
var dpbuscol =31;
var dpbusrow =28;
}
else if (dpbus ==851){
var dpbuscol =32;
var dpbusrow =28;
}
else if (dpbus ==852){
var dpbuscol =33;
var dpbusrow =28;
}
else if (dpbus ==853){
var dpbuscol =34;
var dpbusrow =28;
}
else if (dpbus ==854){
var dpbuscol =35;
var dpbusrow =28;
}
else if (dpbus ==855){
var dpbuscol =36;
var dpbusrow =28;
}
else if (dpbus ==856){
var dpbuscol =37;
var dpbusrow =28;
}
else if (dpbus ==857){
var dpbuscol =38;
var dpbusrow =28;
}
else if (dpbus ==858){
var dpbuscol =39;
var dpbusrow =28;
}
else if (dpbus ==859){
var dpbuscol =40;
var dpbusrow =28;
}
else if (dpbus ==860){
var dpbuscol =41;
var dpbusrow =28;
}
else if (dpbus ==861){
var dpbuscol =43;
var dpbusrow =28;
}
else if (dpbus ==862){
var dpbuscol =44;
var dpbusrow =28;
}
else if (dpbus ==863){
var dpbuscol =45;
var dpbusrow =28;
}
else if (dpbus ==864){
var dpbuscol =46;
var dpbusrow =28;
}
else if (dpbus ==865){
var dpbuscol =47;
var dpbusrow =28;
}
else if (dpbus ==866){
var dpbuscol =48;
var dpbusrow =28;
}
else if (dpbus ==867){
var dpbuscol =49;
var dpbusrow =28;
}
else if (dpbus ==868){
var dpbuscol =50;
var dpbusrow =28;
}
else if (dpbus ==869){
var dpbuscol =51;
var dpbusrow =28;
}
else if (dpbus ==870){
var dpbuscol =52;
var dpbusrow =28;
}
else if (dpbus ==871){
var dpbuscol =53;
var dpbusrow =28;
}
else if (dpbus ==872){
var dpbuscol =12;
var dpbusrow =29;
}
else if (dpbus ==873){
var dpbuscol =16;
var dpbusrow =29;
}
else if (dpbus ==874){
var dpbuscol =17;
var dpbusrow =29;
}
else if (dpbus ==875){
var dpbuscol =18;
var dpbusrow =29;
}
else if (dpbus ==876){
var dpbuscol =20;
var dpbusrow =29;
}
else if (dpbus ==877){
var dpbuscol =21;
var dpbusrow =29;
}
else if (dpbus ==878){
var dpbuscol =22;
var dpbusrow =29;
}
else if (dpbus ==879){
var dpbuscol =23;
var dpbusrow =29;
}
else if (dpbus ==880){
var dpbuscol =24;
var dpbusrow =29;
}
else if (dpbus ==881){
var dpbuscol =25;
var dpbusrow =29;
}
else if (dpbus ==882){
var dpbuscol =27;
var dpbusrow =29;
}
else if (dpbus ==883){
var dpbuscol =28;
var dpbusrow =29;
}
else if (dpbus ==884){
var dpbuscol =29;
var dpbusrow =29;
}
else if (dpbus ==885){
var dpbuscol =30;
var dpbusrow =29;
}
else if (dpbus ==886){
var dpbuscol =31;
var dpbusrow =29;
}
else if (dpbus ==887){
var dpbuscol =32;
var dpbusrow =29;
}
else if (dpbus ==888){
var dpbuscol =33;
var dpbusrow =29;
}
else if (dpbus ==889){
var dpbuscol =34;
var dpbusrow =29;
}
else if (dpbus ==890){
var dpbuscol =35;
var dpbusrow =29;
}
else if (dpbus ==891){
var dpbuscol =36;
var dpbusrow =29;
}
else if (dpbus ==892){
var dpbuscol =37;
var dpbusrow =29;
}
else if (dpbus ==893){
var dpbuscol =38;
var dpbusrow =29;
}
else if (dpbus ==894){
var dpbuscol =39;
var dpbusrow =29;
}
else if (dpbus ==895){
var dpbuscol =40;
var dpbusrow =29;
}
else if (dpbus ==896){
var dpbuscol =41;
var dpbusrow =29;
}
else if (dpbus ==897){
var dpbuscol =42;
var dpbusrow =29;
}
else if (dpbus ==898){
var dpbuscol =43;
var dpbusrow =29;
}
else if (dpbus ==899){
var dpbuscol =44;
var dpbusrow =29;
}
else if (dpbus ==900){
var dpbuscol =45;
var dpbusrow =29;
}
else if (dpbus ==901){
var dpbuscol =46;
var dpbusrow =29;
}
else if (dpbus ==902){
var dpbuscol =47;
var dpbusrow =29;
}
else if (dpbus ==903){
var dpbuscol =48;
var dpbusrow =29;
}
else if (dpbus ==904){
var dpbuscol =49;
var dpbusrow =29;
}
else if (dpbus ==905){
var dpbuscol =50;
var dpbusrow =29;
}
else if (dpbus ==906){
var dpbuscol =51;
var dpbusrow =29;
}
else if (dpbus ==907){
var dpbuscol =52;
var dpbusrow =29;
}
else if (dpbus ==908){
var dpbuscol =53;
var dpbusrow =29;
}
else if (dpbus ==909){
var dpbuscol =12;
var dpbusrow =30;
}
else if (dpbus ==910){
var dpbuscol =13;
var dpbusrow =30;
}
else if (dpbus ==911){
var dpbuscol =16;
var dpbusrow =30;
}
else if (dpbus ==912){
var dpbuscol =17;
var dpbusrow =30;
}
else if (dpbus ==913){
var dpbuscol =18;
var dpbusrow =30;
}
else if (dpbus ==914){
var dpbuscol =19;
var dpbusrow =30;
}
else if (dpbus ==915){
var dpbuscol =20;
var dpbusrow =30;
}
else if (dpbus ==916){
var dpbuscol =21;
var dpbusrow =30;
}
else if (dpbus ==917){
var dpbuscol =22;
var dpbusrow =30;
}
else if (dpbus ==918){
var dpbuscol =23;
var dpbusrow =30;
}
else if (dpbus ==919){
var dpbuscol =24;
var dpbusrow =30;
}
else if (dpbus ==920){
var dpbuscol =25;
var dpbusrow =30;
}
else if (dpbus ==921){
var dpbuscol =26;
var dpbusrow =30;
}
else if (dpbus ==922){
var dpbuscol =27;
var dpbusrow =30;
}
else if (dpbus ==923){
var dpbuscol =28;
var dpbusrow =30;
}
else if (dpbus ==924){
var dpbuscol =30;
var dpbusrow =30;
}
else if (dpbus ==925){
var dpbuscol =33;
var dpbusrow =30;
}
else if (dpbus ==926){
var dpbuscol =34;
var dpbusrow =30;
}
else if (dpbus ==927){
var dpbuscol =36;
var dpbusrow =30;
}
else if (dpbus ==928){
var dpbuscol =37;
var dpbusrow =30;
}
else if (dpbus ==929){
var dpbuscol =38;
var dpbusrow =30;
}
else if (dpbus ==930){
var dpbuscol =39;
var dpbusrow =30;
}
else if (dpbus ==931){
var dpbuscol =40;
var dpbusrow =30;
}
else if (dpbus ==932){
var dpbuscol =41;
var dpbusrow =30;
}
else if (dpbus ==933){
var dpbuscol =42;
var dpbusrow =30;
}
else if (dpbus ==934){
var dpbuscol =43;
var dpbusrow =30;
}
else if (dpbus ==935){
var dpbuscol =44;
var dpbusrow =30;
}
else if (dpbus ==936){
var dpbuscol =45;
var dpbusrow =30;
}
else if (dpbus ==937){
var dpbuscol =46;
var dpbusrow =30;
}
else if (dpbus ==938){
var dpbuscol =47;
var dpbusrow =30;
}
else if (dpbus ==939){
var dpbuscol =48;
var dpbusrow =30;
}
else if (dpbus ==940){
var dpbuscol =50;
var dpbusrow =30;
}
else if (dpbus ==941){
var dpbuscol =51;
var dpbusrow =30;
}
else if (dpbus ==942){
var dpbuscol =52;
var dpbusrow =30;
}
else if (dpbus ==943){
var dpbuscol =53;
var dpbusrow =30;
}
else if (dpbus ==944){
var dpbuscol =13;
var dpbusrow =31;
}
else if (dpbus ==945){
var dpbuscol =14;
var dpbusrow =31;
}
else if (dpbus ==946){
var dpbuscol =15;
var dpbusrow =31;
}
else if (dpbus ==947){
var dpbuscol =16;
var dpbusrow =31;
}
else if (dpbus ==948){
var dpbuscol =17;
var dpbusrow =31;
}
else if (dpbus ==949){
var dpbuscol =18;
var dpbusrow =31;
}
else if (dpbus ==950){
var dpbuscol =19;
var dpbusrow =31;
}
else if (dpbus ==951){
var dpbuscol =20;
var dpbusrow =31;
}
else if (dpbus ==952){
var dpbuscol =21;
var dpbusrow =31;
}
else if (dpbus ==953){
var dpbuscol =22;
var dpbusrow =31;
}
else if (dpbus ==954){
var dpbuscol =23;
var dpbusrow =31;
}
else if (dpbus ==955){
var dpbuscol =24;
var dpbusrow =31;
}
else if (dpbus ==956){
var dpbuscol =25;
var dpbusrow =31;
}
else if (dpbus ==957){
var dpbuscol =26;
var dpbusrow =31;
}
else if (dpbus ==958){
var dpbuscol =27;
var dpbusrow =31;
}
else if (dpbus ==959){
var dpbuscol =28;
var dpbusrow =31;
}
else if (dpbus ==960){
var dpbuscol =29;
var dpbusrow =31;
}
else if (dpbus ==961){
var dpbuscol =30;
var dpbusrow =31;
}
else if (dpbus ==962){
var dpbuscol =31;
var dpbusrow =31;
}
else if (dpbus ==963){
var dpbuscol =33;
var dpbusrow =31;
}
else if (dpbus ==964){
var dpbuscol =35;
var dpbusrow =31;
}
else if (dpbus ==965){
var dpbuscol =36;
var dpbusrow =31;
}
else if (dpbus ==966){
var dpbuscol =37;
var dpbusrow =31;
}
else if (dpbus ==967){
var dpbuscol =38;
var dpbusrow =31;
}
else if (dpbus ==968){
var dpbuscol =39;
var dpbusrow =31;
}
else if (dpbus ==969){
var dpbuscol =40;
var dpbusrow =31;
}
else if (dpbus ==970){
var dpbuscol =41;
var dpbusrow =31;
}
else if (dpbus ==971){
var dpbuscol =42;
var dpbusrow =31;
}
else if (dpbus ==972){
var dpbuscol =43;
var dpbusrow =31;
}
else if (dpbus ==973){
var dpbuscol =44;
var dpbusrow =31;
}
else if (dpbus ==974){
var dpbuscol =45;
var dpbusrow =31;
}
else if (dpbus ==975){
var dpbuscol =46;
var dpbusrow =31;
}
else if (dpbus ==976){
var dpbuscol =47;
var dpbusrow =31;
}
else if (dpbus ==977){
var dpbuscol =48;
var dpbusrow =31;
}
else if (dpbus ==978){
var dpbuscol =49;
var dpbusrow =31;
}
else if (dpbus ==979){
var dpbuscol =50;
var dpbusrow =31;
}
else if (dpbus ==980){
var dpbuscol =51;
var dpbusrow =31;
}
else if (dpbus ==981){
var dpbuscol =52;
var dpbusrow =31;
}
else if (dpbus ==982){
var dpbuscol =13;
var dpbusrow =32;
}
else if (dpbus ==983){
var dpbuscol =14;
var dpbusrow =32;
}
else if (dpbus ==984){
var dpbuscol =15;
var dpbusrow =32;
}
else if (dpbus ==985){
var dpbuscol =16;
var dpbusrow =32;
}
else if (dpbus ==986){
var dpbuscol =17;
var dpbusrow =32;
}
else if (dpbus ==987){
var dpbuscol =18;
var dpbusrow =32;
}
else if (dpbus ==988){
var dpbuscol =19;
var dpbusrow =32;
}
else if (dpbus ==989){
var dpbuscol =20;
var dpbusrow =32;
}
else if (dpbus ==990){
var dpbuscol =21;
var dpbusrow =32;
}
else if (dpbus ==991){
var dpbuscol =22;
var dpbusrow =32;
}
else if (dpbus ==992){
var dpbuscol =23;
var dpbusrow =32;
}
else if (dpbus ==993){
var dpbuscol =24;
var dpbusrow =32;
}
else if (dpbus ==994){
var dpbuscol =25;
var dpbusrow =32;
}
else if (dpbus ==995){
var dpbuscol =26;
var dpbusrow =32;
}
else if (dpbus ==996){
var dpbuscol =27;
var dpbusrow =32;
}
else if (dpbus ==997){
var dpbuscol =28;
var dpbusrow =32;
}
else if (dpbus ==998){
var dpbuscol =30;
var dpbusrow =32;
}
else if (dpbus ==999){
var dpbuscol =31;
var dpbusrow =32;
}
else if (dpbus ==1000){
var dpbuscol =32;
var dpbusrow =32;
}
else if (dpbus ==1001){
var dpbuscol =33;
var dpbusrow =32;
}
else if (dpbus ==1002){
var dpbuscol =34;
var dpbusrow =32;
}
else if (dpbus ==1003){
var dpbuscol =35;
var dpbusrow =32;
}
else if (dpbus ==1004){
var dpbuscol =36;
var dpbusrow =32;
}
else if (dpbus ==1005){
var dpbuscol =37;
var dpbusrow =32;
}
else if (dpbus ==1006){
var dpbuscol =38;
var dpbusrow =32;
}
else if (dpbus ==1007){
var dpbuscol =39;
var dpbusrow =32;
}
else if (dpbus ==1008){
var dpbuscol =40;
var dpbusrow =32;
}
else if (dpbus ==1009){
var dpbuscol =41;
var dpbusrow =32;
}
else if (dpbus ==1010){
var dpbuscol =42;
var dpbusrow =32;
}
else if (dpbus ==1011){
var dpbuscol =46;
var dpbusrow =32;
}
else if (dpbus ==1012){
var dpbuscol =47;
var dpbusrow =32;
}
else if (dpbus ==1013){
var dpbuscol =48;
var dpbusrow =32;
}
else if (dpbus ==1014){
var dpbuscol =49;
var dpbusrow =32;
}
else if (dpbus ==1015){
var dpbuscol =50;
var dpbusrow =32;
}
else if (dpbus ==1016){
var dpbuscol =51;
var dpbusrow =32;
}
else if (dpbus ==1017){
var dpbuscol =13;
var dpbusrow =33;
}
else if (dpbus ==1018){
var dpbuscol =14;
var dpbusrow =33;
}
else if (dpbus ==1019){
var dpbuscol =15;
var dpbusrow =33;
}
else if (dpbus ==1020){
var dpbuscol =16;
var dpbusrow =33;
}
else if (dpbus ==1021){
var dpbuscol =17;
var dpbusrow =33;
}
else if (dpbus ==1022){
var dpbuscol =18;
var dpbusrow =33;
}
else if (dpbus ==1023){
var dpbuscol =19;
var dpbusrow =33;
}
else if (dpbus ==1024){
var dpbuscol =20;
var dpbusrow =33;
}
else if (dpbus ==1025){
var dpbuscol =21;
var dpbusrow =33;
}
else if (dpbus ==1026){
var dpbuscol =22;
var dpbusrow =33;
}
else if (dpbus ==1027){
var dpbuscol =23;
var dpbusrow =33;
}
else if (dpbus ==1028){
var dpbuscol =25;
var dpbusrow =33;
}
else if (dpbus ==1029){
var dpbuscol =26;
var dpbusrow =33;
}
else if (dpbus ==1030){
var dpbuscol =27;
var dpbusrow =33;
}
else if (dpbus ==1031){
var dpbuscol =28;
var dpbusrow =33;
}
else if (dpbus ==1032){
var dpbuscol =29;
var dpbusrow =33;
}
else if (dpbus ==1033){
var dpbuscol =30;
var dpbusrow =33;
}
else if (dpbus ==1034){
var dpbuscol =31;
var dpbusrow =33;
}
else if (dpbus ==1035){
var dpbuscol =32;
var dpbusrow =33;
}
else if (dpbus ==1036){
var dpbuscol =33;
var dpbusrow =33;
}
else if (dpbus ==1037){
var dpbuscol =34;
var dpbusrow =33;
}
else if (dpbus ==1038){
var dpbuscol =35;
var dpbusrow =33;
}
else if (dpbus ==1039){
var dpbuscol =36;
var dpbusrow =33;
}
else if (dpbus ==1040){
var dpbuscol =37;
var dpbusrow =33;
}
else if (dpbus ==1041){
var dpbuscol =38;
var dpbusrow =33;
}
else if (dpbus ==1042){
var dpbuscol =39;
var dpbusrow =33;
}
else if (dpbus ==1043){
var dpbuscol =40;
var dpbusrow =33;
}
else if (dpbus ==1044){
var dpbuscol =41;
var dpbusrow =33;
}
else if (dpbus ==1045){
var dpbuscol =13;
var dpbusrow =34;
}
else if (dpbus ==1046){
var dpbuscol =14;
var dpbusrow =34;
}
else if (dpbus ==1047){
var dpbuscol =16;
var dpbusrow =34;
}
else if (dpbus ==1048){
var dpbuscol =17;
var dpbusrow =34;
}
else if (dpbus ==1049){
var dpbuscol =18;
var dpbusrow =34;
}
else if (dpbus ==1050){
var dpbuscol =21;
var dpbusrow =34;
}
else if (dpbus ==1051){
var dpbuscol =22;
var dpbusrow =34;
}
else if (dpbus ==1052){
var dpbuscol =23;
var dpbusrow =34;
}
else if (dpbus ==1053){
var dpbuscol =24;
var dpbusrow =34;
}
else if (dpbus ==1054){
var dpbuscol =25;
var dpbusrow =34;
}
else if (dpbus ==1055){
var dpbuscol =26;
var dpbusrow =34;
}
else if (dpbus ==1056){
var dpbuscol =27;
var dpbusrow =34;
}
else if (dpbus ==1057){
var dpbuscol =29;
var dpbusrow =34;
}
else if (dpbus ==1058){
var dpbuscol =30;
var dpbusrow =34;
}
else if (dpbus ==1059){
var dpbuscol =31;
var dpbusrow =34;
}
else if (dpbus ==1060){
var dpbuscol =32;
var dpbusrow =34;
}
else if (dpbus ==1061){
var dpbuscol =33;
var dpbusrow =34;
}
else if (dpbus ==1062){
var dpbuscol =34;
var dpbusrow =34;
}
else if (dpbus ==1063){
var dpbuscol =35;
var dpbusrow =34;
}
else if (dpbus ==1064){
var dpbuscol =36;
var dpbusrow =34;
}
else if (dpbus ==1065){
var dpbuscol =37;
var dpbusrow =34;
}
else if (dpbus ==1066){
var dpbuscol =38;
var dpbusrow =34;
}
else if (dpbus ==1067){
var dpbuscol =13;
var dpbusrow =35;
}
else if (dpbus ==1068){
var dpbuscol =14;
var dpbusrow =35;
}
else if (dpbus ==1069){
var dpbuscol =15;
var dpbusrow =35;
}
else if (dpbus ==1070){
var dpbuscol =16;
var dpbusrow =35;
}
else if (dpbus ==1071){
var dpbuscol =17;
var dpbusrow =35;
}
else if (dpbus ==1072){
var dpbuscol =22;
var dpbusrow =35;
}
else if (dpbus ==1073){
var dpbuscol =23;
var dpbusrow =35;
}
else if (dpbus ==1074){
var dpbuscol =24;
var dpbusrow =35;
}
else if (dpbus ==1075){
var dpbuscol =25;
var dpbusrow =35;
}
else if (dpbus ==1076){
var dpbuscol =26;
var dpbusrow =35;
}
else if (dpbus ==1077){
var dpbuscol =27;
var dpbusrow =35;
}
else if (dpbus ==1078){
var dpbuscol =28;
var dpbusrow =35;
}
else if (dpbus ==1079){
var dpbuscol =29;
var dpbusrow =35;
}
else if (dpbus ==1080){
var dpbuscol =30;
var dpbusrow =35;
}
else if (dpbus ==1081){
var dpbuscol =31;
var dpbusrow =35;
}
else if (dpbus ==1082){
var dpbuscol =32;
var dpbusrow =35;
}
else if (dpbus ==1083){
var dpbuscol =33;
var dpbusrow =35;
}
else if (dpbus ==1084){
var dpbuscol =13;
var dpbusrow =36;
}
else if (dpbus ==1085){
var dpbuscol =14;
var dpbusrow =36;
}
else if (dpbus ==1086){
var dpbuscol =15;
var dpbusrow =36;
}
else if (dpbus ==1087){
var dpbuscol =16;
var dpbusrow =36;
}
else if (dpbus ==1088){
var dpbuscol =17;
var dpbusrow =36;
}
else if (dpbus ==1089){
var dpbuscol =22;
var dpbusrow =36;
}
else if (dpbus ==1090){
var dpbuscol =23;
var dpbusrow =36;
}
else if (dpbus ==1091){
var dpbuscol =24;
var dpbusrow =36;
}
else if (dpbus ==1092){
var dpbuscol =25;
var dpbusrow =36;
}
else if (dpbus ==1093){
var dpbuscol =26;
var dpbusrow =36;
}
else if (dpbus ==1094){
var dpbuscol =27;
var dpbusrow =36;
}
else if (dpbus ==1095){
var dpbuscol =29;
var dpbusrow =36;
}
else if (dpbus ==1096){
var dpbuscol =30;
var dpbusrow =36;
}
else if (dpbus ==1097){
var dpbuscol =31;
var dpbusrow =36;
}
else if (dpbus ==1098){
var dpbuscol =32;
var dpbusrow =36;
}
else if (dpbus ==1099){
var dpbuscol =14;
var dpbusrow =37;
}
else if (dpbus ==1100){
var dpbuscol =15;
var dpbusrow =37;
}
else if (dpbus ==1101){
var dpbuscol =21;
var dpbusrow =37;
}
else if (dpbus ==1102){
var dpbuscol =22;
var dpbusrow =37;
}
else if (dpbus ==1103){
var dpbuscol =23;
var dpbusrow =37;
}
else if (dpbus ==1104){
var dpbuscol =24;
var dpbusrow =37;
}
else if (dpbus ==1105){
var dpbuscol =25;
var dpbusrow =37;
}
else if (dpbus ==1106){
var dpbuscol =26;
var dpbusrow =37;
}
else if (dpbus ==1107){
var dpbuscol =27;
var dpbusrow =37;
}
else if (dpbus ==1108){
var dpbuscol =28;
var dpbusrow =37;
}
else if (dpbus ==1109){
var dpbuscol =29;
var dpbusrow =37;
}
else if (dpbus ==1110){
var dpbuscol =30;
var dpbusrow =37;
}
else if (dpbus ==1111){
var dpbuscol =31;
var dpbusrow =37;
}
else if (dpbus ==1112){
var dpbuscol =19;
var dpbusrow =38;
}
else if (dpbus ==1113){
var dpbuscol =20;
var dpbusrow =38;
}
else if (dpbus ==1114){
var dpbuscol =21;
var dpbusrow =38;
}
else if (dpbus ==1115){
var dpbuscol =22;
var dpbusrow =38;
}
else if (dpbus ==1116){
var dpbuscol =23;
var dpbusrow =38;
}
else if (dpbus ==1117){
var dpbuscol =24;
var dpbusrow =38;
}
else if (dpbus ==1118){
var dpbuscol =26;
var dpbusrow =38;
}
else if (dpbus ==1119){
var dpbuscol =27;
var dpbusrow =38;
}
else if (dpbus ==1120){
var dpbuscol =28;
var dpbusrow =38;
}
else if (dpbus ==1121){
var dpbuscol =29;
var dpbusrow =38;
}
else if (dpbus ==1122){
var dpbuscol =30;
var dpbusrow =38;
}
else if (dpbus ==1123){
var dpbuscol =31;
var dpbusrow =38;
}
else if (dpbus ==1124){
var dpbuscol =19;
var dpbusrow =39;
}
else if (dpbus ==1125){
var dpbuscol =20;
var dpbusrow =39;
}
else if (dpbus ==1126){
var dpbuscol =21;
var dpbusrow =39;
}
else if (dpbus ==1127){
var dpbuscol =22;
var dpbusrow =39;
}
else if (dpbus ==1128){
var dpbuscol =23;
var dpbusrow =39;
}
else if (dpbus ==1129){
var dpbuscol =24;
var dpbusrow =39;
}
else if (dpbus ==1130){
var dpbuscol =25;
var dpbusrow =39;
}
else if (dpbus ==1131){
var dpbuscol =26;
var dpbusrow =39;
}
else if (dpbus ==1132){
var dpbuscol =27;
var dpbusrow =39;
}
else if (dpbus ==1133){
var dpbuscol =31;
var dpbusrow =39;
}
else if (dpbus ==1134){
var dpbuscol =16;
var dpbusrow =40;
}
else if (dpbus ==1135){
var dpbuscol =17;
var dpbusrow =40;
}
else if (dpbus ==1136){
var dpbuscol =18;
var dpbusrow =40;
}
else if (dpbus ==1137){
var dpbuscol =19;
var dpbusrow =40;
}
else if (dpbus ==1138){
var dpbuscol =20;
var dpbusrow =40;
}
else if (dpbus ==1139){
var dpbuscol =21;
var dpbusrow =40;
}
else if (dpbus ==1140){
var dpbuscol =22;
var dpbusrow =40;
}
else if (dpbus ==1141){
var dpbuscol =24;
var dpbusrow =40;
}
else if (dpbus ==1142){
var dpbuscol =25;
var dpbusrow =40;
}
else if (dpbus ==1143){
var dpbuscol =26;
var dpbusrow =40;
}
else if (dpbus ==1144){
var dpbuscol =29;
var dpbusrow =40;
}
else if (dpbus ==1145){
var dpbuscol =30;
var dpbusrow =40;
}
else if (dpbus ==1146){
var dpbuscol =31;
var dpbusrow =40;
}
else if (dpbus ==1147){
var dpbuscol =16;
var dpbusrow =41;
}
else if (dpbus ==1148){
var dpbuscol =17;
var dpbusrow =41;
}
else if (dpbus ==1149){
var dpbuscol =18;
var dpbusrow =41;
}
else if (dpbus ==1150){
var dpbuscol =19;
var dpbusrow =41;
}
else if (dpbus ==1151){
var dpbuscol =31;
var dpbusrow =41;
}
else if (dpbus ==1152){
var dpbuscol =16;
var dpbusrow =42;
}
else if (dpbus ==1153){
var dpbuscol =17;
var dpbusrow =42;
}
else if (dpbus ==1154){
var dpbuscol =18;
var dpbusrow =42;
}
else if (dpbus ==1155){
var dpbuscol =19;
var dpbusrow =42;
}
else if (dpbus ==1156){
var dpbuscol =28;
var dpbusrow =42;
}
else if (dpbus ==1157){
var dpbuscol =29;
var dpbusrow =42;
}
else if (dpbus ==1158){
var dpbuscol =30;
var dpbusrow =42;
}
else if (dpbus ==1159){
var dpbuscol =31;
var dpbusrow =42;
}
else if (dpbus ==1160){
var dpbuscol =32;
var dpbusrow =42;
}
else if (dpbus ==1161){
var dpbuscol =33;
var dpbusrow =42;
}
else if (dpbus ==1162){
var dpbuscol =34;
var dpbusrow =42;
}
else if (dpbus ==1163){
var dpbuscol =35;
var dpbusrow =42;
}
else if (dpbus ==1164){
var dpbuscol =36;
var dpbusrow =42;
}
else if (dpbus ==1165){
var dpbuscol =37;
var dpbusrow =42;
}
else if (dpbus ==1166){
var dpbuscol =15;
var dpbusrow =43;
}
else if (dpbus ==1167){
var dpbuscol =16;
var dpbusrow =43;
}
else if (dpbus ==1168){
var dpbuscol =17;
var dpbusrow =43;
}
else if (dpbus ==1169){
var dpbuscol =18;
var dpbusrow =43;
}
else if (dpbus ==1170){
var dpbuscol =19;
var dpbusrow =43;
}
else if (dpbus ==1171){
var dpbuscol =27;
var dpbusrow =43;
}
else if (dpbus ==1172){
var dpbuscol =28;
var dpbusrow =43;
}
else if (dpbus ==1173){
var dpbuscol =29;
var dpbusrow =43;
}
else if (dpbus ==1174){
var dpbuscol =31;
var dpbusrow =43;
}
else if (dpbus ==1175){
var dpbuscol =32;
var dpbusrow =43;
}
else if (dpbus ==1176){
var dpbuscol =33;
var dpbusrow =43;
}
else if (dpbus ==1177){
var dpbuscol =34;
var dpbusrow =43;
}
else if (dpbus ==1178){
var dpbuscol =35;
var dpbusrow =43;
}
else if (dpbus ==1179){
var dpbuscol =36;
var dpbusrow =43;
}
else if (dpbus ==1180){
var dpbuscol =37;
var dpbusrow =43;
}
else if (dpbus ==1181){
var dpbuscol =38;
var dpbusrow =43;
}
else if (dpbus ==1182){
var dpbuscol =13;
var dpbusrow =44;
}
else if (dpbus ==1183){
var dpbuscol =14;
var dpbusrow =44;
}
else if (dpbus ==1184){
var dpbuscol =15;
var dpbusrow =44;
}
else if (dpbus ==1185){
var dpbuscol =16;
var dpbusrow =44;
}
else if (dpbus ==1186){
var dpbuscol =17;
var dpbusrow =44;
}
else if (dpbus ==1187){
var dpbuscol =18;
var dpbusrow =44;
}
else if (dpbus ==1188){
var dpbuscol =19;
var dpbusrow =44;
}
else if (dpbus ==1189){
var dpbuscol =27;
var dpbusrow =44;
}
else if (dpbus ==1190){
var dpbuscol =28;
var dpbusrow =44;
}
else if (dpbus ==1191){
var dpbuscol =31;
var dpbusrow =44;
}
else if (dpbus ==1192){
var dpbuscol =32;
var dpbusrow =44;
}
else if (dpbus ==1193){
var dpbuscol =33;
var dpbusrow =44;
}
else if (dpbus ==1194){
var dpbuscol =34;
var dpbusrow =44;
}
else if (dpbus ==1195){
var dpbuscol =35;
var dpbusrow =44;
}
else if (dpbus ==1196){
var dpbuscol =36;
var dpbusrow =44;
}
else if (dpbus ==1197){
var dpbuscol =37;
var dpbusrow =44;
}
else if (dpbus ==1198){
var dpbuscol =38;
var dpbusrow =44;
}
else if (dpbus ==1199){
var dpbuscol =10;
var dpbusrow =45;
}
else if (dpbus ==1200){
var dpbuscol =11;
var dpbusrow =45;
}
else if (dpbus ==1201){
var dpbuscol =12;
var dpbusrow =45;
}
else if (dpbus ==1202){
var dpbuscol =13;
var dpbusrow =45;
}
else if (dpbus ==1203){
var dpbuscol =14;
var dpbusrow =45;
}
else if (dpbus ==1204){
var dpbuscol =15;
var dpbusrow =45;
}
else if (dpbus ==1205){
var dpbuscol =16;
var dpbusrow =45;
}
else if (dpbus ==1206){
var dpbuscol =17;
var dpbusrow =45;
}
else if (dpbus ==1207){
var dpbuscol =18;
var dpbusrow =45;
}
else if (dpbus ==1208){
var dpbuscol =26;
var dpbusrow =45;
}
else if (dpbus ==1209){
var dpbuscol =27;
var dpbusrow =45;
}
else if (dpbus ==1210){
var dpbuscol =28;
var dpbusrow =45;
}
else if (dpbus ==1211){
var dpbuscol =31;
var dpbusrow =45;
}
else if (dpbus ==1212){
var dpbuscol =32;
var dpbusrow =45;
}
else if (dpbus ==1213){
var dpbuscol =33;
var dpbusrow =45;
}
else if (dpbus ==1214){
var dpbuscol =34;
var dpbusrow =45;
}
else if (dpbus ==1215){
var dpbuscol =35;
var dpbusrow =45;
}
else if (dpbus ==1216){
var dpbuscol =37;
var dpbusrow =45;
}
else if (dpbus ==1217){
var dpbuscol =38;
var dpbusrow =45;
}
else if (dpbus ==1218){
var dpbuscol =9;
var dpbusrow =46;
}
else if (dpbus ==1219){
var dpbuscol =10;
var dpbusrow =46;
}
else if (dpbus ==1220){
var dpbuscol =11;
var dpbusrow =46;
}
else if (dpbus ==1221){
var dpbuscol =12;
var dpbusrow =46;
}
else if (dpbus ==1222){
var dpbuscol =13;
var dpbusrow =46;
}
else if (dpbus ==1223){
var dpbuscol =14;
var dpbusrow =46;
}
else if (dpbus ==1224){
var dpbuscol =15;
var dpbusrow =46;
}
else if (dpbus ==1225){
var dpbuscol =16;
var dpbusrow =46;
}
else if (dpbus ==1226){
var dpbuscol =17;
var dpbusrow =46;
}
else if (dpbus ==1227){
var dpbuscol =18;
var dpbusrow =46;
}
else if (dpbus ==1228){
var dpbuscol =25;
var dpbusrow =46;
}
else if (dpbus ==1229){
var dpbuscol =26;
var dpbusrow =46;
}
else if (dpbus ==1230){
var dpbuscol =27;
var dpbusrow =46;
}
else if (dpbus ==1231){
var dpbuscol =28;
var dpbusrow =46;
}
else if (dpbus ==1232){
var dpbuscol =31;
var dpbusrow =46;
}
else if (dpbus ==1233){
var dpbuscol =32;
var dpbusrow =46;
}
else if (dpbus ==1234){
var dpbuscol =33;
var dpbusrow =46;
}
else if (dpbus ==1235){
var dpbuscol =34;
var dpbusrow =46;
}
else if (dpbus ==1236){
var dpbuscol =35;
var dpbusrow =46;
}
else if (dpbus ==1237){
var dpbuscol =36;
var dpbusrow =46;
}
else if (dpbus ==1238){
var dpbuscol =37;
var dpbusrow =46;
}
else if (dpbus ==1239){
var dpbuscol =38;
var dpbusrow =46;
}
else if (dpbus ==1240){
var dpbuscol =39;
var dpbusrow =46;
}
else if (dpbus ==1241){
var dpbuscol =40;
var dpbusrow =46;
}
else if (dpbus ==1242){
var dpbuscol =41;
var dpbusrow =46;
}
else if (dpbus ==1243){
var dpbuscol =9;
var dpbusrow =47;
}
else if (dpbus ==1244){
var dpbuscol =10;
var dpbusrow =47;
}
else if (dpbus ==1245){
var dpbuscol =11;
var dpbusrow =47;
}
else if (dpbus ==1246){
var dpbuscol =12;
var dpbusrow =47;
}
else if (dpbus ==1247){
var dpbuscol =13;
var dpbusrow =47;
}
else if (dpbus ==1248){
var dpbuscol =14;
var dpbusrow =47;
}
else if (dpbus ==1249){
var dpbuscol =16;
var dpbusrow =47;
}
else if (dpbus ==1250){
var dpbuscol =17;
var dpbusrow =47;
}
else if (dpbus ==1251){
var dpbuscol =18;
var dpbusrow =47;
}
else if (dpbus ==1252){
var dpbuscol =25;
var dpbusrow =47;
}
else if (dpbus ==1253){
var dpbuscol =26;
var dpbusrow =47;
}
else if (dpbus ==1254){
var dpbuscol =27;
var dpbusrow =47;
}
else if (dpbus ==1255){
var dpbuscol =33;
var dpbusrow =47;
}
else if (dpbus ==1256){
var dpbuscol =34;
var dpbusrow =47;
}
else if (dpbus ==1257){
var dpbuscol =35;
var dpbusrow =47;
}
else if (dpbus ==1258){
var dpbuscol =36;
var dpbusrow =47;
}
else if (dpbus ==1259){
var dpbuscol =37;
var dpbusrow =47;
}
else if (dpbus ==1260){
var dpbuscol =38;
var dpbusrow =47;
}
else if (dpbus ==1261){
var dpbuscol =39;
var dpbusrow =47;
}
else if (dpbus ==1262){
var dpbuscol =40;
var dpbusrow =47;
}
else if (dpbus ==1263){
var dpbuscol =41;
var dpbusrow =47;
}
else if (dpbus ==1264){
var dpbuscol =9;
var dpbusrow =48;
}
else if (dpbus ==1265){
var dpbuscol =10;
var dpbusrow =48;
}
else if (dpbus ==1266){
var dpbuscol =11;
var dpbusrow =48;
}
else if (dpbus ==1267){
var dpbuscol =13;
var dpbusrow =48;
}
else if (dpbus ==1268){
var dpbuscol =14;
var dpbusrow =48;
}
else if (dpbus ==1269){
var dpbuscol =15;
var dpbusrow =48;
}
else if (dpbus ==1270){
var dpbuscol =16;
var dpbusrow =48;
}
else if (dpbus ==1271){
var dpbuscol =17;
var dpbusrow =48;
}
else if (dpbus ==1272){
var dpbuscol =23;
var dpbusrow =48;
}
else if (dpbus ==1273){
var dpbuscol =24;
var dpbusrow =48;
}
else if (dpbus ==1274){
var dpbuscol =25;
var dpbusrow =48;
}
else if (dpbus ==1275){
var dpbuscol =26;
var dpbusrow =48;
}
else if (dpbus ==1276){
var dpbuscol =27;
var dpbusrow =48;
}
else if (dpbus ==1277){
var dpbuscol =34;
var dpbusrow =48;
}
else if (dpbus ==1278){
var dpbuscol =35;
var dpbusrow =48;
}
else if (dpbus ==1279){
var dpbuscol =36;
var dpbusrow =48;
}
else if (dpbus ==1280){
var dpbuscol =37;
var dpbusrow =48;
}
else if (dpbus ==1281){
var dpbuscol =38;
var dpbusrow =48;
}
else if (dpbus ==1282){
var dpbuscol =39;
var dpbusrow =48;
}
else if (dpbus ==1283){
var dpbuscol =40;
var dpbusrow =48;
}
else if (dpbus ==1284){
var dpbuscol =41;
var dpbusrow =48;
}
else if (dpbus ==1285){
var dpbuscol =42;
var dpbusrow =48;
}
else if (dpbus ==1286){
var dpbuscol =43;
var dpbusrow =48;
}
else if (dpbus ==1287){
var dpbuscol =44;
var dpbusrow =48;
}
else if (dpbus ==1288){
var dpbuscol =9;
var dpbusrow =49;
}
else if (dpbus ==1289){
var dpbuscol =12;
var dpbusrow =49;
}
else if (dpbus ==1290){
var dpbuscol =13;
var dpbusrow =49;
}
else if (dpbus ==1291){
var dpbuscol =14;
var dpbusrow =49;
}
else if (dpbus ==1292){
var dpbuscol =15;
var dpbusrow =49;
}
else if (dpbus ==1293){
var dpbuscol =16;
var dpbusrow =49;
}
else if (dpbus ==1294){
var dpbuscol =17;
var dpbusrow =49;
}
else if (dpbus ==1295){
var dpbuscol =22;
var dpbusrow =49;
}
else if (dpbus ==1296){
var dpbuscol =23;
var dpbusrow =49;
}
else if (dpbus ==1297){
var dpbuscol =24;
var dpbusrow =49;
}
else if (dpbus ==1298){
var dpbuscol =25;
var dpbusrow =49;
}
else if (dpbus ==1299){
var dpbuscol =26;
var dpbusrow =49;
}
else if (dpbus ==1300){
var dpbuscol =35;
var dpbusrow =49;
}
else if (dpbus ==1301){
var dpbuscol =36;
var dpbusrow =49;
}
else if (dpbus ==1302){
var dpbuscol =37;
var dpbusrow =49;
}
else if (dpbus ==1303){
var dpbuscol =38;
var dpbusrow =49;
}
else if (dpbus ==1304){
var dpbuscol =40;
var dpbusrow =49;
}
else if (dpbus ==1305){
var dpbuscol =41;
var dpbusrow =49;
}
else if (dpbus ==1306){
var dpbuscol =42;
var dpbusrow =49;
}
else if (dpbus ==1307){
var dpbuscol =43;
var dpbusrow =49;
}
else if (dpbus ==1308){
var dpbuscol =44;
var dpbusrow =49;
}
else if (dpbus ==1309){
var dpbuscol =9;
var dpbusrow =50;
}
else if (dpbus ==1310){
var dpbuscol =10;
var dpbusrow =50;
}
else if (dpbus ==1311){
var dpbuscol =11;
var dpbusrow =50;
}
else if (dpbus ==1312){
var dpbuscol =12;
var dpbusrow =50;
}
else if (dpbus ==1313){
var dpbuscol =13;
var dpbusrow =50;
}
else if (dpbus ==1314){
var dpbuscol =21;
var dpbusrow =50;
}
else if (dpbus ==1315){
var dpbuscol =22;
var dpbusrow =50;
}
else if (dpbus ==1316){
var dpbuscol =23;
var dpbusrow =50;
}
else if (dpbus ==1317){
var dpbuscol =24;
var dpbusrow =50;
}
else if (dpbus ==1318){
var dpbuscol =25;
var dpbusrow =50;
}
else if (dpbus ==1319){
var dpbuscol =26;
var dpbusrow =50;
}
else if (dpbus ==1320){
var dpbuscol =35;
var dpbusrow =50;
}
else if (dpbus ==1321){
var dpbuscol =36;
var dpbusrow =50;
}
else if (dpbus ==1322){
var dpbuscol =37;
var dpbusrow =50;
}
else if (dpbus ==1323){
var dpbuscol =38;
var dpbusrow =50;
}
else if (dpbus ==1324){
var dpbuscol =39;
var dpbusrow =50;
}
else if (dpbus ==1325){
var dpbuscol =40;
var dpbusrow =50;
}
else if (dpbus ==1326){
var dpbuscol =41;
var dpbusrow =50;
}
else if (dpbus ==1327){
var dpbuscol =43;
var dpbusrow =50;
}
else if (dpbus ==1328){
var dpbuscol =44;
var dpbusrow =50;
}
else if (dpbus ==1329){
var dpbuscol =8;
var dpbusrow =51;
}
else if (dpbus ==1330){
var dpbuscol =9;
var dpbusrow =51;
}
else if (dpbus ==1331){
var dpbuscol =10;
var dpbusrow =51;
}
else if (dpbus ==1332){
var dpbuscol =11;
var dpbusrow =51;
}
else if (dpbus ==1333){
var dpbuscol =12;
var dpbusrow =51;
}
else if (dpbus ==1334){
var dpbuscol =21;
var dpbusrow =51;
}
else if (dpbus ==1335){
var dpbuscol =22;
var dpbusrow =51;
}
else if (dpbus ==1336){
var dpbuscol =23;
var dpbusrow =51;
}
else if (dpbus ==1337){
var dpbuscol =25;
var dpbusrow =51;
}
else if (dpbus ==1338){
var dpbuscol =26;
var dpbusrow =51;
}
else if (dpbus ==1339){
var dpbuscol =36;
var dpbusrow =51;
}
else if (dpbus ==1340){
var dpbuscol =37;
var dpbusrow =51;
}
else if (dpbus ==1341){
var dpbuscol =40;
var dpbusrow =51;
}
else if (dpbus ==1342){
var dpbuscol =41;
var dpbusrow =51;
}
else if (dpbus ==1343){
var dpbuscol =42;
var dpbusrow =51;
}
else if (dpbus ==1344){
var dpbuscol =43;
var dpbusrow =51;
}
else if (dpbus ==1345){
var dpbuscol =8;
var dpbusrow =52;
}
else if (dpbus ==1346){
var dpbuscol =9;
var dpbusrow =52;
}
else if (dpbus ==1347){
var dpbuscol =10;
var dpbusrow =52;
}
else if (dpbus ==1348){
var dpbuscol =11;
var dpbusrow =52;
}
else if (dpbus ==1349){
var dpbuscol =12;
var dpbusrow =52;
}
else if (dpbus ==1350){
var dpbuscol =22;
var dpbusrow =52;
}
else if (dpbus ==1351){
var dpbuscol =23;
var dpbusrow =52;
}
else if (dpbus ==1352){
var dpbuscol =24;
var dpbusrow =52;
}
else if (dpbus ==1353){
var dpbuscol =36;
var dpbusrow =52;
}
else if (dpbus ==1354){
var dpbuscol =37;
var dpbusrow =52;
}
else if (dpbus ==1355){
var dpbuscol =38;
var dpbusrow =52;
}
else if (dpbus ==1356){
var dpbuscol =39;
var dpbusrow =52;
}
else if (dpbus ==1357){
var dpbuscol =40;
var dpbusrow =52;
}
else if (dpbus ==1358){
var dpbuscol =41;
var dpbusrow =52;
}
else if (dpbus ==1359){
var dpbuscol =42;
var dpbusrow =52;
}
else if (dpbus ==1360){
var dpbuscol =9;
var dpbusrow =53;
}
else if (dpbus ==1361){
var dpbuscol =10;
var dpbusrow =53;
}
else if (dpbus ==1362){
var dpbuscol =11;
var dpbusrow =53;
}
else if (dpbus ==1363){
var dpbuscol =22;
var dpbusrow =53;
}
else if (dpbus ==1364){
var dpbuscol =23;
var dpbusrow =53;
}
else if (dpbus ==1365){
var dpbuscol =24;
var dpbusrow =53;
}
else if (dpbus ==1366){
var dpbuscol =36;
var dpbusrow =53;
}
else if (dpbus ==1367){
var dpbuscol =37;
var dpbusrow =53;
}
else if (dpbus ==1368){
var dpbuscol =38;
var dpbusrow =53;
}
else if (dpbus ==1369){
var dpbuscol =40;
var dpbusrow =53;
}
else if (dpbus ==1370){
var dpbuscol =41;
var dpbusrow =53;
}
else if (dpbus ==1371){
var dpbuscol =37;
var dpbusrow =54;
}
else if (dpbus ==1372){
var dpbuscol =38;
var dpbusrow =54;
}
else if (dpbus ==1373){
var dpbuscol =39;
var dpbusrow =54;
}
else if (dpbus ==1374){
var dpbuscol =40;
var dpbusrow =54;
}
else if (dpbus ==1375){
var dpbuscol =38;
var dpbusrow =55;
}
else if (dpbus ==1376){
var dpbuscol =39;
var dpbusrow =55;
}
else if (dpbus ==1377){
var dpbuscol =40;
var dpbusrow =55;
}
else {
var dpbuscol =1;
var dpbusrow =1;
}



/*
//base color
var baseColor = new THREE.Color().setRGB( 0.98, 0.96, 0.98 );

var matColor = baseColor.clone().multiply( comlight );

//roof color
var roofColor = baseColor.clone().multiply( light );
*/

// put a position
buildMesh36.position.x = (2700 - 5400) + (dpbuscol * 90) - 30;
buildMesh36.position.z = (2700 - 5400) + (dpbusrow * 90) - 30;
//put a rotation
buildMesh36.rotation.y = 0.5*Math.PI*2;
//building scale
buildMesh36.scale.x = 60;
buildMesh36.scale.y = 80;
buildMesh36.scale.z = buildMesh36.scale.x;

//add geometry
var geo36 = buildMesh36.geo36;

/*
for ( var j = 0, jl = geometry.faces.length; j < jl; j ++ ) {
//0 = front, 1 = back, 2 = top, 3 = bottom?, 4 = right, 5 = left
if (j === 2){
geometry.faces[ j ].vertexColors = [ roofColor, roofColor, roofColor, roofColor ];
}
else {
geometry.faces[ j ].vertexColors = [ roofColor, matColor, matColor, roofColor ];
}
}
*/

/*
//end business check
}
*/

THREE.GeometryUtils.merge( businessGeometry, buildMesh36 );

//increment loop
dpbus ++;

   }

//return mesh
var mesh36 = new THREE.Mesh(businessGeometry, material36);
return mesh36;

//new building end



//window canvas
function generateTextureBusiness(){
// build a small canvas 30x50 and paint it in white
var dbu = document.createElement( 'canvas' );
dbu.width = 60;
dbu.height = 80;
var contexts = dbu.getContext( '2d' );
// plain it in white
contexts.fillStyle = '#ffffff';
contexts.fillRect( 0, 0, 60, 80 );

/*
// draw the window rows and door - with a small noise to simulate light variations in each room
for( var yw = 8; yw < 80; yw += 20 ){
for( var xw = 6; xw < 60; xw += 20 ){
var ranwin = Math.floor( Math.random() * 50 );
contexts.fillStyle = 'rgb(' + [ranwin, ranwin, ranwin].join( ',' )  + ')';
if (yw <54){
contexts.fillRect( xw, yw, 4, 6);
}
else {
if (xw > 20 && xw <40){
var door = xw - 1;
contexts.fillRect( door, yw, 6, 11);
}
else {
contexts.fillRect( xw, yw, 4, 6);
}
}
}
}
*/

// then draw the image
contexts.drawImage( dbu, 0, 0, dbu.width, dbu.height );
// return the just built canvas
return dbu;
}


}
