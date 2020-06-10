var gameOverState = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize:
  function GameOver() {
    Phaser.Scene.call(this, {key: 'GameOver'});
  },

  preload:
  function() {},

  create:
  function() {
    // drawing a blank canvas
    gameover_bg = this.add.rectangle(400, 300, 800, 600, '0x2d2d2d');

    // if passed gameOver = true, shows a game over screen with option to restart
    if (gameOver == true) {
      gameover_text = this.add.text(16, 500, 'Game Over', { fontSize: '32px', fill: '#fff' });
      end_button = this.add.text(16, 500, 'Try Again?', { fontSize: '32px', fill: '#fff' }).setInteractive();
      Phaser.Display.Align.In.Center(gameover_text, this.add.zone(400, 100, 800, 600));
      Phaser.Display.Align.In.Center(end_button, this.add.zone(400, 500, 800, 600));
      game.scene.stop('GamePlay');
      end_button.on('pointerup', function () {
        this.clearTint();
        gameOver = false;
        game.scene.keys['GameOver'].sys.sleep();
        game.scene.start('GamePlay');
      });
      end_button.on('pointerdown', function () {
        this.setTint(0x808080);
      });
      end_button.on('pointerout', function () {
        this.clearTint();
      });
    }
    // if passed gameWon = true, shows a victory screen with option to restart
    else if (gameWon == true) {
      gamewon_text = this.add.text(16, 500, 'Game Won', { fontSize: '32px', fill: '#fff' });
      end_button = this.add.text(16, 500, 'Play Again?', { fontSize: '32px', fill: '#fff' }).setInteractive();
      Phaser.Display.Align.In.Center(gamewon_text, this.add.zone(400, 100, 800, 600));
      Phaser.Display.Align.In.Center(end_button, this.add.zone(400, 500, 800, 600));
      game.scene.stop('GamePlay');
      end_button.on('pointerup', function () {
        this.clearTint();
        gameOver = false;
        gameWon = false;
        game.scene.keys['GameOver'].sys.sleep();
        game.scene.start('GamePlay');
      });
      end_button.on('pointerdown', function () {
        this.setTint(0x808080);
      });
      end_button.on('pointerout', function () {
        this.clearTint();
      });
    }
  },

  update:
  function() {
  }
});

myGame.scenes.push(gameOverState);
