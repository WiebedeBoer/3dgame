class Pillar extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/pillar_marble/","pillar.obj","models/pillar_marble/","pillar.mtl", (mesh) => {
            mesh.scale.x = 1.5;
            mesh.scale.y = 5;
            mesh.scale.z = 1.5;
            dChurch.position.x = this.pX;
            dChurch.position.y = this.pY;
            dChurch.position.z = this.pZ;
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