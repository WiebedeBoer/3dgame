class EnemyCube extends THREE.Group {

    init (){

        var dEnemyCube = this;

            var enemyCubeGeometry = new THREE.CubeGeometry(10,10,10,1,1,1);
            var enemyCubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true, visible:true } );
            var enemyCubeMesh = new THREE.Mesh( enemyCubeGeometry, enemyCubeMaterial );
            enemyCubeMesh.position.set(this.pX, 12, this.pZ);
            dEnemyCube.add(enemyCubeMesh);
            //collidablePropMeshList.push(enemyCubeMesh);        
    }    
            
    constructor(pX,pY,pZ){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.init();
    }
}