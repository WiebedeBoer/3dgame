class Villa extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/house/","house.obj","models/house/","house.mtl", (mesh) => {
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