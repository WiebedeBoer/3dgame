//graph
class Graph{
//create graph

init(){  
    var refGraph, position;
    refGraph = this;
    var nodeX = (1800 - 3600) + (this.positionX * 90) - 75;
    var nodeY = this.positionY;
    var nodeZ = (1800 - 3600) + (this.positionZ * 90) - 75;
    this.position(nodeX,nodeY,nodeZ);
    refGraph.add(position); 
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