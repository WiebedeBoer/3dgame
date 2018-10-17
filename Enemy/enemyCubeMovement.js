function CubeMovement() {

    enemyList.forEach(function(enemy) {
        new TWEEN.Tween(nenemyCube.position)
              .to(enemy.position, 10)
              .start();
              TWEEN.update();
    });
}
