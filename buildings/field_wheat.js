class Wheat extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/wheat_field/","FieldOfWheat.obj","models/wheat_field/","FieldOfWheat.mtl", (mesh) => {
            mesh.scale.x = 0.75;
            mesh.scale.y = 0.55;
            mesh.scale.z = 0.75;
            dChurch.position.x = this.pX;
            dChurch.position.y = this.pY;
            dChurch.position.z = this.pZ;
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