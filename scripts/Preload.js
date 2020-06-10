var preloadState = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize:
  function Preload() {
    Phaser.Scene.call(this, {key: 'Preload'});
  },

  preload:
  function() {
    this.load.image({
      key: 'start_button',
      url: 'assets/start_button.png',
    });

    this.load.image({
      key: 'crimps',
      url: 'assets/crimps.jpg'
    });

    this.load.image({
      key: 'jugs',
      url: 'assets/jugs.jpg'
    });

    this.load.image({
      key: 'pinches',
      url: 'assets/pinches.jpg'
    });

    this.load.image({
      key: 'pockets',
      url: 'assets/pockets.jpg'
    });

    this.load.image({
      key: 'slopers',
      url: 'assets/slopers.jpg'
    });

    this.load.image({
      key: 'volumes',
      url: 'assets/volumes.jpg'
    });
  },

  create:
  function() {
    game.scene.start('MainMenu')
  },

  update:
  function() {

  }
});

myGame.scenes.push(preloadState);
