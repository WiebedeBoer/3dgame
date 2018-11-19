class Pillar_Fora extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/pillar_marble/","pillar.obj","models/pillar_marble/","pillar.mtl", (mesh) => {
            mesh.scale.x = 3;
            mesh.scale.y = 7;
            mesh.scale.z = 3;
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