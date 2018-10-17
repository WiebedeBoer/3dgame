// Move enemyCube camera towards enemy
function CubeMovement() {
    enemyCubeList.forEach(function(nenemyCube) {
        var nenemyPosition = new THREE.Vector3(nenemyCube.position.x, nenemyCube.position.y, nenemyCube.position.z);
        var enemyPosition = new THREE.Vector3(enemy.position.x, enemy.position.y, enemy.position.z);
        new TWEEN.Tween(nenemyCube.position)
            .to(enemy.position, 100)
            .start();
            TWEEN.update();
    });
}
