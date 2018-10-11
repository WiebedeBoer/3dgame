class Enemy extends THREE.Group {
    init(){
        var refEnemy, enemy, material, geometry;

        refEnemy = this;

        enemy = new THREE.Group();

        loadOBJModel("Models/Dummy/", "model.obj", "Models/Dummy/", "materials.mtl", (mesh) => {
            mesh.scale.set(10, 10, 10);
            enemy.add(mesh);
        });
        enemy.position.x = 0;
        enemy.position.y = 10;
        enemy.position.z = 0;
        enemy.rotation.y = 90 * Math.PI / 180;
        refEnemy.add(enemy);
    }
    constructor(){
        super();
        this.init();
    }
}
