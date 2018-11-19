class Columnade extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/pillar_marble/","pillar.obj","models/pillar_marble/","pillar.mtl", (mesh) => {
            mesh.scale.x = 4.5;
            mesh.scale.y = 10.35;
            mesh.scale.z = 4.5;
            dChurch.position.x = this.pX;
            dChurch.position.y = 0;
            dChurch.position.z = this.pZ;
            dChurch.add(mesh);           

        });
    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;
        this.pZ = pZ;
        this.init();
    }
}