var mainMenuState = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize:
  function MainMenu () {
    Phaser.Scene.call(this, {key: 'MainMenu'});
  },

  preload:
  function() {

  },

  create:
  function() {
    // Adding the start button and calling the Game Play scene
    start_button = this.add.sprite(200, 200, 'start_button').setInteractive();
    start_button.setScale(0.2, 0.2);
    Phaser.Display.Align.In.Center(start_button, this.add.zone(400, 300, 800, 600));
    start_button.on('pointerup', function () {
      game.scene.start('GamePlay');
    })
  },

  update:
  function() {}
});

myGame.scenes.push(mainMenuState);
