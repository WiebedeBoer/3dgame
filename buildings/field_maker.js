function fieldMaker(type,xPos,zPos){

//wheat field
if (type =="wheat"){
    var field1 = new Wheat(xPos+15,0,zPos-15);
    scene.add( field1 );
    var field2 = new Wheat(xPos+15,0,zPos);
    scene.add( field2 );
    var field3 = new Wheat(xPos+15,0,zPos+15);
    scene.add( field3 );
    var field4 = new Wheat(xPos,0,zPos-15);
    scene.add( field4 );
    var field5 = new Wheat(xPos,0,zPos); 
    scene.add( field5 );
    var field6 = new Wheat(xPos,0,zPos+15);
    scene.add( field6 );
    var field7 = new Wheat(xPos-15,0,zPos-15);
    scene.add( field7 );
    var field8 = new Wheat(xPos-15,0,zPos);
    scene.add( field8 );
    var field9 = new Wheat(xPos-15,0,zPos+15);
    scene.add( field9 );

    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);

}
else if (type =="vegetables"){
    var field1 = new Cabbage(xPos+15,0,zPos-15,0,0,0);
    scene.add( field1 );
    var field2 = new Cabbage(xPos+15,0,zPos,0,0,0);
    scene.add( field2 );
    var field3 = new Cabbage(xPos+15,0,zPos+15,0,0,0);
    scene.add( field3 );
    var field4 = new Cabbage(xPos,0,zPos-15,0,0,0);
    scene.add( field4 );
    var field5 = new Cabbage(xPos,0,zPos,0,0,0); 
    scene.add( field5 );
    var field6 = new Cabbage(xPos,0,zPos+15,0,0,0);
    scene.add( field6 );
    var field7 = new Cabbage(xPos-15,0,zPos-15,0,0,0);
    scene.add( field7 );
    var field8 = new Cabbage(xPos-15,0,zPos,0,0,0);
    scene.add( field8 );
    var field9 = new Cabbage(xPos-15,0,zPos+15,0,0,0);
    scene.add( field9 );

    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);

}
//olive grove
else if (type=="olive"){
    var Olive1 = new OliveTree(xPos-15,5,zPos+15); 
    scene.add(Olive1);
    var Olive2 = new OliveTree(xPos-15,5,zPos-15); 
    scene.add(Olive2);
    var Olive3 = new OliveTree(xPos+15,5,zPos+15); 
    scene.add(Olive3);
    var Olive4 = new OliveTree(xPos+15,5,zPos-15); 
    scene.add(Olive4);

    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);
}
//grapevine
else if (type=="grape"){
    var grape1 = new GrapeVine(xPos+15,0,zPos-15);
    scene.add( grape1 );
    var grape2 = new GrapeVine(xPos+15,0,zPos);
    scene.add( grape2 );
    var grape3 = new GrapeVine(xPos+15,0,zPos+15);
    scene.add( grape3 );
    var grape4 = new GrapeVine(xPos,0,zPos-15);
    scene.add( grape4 );
    var grape5 = new GrapeVine(xPos,0,zPos); 
    scene.add( grape5 );
    var grape6 = new GrapeVine(xPos,0,zPos+15);
    scene.add( grape6 );
    var grape7 = new GrapeVine(xPos-15,0,zPos-15);
    scene.add( grape7 );
    var grape8 = new GrapeVine(xPos-15,0,zPos);
    scene.add( grape8 );
    var grape9 = new GrapeVine(xPos-15,0,zPos+15);
    scene.add( grape9 );

    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);
}
//forest
else if(type=="forest"){
    var tree1 = new Forest(xPos,45,zPos); 
    scene.add(tree1);

    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);

}
//goat pasture
else if(type =="goat"){
    var Goat1 = new Goat(xPos-15,5,zPos+15); 
    scene.add(Goat1);
    var Goat2 = new Goat(xPos-15,5,zPos-15); 
    scene.add(Goat2);
    var Goat3 = new Goat(xPos+15,5,zPos+15); 
    scene.add(Goat3);
    var Goat4 = new Goat(xPos+15,5,zPos-15); 
    scene.add(Goat4);
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2);   
}
//sheep pasture
else if(type =="sheep"){
    var Sheep1 = new Sheep(xPos-15,5,zPos+15); 
    scene.add(Sheep1);
    var Sheep2 = new Sheep(xPos-15,5,zPos-15); 
    scene.add(Sheep2);
    var Sheep3 = new Sheep(xPos+15,5,zPos+15); 
    scene.add(Sheep3);
    var Sheep4 = new Sheep(xPos+15,5,zPos-15); 
    scene.add(Sheep4);
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2);   
}
//pig pasture
else if(type =="pig"){
    var Pig1 = new Pig(xPos-15,5,zPos+15); 
    scene.add(Pig1);
    var Pig2 = new Pig(xPos-15,5,zPos-15); 
    scene.add(Pig2);
    var Pig3 = new Pig(xPos+15,5,zPos+15); 
    scene.add(Pig3);
    var Pig4 = new Pig(xPos+15,5,zPos-15); 
    scene.add(Pig4);
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2);   
}
//cow pasture
else if(type =="cow"){
    var Cow1 = new Cow(xPos-15,5,zPos); 
    scene.add(Cow1);
    var Cow2 = new Cow(xPos+15,5,zPos); 
    scene.add(Cow2);
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2);   
}
//horse pasture
else if(type =="horse"){
    var Horse1 = new Horse(xPos-15,5,zPos); 
    scene.add(Horse1);
    var Horse2 = new Horse(xPos+15,5,zPos); 
    scene.add(Horse2);
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2);   
}

}