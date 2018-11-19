class Pillar extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/pillar_marble/","pillar.obj","models/pillar_marble/","pillar.mtl", (mesh) => {
            mesh.scale.x = 3;
            mesh.scale.y = 7;
            mesh.scale.z = 3;
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