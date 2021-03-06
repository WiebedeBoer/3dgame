function BuildingMaker(){

//1600 buildings to scene
//multiple buildings: building type, front texture, back texture, right texture, left texture, building height

//scene 1, tenements
var nCity = new Commercial("tenement","material_12","material_12","wall2","wall2",80);
scene.add(nCity);

//scene 7 factories
var nFactory = new Commercial("industrial","material_10","material_10","wall2","wall2",80);
scene.add(nFactory);

//scene 8 commercials
var nCommerce = new Commercial("commercial","material_29","material_6","wall4","wall4",80);
scene.add(nCommerce);

//scene gunsmiths
var nGunshop = new Commercial("gunsmith","storefront","storefront","wall6","wall6",60);
scene.add(nGunshop);

//scene 25 warehouses
var nWarehouse = new Commercial("warehouse","material_13","material_13","wall2","wall2",80);
scene.add(nWarehouse);

//scene 2 department stores
var dpstore = new Commercial("department store","material_30","material_30","concrete","concrete",90);
scene.add(dpstore);

//scene 10 fire department
var nFD = new Commercial("fire department","material_27","material_28","wall6","wall6",80);
scene.add(nFD);

//scene 18 police department
var nPD = new Commercial("police","material_2","concrete","wall3","wall3",80);
scene.add(nPD);

//scene 3 churches
var nChurch = new Commercial("church","material_26","material_26","wall5","wall5",90);
scene.add(nChurch);
/*
var nChurch = new Church(16,-10,5); //16,5
scene.add(nChurch);
var nChurch2 = new Church(34,-10,9); //34,9
scene.add(nChurch2);
var nChurch3 = new Church(5,-10,18); //5,18
scene.add(nChurch3);
var nChurch4 = new Church(11,-10,18); //11,18
scene.add(nChurch4);
var nChurch5 = new Church(30,-10,29); //30,29
scene.add(nChurch5);
var nChurch6 = new Church(10,-10,36); //10,36
scene.add(nChurch6);
*/

//scene 11 hospital
var nHospital = new Commercial("hospital","material_5","hospitalfront","wall3","wall3",90);
scene.add(nHospital);

//scene 12 large banks
var nBanks = new Commercial("bank","material_25","material_25","concrete","concrete",100);
scene.add(nBanks);

//scene 13 large hotels
var nHotels = new Commercial("hotel","material_3","material_3","wall3","wall3",100);
scene.add(nHotels);

//scene 14 movie theatres
var nMovies = new Commercial("movie theatre","material_25","concrete","concrete","material_25",80);
scene.add(nMovies);

//scene 15 museums
var nMuseum = new Commercial("museum","material_25","material_25","concrete","material_25",80);
scene.add(nMuseum);

//scene 16 newspapers
var nPaper = new Commercial("newspaper","material_11","material_11","concrete","concrete",90);
scene.add(nPaper);

//scene 19 post office
var nPostoffice = new Commercial("post office","material_25","material_25","concrete","concrete",80);
scene.add(nPostoffice);

//scene 20 radio
var nRadio = new Commercial("radio","material_16","material_16","concrete","concrete",80);
scene.add(nRadio);

//scene 21 schools
var nSchool = new Commercial("school","material_24","material_24","concrete","concrete",80);
scene.add(nSchool);

//scene 22 train stations
var nStation = new Commercial("railway station","material_25","material_25","concrete","concrete",90);
scene.add(nStation);

//single buildings: front texture, back texture, right texture, left texture, building height, row, col
//scene 4 city hall
var ncityhall = new Cityhall("material_18","material_18","material_20","concrete",100,22,21);
scene.add(ncityhall);

//scene 5 FBI
var nFBI = new Cityhall("material_21","concrete","wall2","wall2",100,21,24);
scene.add(nFBI);

//scene 6 jail
var nJail = new Cityhall("material_22","material_22","concrete","concrete",100,29,1);
scene.add(nJail);

//scene 9 court
var nCourt = new Cityhall("material_19","material_19","material_21","material_21",100,22,22);
scene.add(nCourt);

}