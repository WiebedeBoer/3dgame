class Enemy extends THREE.Group {
    init(){
        var refEnemy, enemy, material, geometry;

        refEnemy = this;

        geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
        material = new THREE.MeshNormalMaterial();
        enemy = new THREE.Mesh(geometry, material);
        enemy.position.x = 0;
        enemy.position.y = 10;
        enemy.position.z = 0;
        refEnemy.add(enemy);
    }
    constructor(){
        super();
        this.init();
    }
}
