class Photo extends Phaser.GameObjects.Sprite{
  constructor(config) {
    super(config.scene, config.x, config.y, config.key, config.id);
    this.setScale(0.5,0.5);
    config.scene.add.existing(this);

    this.key = config.key;
    this.id = config.id;

    this.setInteractive();
    this.on('pointerdown', this.shade);
    this.on('pointerout', this.clear);
    this.on('pointerup', this.checkAns);
  }

  shade() {
    this.setTint(0x808080);
  }

  clear() {
    this.clearTint();
  }

  // Check if the answer matches the test variable in the GamePlay scene which this sprite was created
  checkAns() {
    this.clearTint();
    let answer = this.key;
    console.log("var can be read: " + answer);
    console.log(test);
    if (answer == test) {
      if (score == 4) {
        gameWon = true;
        game.scene.start('GameOver');
      } else {
      nextSet = true;
      }
    } else {
      gameOver = true;
      game.scene.start('GameOver');
    }
  }
}
