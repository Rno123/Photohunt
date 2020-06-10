var gamePlayState = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize:
  function GamePlay () {
    Phaser.Scene.call(this, {key: 'GamePlay'});
  },

  preload:
  function() {},

  create:
  function() {
    // Initialising the values of win and lose conditions and score
    gameWon = false;
    gameOver = false;
    nextSet = false;
    score = 0;

    // Drawing a blank canvas and adding text to the page
    gameplay_bg = this.add.rectangle(400, 300, 800, 600, '0x2d2d2d');
    img_keys = get9RndImages(images);
    console.log(img_keys);
    test_index = Math.floor(Math.random() * 2);
    test = img_keys[test_index];
    scoreText = this.add.text(16, 550, 'Score:' + score, { fontSize: '32px', fill: '#fff' });
    reqText = this.add.text(16, 16, 'Please choose the: ' + test, { fontSize: '32px', fill: '#fff' });

    // Adding 9 similar sprites to the page
    for (var i = 0; i < 9; i++) {
      let xx = ((i%3) * 200 % 600) + 200;
      let yy = Math.floor((i+3)/3) * 150;
      console.log(xx);
      console.log(yy);
      let photo = new Photo({scene:this,x:xx,y:yy, key:img_keys[i], id: i});
    };
  },

  update:
  function() {
    // If sprite passes GameOver = true, calls GameOver scene
    if (gameOver) {
      console.log("game is over")
      game.scene.start('GameOver');
    };
    // If sprite passes nextSet = true, re-randomize and render images and update score
    if (nextSet) {
      img_keys = get9RndImages(images);
      test_index = Math.floor(Math.random() * 2);
      test = img_keys[test_index];
      score += 1;

      scoreText.setText('Score: ' + score);
      reqText.setText('Please choose the: ' + test);

      for (var i = 0; i < 9; i++) {
        let xx = ((i%3) * 200 % 600) + 200;
        let yy = Math.floor((i+3)/3) * 150;
        console.log(xx);
        console.log(yy);
        let photo = new Photo({scene:this,x:xx,y:yy, key:img_keys[i], id: i});
      };

      // Set to false to prevent continuous looping
      nextSet = false;
    }
  }
});

// function to acquire an array of 9 random image keys from the initial img_array
function get9RndImages(img_array) {
  var int_array = [];
  var rand_img = [];
  while (int_array.length < 9){
    var int_to_add = Math.floor(Math.random() * 6 );
    int_array.push(int_to_add);
  };
  for (var num in int_array) {
    var index = int_array[num];
    rand_img.push(img_array[index]);
  };
  return rand_img;
};


myGame.scenes.push(gamePlayState);
