function BuildingMaker(){

//1600 buildings to scene
//multiple buildings: building type, front texture, back texture, right texture, left texture, building height

//scene 1, tenements
var nCity = new Commercial("tenement","material_12","concrete","wall2","wall2",80);
scene.add(nCity);

//scene 7 factories
var nFactory = new Commercial("industrial","material_10","concrete","wall2","wall2",80);
scene.add(nFactory);

//scene 8 commercials
var nCommerce = new Commercial("commercial","material_6","concrete","wall4","wall4",80);
scene.add(nCommerce);

//scene 25 warehouses
var nWarehouse = new Commercial("warehouse","material_13","concrete","wall2","wall2",80);
scene.add(nWarehouse);

//scene 2 department stores
var dpstore = new Commercial("department store","concrete","concrete","concrete","concrete",90);
scene.add(dpstore);

//scene 10 fire department
var nFD = new Commercial("fire department","concrete","concrete","concrete","concrete",80);
scene.add(nFD);

//scene 18 police department
var nPD = new Commercial("police","material_2","concrete","wall3","wall3",80);
scene.add(nPD);

//scene 3 churches
var nChurch = new Commercial("church","material_26","material_26","concrete","concrete",90);
scene.add(nChurch);

//scene 11 hospital
var nHospital = new Commercial("hospital","material_5","concrete","wall3","wall3",90);
scene.add(nHospital);

//scene 12 large banks
var nBanks = new Commercial("bank","material_25","concrete","concrete","concrete",100);
scene.add(nBanks);

//scene 13 large hotels
var nHotels = new Commercial("hotel","material_3","concrete","wall3","wall3",100);
scene.add(nHotels);

//scene 14 movie theatres
var nMovies = new Commercial("movie theatre","material_25","concrete","concrete","concrete",80);
scene.add(nMovies);

//scene 15 museums
var nMuseum = new Commercial("museum","material_25","concrete","concrete","concrete",80);
scene.add(nMuseum);

//scene 16 newspapers
var nPaper = new Commercial("newspaper","material_11","concrete","concrete","concrete",90);
scene.add(nPaper);

//scene 19 post office
var nPostoffice = new Commercial("post office","material_25","material_25","concrete","concrete",80);
scene.add(nPostoffice);

//scene 20 radio
var nRadio = new Commercial("radio","material_16","concrete","concrete","concrete",80);
scene.add(nRadio);

//scene 21 schools
var nSchool = new Commercial("school","material_24","concrete","concrete","concrete",80);
scene.add(nSchool);

//scene 22 train stations
var nStation = new Commercial("railway station","material_25","material_25","concrete","concrete",90);
scene.add(nStation);
console.log(nStation);

//single buildings: front texture, back texture, right texture, left texture, building height, row, col
//scene 4 city hall
var ncityhall = new Cityhall("material_18","concrete","material_20","ground9",100,22,21);
scene.add(ncityhall);

//scene 5 FBI
var nFBI = new Cityhall("material_21","concrete","ground9","ground9",100,21,24);
scene.add(nFBI);

//scene 6 jail
var nJail = new Cityhall("material_22","material_22","concrete","concrete",100,29,1);
scene.add(nJail);

//scene 9 court
var nCourt = new Cityhall("material_19","material_19","material_21","material_21",100,22,22);
scene.add(nCourt);

}