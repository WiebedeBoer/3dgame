class Enemy extends THREE.Group {
    init(){
        var refEnemy, enemy, material, geometry;

        refEnemy = this;

        enemy = new THREE.Group();

        loadOBJModel("Models/Dummy/", "model.obj", "Models/Dummy/", "materials.mtl", (mesh) => {
            mesh.scale.set(10, 10, 10);
            enemy.add(mesh);
        });

        enemy.position.x = this.pX;
        enemy.position.y = this.pY;
        enemy.position.z = this.pZ;
        enemy.rotation.y = 90 * Math.PI / 180;
        refEnemy.add(enemy);
    }
    constructor(pX,pY,pZ){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.init();
    }
}
