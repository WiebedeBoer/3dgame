//graph
class Graph{
//create graph

init(){  
    var refGraph, position;
    refGraph = this;
    var nodeX = (1800 - 3600) + (this.positionX * 90) - 75;
    var nodeY = this.positionY;
    var nodeZ = (1800 - 3600) + (this.positionZ * 90) - 75;
    //this.position.set(nodeX,nodeY,nodeZ);
    //refGraph.add(position); 
}


    constructor(pX,pY,pZ,name){    
        this.positionX = pX;
        this.positionY = pY;
        this.positionZ = pZ;
        this.name =name;
        this.init();
    }

}