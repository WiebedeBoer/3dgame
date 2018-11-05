//graph
class Graph{
//create graph


init(){  

    this.positionX = (1800 - 3600) + (this.positionX * 90) - 75;
    this.positionY = this.positionY;
    this.positionZ = (1800 - 3600) + (this.positionZ * 90) - 75;

}


    constructor(pX,pY,pZ,name){    
        this.positionX = pX;
        this.positionY = pY;
        this.positionZ = pZ;
        this.name =name;
        this.init();
    }

}