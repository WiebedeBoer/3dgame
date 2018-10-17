class Enemy extends THREE.Group {
    init(){
        
        var refEnemy, enemy;

        refEnemy = this;

        enemy = new THREE.Group();

        loadOBJModel("Models/Dummy/", "model.obj", "Models/Dummy/", "materials.mtl", (mesh) => {
            mesh.scale.set(10, 10, 10);
            enemy.add(mesh);
        });

        enemy.rotation.y = 90 * Math.PI / 180;

        
        this.enemyCubeGeometry = new THREE.CubeGeometry(10,10,10,1,1,1);
        var enemyCubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true, visible:true } );
        var enemyCubeMesh = new THREE.Mesh( this.enemyCubeGeometry, enemyCubeMaterial );
        enemy.add(enemyCubeMesh);
        this.position.set(this.position.x, this.position.y, this.position.z);


        refEnemy.add(enemy);

        
    }

    constructor(pX,pY,pZ){
        super();
        this.position.x = pX;
        this.position.y = pY;
        this.position.z = pZ;
        this.init();
        //Creating and locating the HitboxCube of the enemy.
        this.enemyCube = new EnemyCube(pX, pY, pZ);
        scene.add(this.enemyCube);
    }
}