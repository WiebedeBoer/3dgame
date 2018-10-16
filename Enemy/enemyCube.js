class EnemyCube extends THREE.Group {

    init (){

        var dEnemyCube = this;

            var enemyCubeGeometry = new THREE.CubeGeometry(10,10,10,1,1,1);
            var enemyCubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true, visible:true } );
            var enemyCube = new THREE.Mesh( enemyCubeGeometry, enemyCubeMaterial );
            enemyCube.position.set(this.pX, 12, this.pZ);
            dEnemyCube.add(enemyCube);
                   
    }    
            
    constructor(pX,pY,pZ){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.init();
    }
}