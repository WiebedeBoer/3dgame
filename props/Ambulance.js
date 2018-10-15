class Ambulance extends THREE.Group {

    init (){

        var dAmbu = this;
        loadOBJModel("Models/Ambulance_01/","Ambulance_01.obj","Models/Ambulance_01/","Ambulance_01.mtl", (mesh) => {
            mesh.scale.x = 5;
            mesh.scale.y = 5;
            mesh.scale.z = 5;
            dAmbu.position.x = this.pX;
            dAmbu.position.y = this.pY;
            dAmbu.position.z = this.pZ;
            dAmbu.add(mesh);

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