class Gun extends THREE.Group {

    init (){

        var dGun = this;
        loadOBJModel("model_obj_gun/","model.obj","model_obj_gun/","materials.mtl", (mesh) => {
            dGun.position.x = 12;
            dGun.position.y = 1;
            dGun.position.z = -60;
            dGun.add(mesh);
         
        });
    }    
            
    constructor(){
        super();

        this.init();
    }

}