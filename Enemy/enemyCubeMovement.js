function CubeMovement() {
    new TWEEN.Tween(enemyCube.position)
          .to(enemy.position, 10)
          .start();
          TWEEN.update();
}