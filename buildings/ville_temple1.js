class Temple extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/templum/","3d-model.obj","models/templum/","3d-model.mtl", (mesh) => {
            mesh.scale.x = 0.07;
            mesh.scale.y = 0.1;
            mesh.scale.z = 0.06;
            dChurch.position.x = this.pX;
            dChurch.position.y = this.pY;
            dChurch.position.z = this.pZ;
            dChurch.rotation.y = Math.PI;
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