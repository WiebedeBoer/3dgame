class Lantern extends THREE.Group {

    init (){

        var dLantern = this;
        loadOBJModel("model_obj_lantern/","model.obj","model_obj_lantern/","materials.mtl", (mesh) => {
            dLantern.position.x = 12;
            dLantern.position.y = 1;
            dLantern.position.z = -60;
            dLantern.add(mesh);
            addPointLight(dLantern,0x0000ff, 0.1619262, -0.05053151, -0.02406043, 4, 25); //lantern light
            var g = new THREE.BoxGeometry(1,1,1);
            var m = new THREE.MeshBasicMaterial({color: 0xffffff});
            dLantern._meshLight = new THREE.Mesh(g, m);
            dLantern._meshLight.position.set(12,15,-60);
            dLantern._meshLight.visible = false;
            dLantern.add(dLantern._meshLight);            
        });
    }    
            
    constructor(){
        super();

        this.init();
    }

}