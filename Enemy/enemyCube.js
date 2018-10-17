class EnemyCube extends THREE.Group {

    init (){

        var dEnemyCube = this;
        this.enemyCubeGeometry = new THREE.CubeGeometry(10,10,10,1,1,1);
        var enemyCubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true, visible:true } );
        var enemyCubeMesh = new THREE.Mesh( this.enemyCubeGeometry, enemyCubeMaterial );
        dEnemyCube.add(enemyCubeMesh);
        //this.position.set(this.position.x, this.position.y, this.position.z);
    }

    constructor(pX,pY,pZ){
        super();
        this.position.x = pX;
        this.position.y = pY;
        this.position.z = pZ;
        this.init();
    }
}
