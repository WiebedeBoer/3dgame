class Gun extends THREE.Group {

    init (){

        var dGun = this;
        loadOBJModel("props/model_obj_gun/","model.obj","props/model_obj_gun/","materials.mtl", (mesh) => {
            mesh.scale.x = 10;
            mesh.scale.y = 10;
            mesh.scale.z = 10;
            dGun.position.x = this.pX;
            dGun.position.y = this.pY;
            dGun.position.z = this.pZ;
            dGun.add(mesh);

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