//graph
class Graph{
//create graph


init(){  
    //var refGraph, position;
    //refGraph = this;
    this.positionX = (1800 - 3600) + (this.positionX * 90) - 30;
    this.positionY = this.positionY;
    this.positionZ = (1800 - 3600) + (this.positionZ * 90) - 75;
    //this.position(nodeX,nodeY,nodeZ);
    //refGraph.add(position); 
}


//graph coords


    constructor(pX,pY,pZ,name){    
        this.positionX = pX;
        this.positionY = pY;
        this.positionZ = pZ;
        this.name =name;
        this.init();
    }

}