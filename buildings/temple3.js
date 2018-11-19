class TempleB extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/templum3/","3d-model.obj","models/templum3/","3d-model.mtl", (mesh) => {
            mesh.scale.x = 0.07;
            mesh.scale.y = 0.1;
            mesh.scale.z = 0.06;
            dChurch.position.x = (1800 - 3600) + (this.pX * 90) - 30;
            dChurch.position.y = this.pY;
            dChurch.position.z = (1800 - 3600) + (this.pZ * 90) - 30;
            dChurch.add(mesh);

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