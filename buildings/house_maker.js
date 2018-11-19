function houseMaker(type,xPos,zPos){
var househigh = 21.0;

if (type =="farmhouse"){
var farmhouse = new Villa(xPos+28,househigh,zPos+30,0);
scene.add( farmhouse ); 
var farmer = new Person("farmer",xPos+45,zPos);
scene.add(farmer);   
}
else if (type =="villagehouse"){
var farmhouse = new Villa(xPos+28,househigh,zPos+30,0);
scene.add( farmhouse ); 
var pleb = new Person("pleb",xPos+45,zPos);
scene.add(pleb);   
}
else if (type =="villagehouse2"){
var farmhouse = new Villa(xPos+20,househigh,zPos-28,Math.PI/2);
scene.add( farmhouse );
}
if (type =="tavern"){
var tavern = new Villa(xPos+28,househigh,zPos+30,0);
scene.add( tavern );
var wineLoaf = new Jug(xPos+35,0,zPos+2,0,0,0); 
scene.add(wineLoaf);
var wineLoafCol = new propCollect(xPos+35,6,zPos+2,"wine"); 
scene.add(wineLoafCol);
}
else if (type =="potterer"){
var potterer = new Villa(xPos+20,househigh,zPos-28,Math.PI/2);
scene.add( potterer );
var stool = new Amphora(xPos-5,3,zPos-33,0,0,0);
scene.add( stool ); 
var jugLoafCol = new propCollect(xPos-5,3,zPos-33,"pottery"); 
scene.add(jugLoafCol);
}
else if (type =="carpenter"){
var carpenter = new Villa(xPos+20,househigh,zPos-28,Math.PI/2);
scene.add( carpenter );
var stool = new Stool(xPos-5,3,zPos-33,0,0,0);
scene.add( stool ); 
}
else if(type =="barn"){
var stables = new Barn(xPos+13,0,zPos);
scene.add( stables ); 
var oilLoaf = new Jug(xPos,0,zPos+20,0,0,0); 
scene.add(oilLoaf);
var oilLoafCol = new propCollect(xPos,6,zPos+20,"oil"); 
scene.add(oilLoafCol);
}
else if(type =="barn2"){
var stables = new Barn(xPos+13,0,zPos);
scene.add( stables ); 
var donkey1 = new Donkey(xPos+45,0,zPos+15); 
scene.add(donkey1);
}
else if(type =="temple"){
var temple1 = new Temple(xPos,0,zPos);
scene.add( temple1 ); 
var templeCol = new propCollect(xPos,8,zPos-45,"templum"); 
scene.add(templeCol);
var augur = new Person("augur",xPos,zPos-45);
scene.add(augur);  
}
else if(type =="fora"){
var fora1 = new Plaza("venalia","mosaic6",xPos,zPos);
scene.add( fora1 ); 
var tablestand = new Table(xPos,2,zPos-15,0,0,0); 
scene.add(tablestand); 
var fishLoaf = new Trout(xPos,8,zPos-15,0,0,0); 
scene.add(fishLoaf);
var fishLoafCol = new propCollect(xPos,8,zPos-15,"sauce"); 
scene.add(fishLoafCol);
var tablestand2 = new Table(xPos+15,2,zPos-15,0,0,0); 
scene.add(tablestand2); 
var breadLoaf = new Bread(xPos+15,8,zPos-15,0,0,0); 
scene.add(breadLoaf);
var breadLoafCol = new propCollect(xPos+15,8,zPos-15,"bread"); 
scene.add(breadLoafCol);
}
else if(type =="smithy"){
var smith = new Smithy(xPos-30,househigh,zPos+25,-Math.PI/2);
scene.add( smith ); 
var quiverbow = new Quiver(xPos+10, 2.5,zPos+33, 0,0,0);
scene.add( quiverbow ); 
var arrowbow = new Arrow(xPos+11.5, 7.5,zPos+32.9, -3.14159 / 2,0,0);
scene.add( arrowbow );
var arrowLoafCol = new propCollect(xPos+10, 6, zPos+33, "bow"); 
scene.add(arrowLoafCol);
}


}