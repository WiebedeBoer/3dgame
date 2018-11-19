class Smithy extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/house2/","house2.obj","models/house2/","house2.mtl", (mesh) => {
            mesh.scale.x = 55.0;
            mesh.scale.y = 60.0;
            mesh.scale.z = 55.0;
            dChurch.position.x = this.pX;
            dChurch.position.y = this.pY;
            dChurch.position.z = this.pZ;
            dChurch.rotation.y = this.yR;
            dChurch.add(mesh);
            collidableMeshList.push(mesh);

        });
    }    
            
    constructor(pX,pY,pZ,yR){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.yR = yR;
        this.init();
       
    }
}