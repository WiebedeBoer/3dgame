class Barn extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/barn2/","Barn_01.obj","models/barn2/","Barn_01.mtl", (mesh) => {
            mesh.scale.x = 2.9;
            mesh.scale.y = 2.7;
            mesh.scale.z = 2.7;
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