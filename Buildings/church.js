class Church extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("Models/Church_1221/","Church_1221.obj","Models/Church_1221/","Church_1221.mtl", (mesh) => {
            mesh.scale.x = 0.7;
            mesh.scale.y = 2;
            mesh.scale.z = 0.7;
            dChurch.position.x = (1800 - 3600) + (this.pX * 90) - 30;
            dChurch.position.y = this.pY;
            dChurch.position.z = (1800 - 3600) + (this.pZ * 90) - 30;
            dChurch.add(mesh);
            collidableMeshList.push(mesh);

        });
    }    
            
    constructor(pX,pY,pZ){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.init();
    }
}