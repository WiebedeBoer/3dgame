function CubeMovement() {
    new TWEEN.Tween(nenemyCube.position)
          .to(enemy.position, 10)
          .start();
          TWEEN.update();
}
