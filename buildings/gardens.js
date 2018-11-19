function Gardens(){

    //no. buildings, max = 1600
    //var mxi = 1600; 40 x 40 grid
    var mxi = 1600;
    //loop
    var i = 1;
    while (i < mxi){

        //row
        var jezi = (Math.floor(i / 40)) + 1;
        //column

        var itag = i - 1;
        var gardens = xtag[itag].getElementsByTagName("BUSINESS")[0].childNodes[0].nodeValue;

        if (gardens =="hortus"){

            // put a position bread
            var garPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            var garPositionZ = (1800 - 3600) + (jezi * 90) - 30; //row
            var gardenstand = new Hortus(garPositionX,6,garPositionZ); 
            scene.add(gardenstand);            

        }

    //increment loop
    i ++;

  }

}