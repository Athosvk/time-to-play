
    var game = new Phaser.Game(1200, 800, Phaser.AUTO, 'gameDiv', { preload: preload, create: create, update: update,  render: render });

    function preload() {

    game.load.image('bg', 'assets/bg.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('player', 'assets/player.png');
    game.load.image('frameLeft', 'assets/frameleft.png');
    game.load.image('frameRight', 'assets/frameright.png');
    game.load.image('tileGrid', 'assets/grid.png');

    game.load.image('gameover', 'assets/game_over.png');
    game.load.image('wonGame', 'assets/won_game.png');

    game.load.image('block', 'assets/block.png');

    game.load.image('powerup2', 'assets/Powerup-2.png');
    game.load.image('powerup5', 'assets/Powerup-5.png');
    game.load.image('0block', 'assets/ablock.png');
    game.load.image('1block', 'assets/bblock.png');
    game.load.image('2block', 'assets/cblock.png');
    }

    var player;
    var powerups; 
    var platforms;
    var cursors;
    var frameLeft, frameRight;

    var hudLayer, bgLayerPlayer1, bgLayerPlayer2, gridLayer, objectsLayer, menuLayer, gameOverLayer, wonGameLayer;
    var grid, grid1, grid2;
    var blocks;
    var grid;
    var lolz;
    var text
    var blocksAvailable = 25;
    var beenClicked = false;

    var cameraVelocity; 
    var gameOver, wonGame;

    function create() {

    game.world.setBounds(0, 0, 20000, 800);
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
 
        
    bgLayer = game.add.group();
    bgLayer.z = 0;
    
    bgLayerPlayer2 = game.add.group();
    bgLayerPlayer2.z = 0;

    gridLayer = game.add.group();
    gridLayer.z = 1;
            
    bgLayerPlayer1 = game.add.group();
    bgLayerPlayer1.z = 2;
        
    objectsLayer = game.add.group();
    objectsLayer.z = 3;  
        
    hudLayer = game.add.group();
    hudLayer.z = 2;
       
    gameOverLayer = game.add.group();
    gameOverLayer.z = 3;
        
    wonGameLayer = game.add.group();
    wonGameLayer.z = 8;
       
        
    //  A simple background for our game
    var bg = new Phaser.Sprite(game,0, 0, 'bg');
    bgLayer.add(bg);
    gameOver = new Phaser.Sprite(game, 0, 0, 'gameover');
    gameOver.fixedToCamera = true;
    gameOver.visible = false;
    gameOverLayer.add(gameOver);
    wonGame = new Phaser.Sprite(game, 0, 0, 'wonGame');
    wonGame.fixedToCamera = true;
    wonGame.visible = false;
    wonGameLayer.add(wonGame);
            
    menuLayer = game.add.group();
    menuLayer.z = 5;
       
        
    //  A simple background for our game
    var bgPlayer2 = new Phaser.Sprite(game,600, 0, 'bg');
    bgLayerPlayer2.add(bgPlayer2);
    bgLayerPlayer2.fixedToCamera = true;   
        
    grid = new Phaser.Sprite(game,600, 0, 'tileGrid');
    grid1 = new Phaser.Sprite(game,1200, 0, 'tileGrid');
    grid2 = new Phaser.Sprite(game,1800, 0, 'tileGrid');
    gridLayer.add(grid); 
    gridLayer.add(grid1);
    gridLayer.add(grid2);
        
        
    var bgPlayer1 = new Phaser.Sprite(game,0, 0, 'bg');
    bgLayerPlayer1.add(bgPlayer1); 
    bgLayerPlayer1.fixedToCamera = true; 
        
    frameLeft = new Phaser.Sprite(game,0, 0, 'frameLeft');
    frameRight = new Phaser.Sprite(game,600, 0, 'frameRight');
    frameLeft.fixedToCamera = true;
    frameRight.fixedToCamera = true;
    hudLayer.add(frameLeft);
    hudLayer.add(frameRight);

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    powerups = game.add.group(); 
    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;
    powerups.enableBody = true; 

    //the setup of the leveledit yay
    levelSetUp()

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 50, 'block');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(62, 1);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

        // The player and its settings
    player = new Phaser.Sprite(game,300, game.world.height - 150, 'player');
        
    objectsLayer.add(platforms);  
    objectsLayer.add(player);
    objectsLayer.add(blocks);
    objectsLayer.add(powerups);
    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.

    player.body.collideWorldBounds = false;
    player.body.gravity.y = 1250;

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
    cameraVelocity = 110; 
        
    createPowerup(17, 11, 2);
    createPowerup(28, 7, 2);
    createPowerup(38, 13, 2);
    createPowerup(52, 13, 2);
    createPowerup(70, 5, 2);
    createPowerup(84, 2, 2);
           new platformblock(17,12);
        new platformblock(17,13);
        new platformblock(17,14);
        
    new platformblock(25,11);
    new platformblock(26,11);
    new platformblock(27,11);
    new platformblock(28,11);
    new platformblock(29,11);
        
    new platformblock(35,10);
        new platformblock(35,11);
        
    new platformblock(36,10);
        new platformblock(36,11);
        
    new platformblock(37,10);
        new platformblock(37,11);
        
    new platformblock(38,10);
        new platformblock(38,11);
        
    new platformblock(39,7);
        new platformblock(39,8);
        new platformblock(39,9);
        new platformblock(39,10);
        new platformblock(39,11);
        
    new platformblock(49,14);
        
    new platformblock(50,13);
        new platformblock(50,14);
        
    new platformblock(51,12);
        new platformblock(51,13);
        new platformblock(51,14);
        
    new platformblock(53,12);
        new platformblock(53,13);
        new platformblock(53,14);
        
    new platformblock(54,13);
        new platformblock(54,14);
        
    new platformblock(55,14);
        
    new platformblock(62,14);
        new platformblock(62,15);
        
    new platformblock(63,14);
        new platformblock(63,15);
        
    new platformblock(70,7);
        new platformblock(70,8);
        
    new platformblock(70,14);
        new platformblock(70,15);
    
    new platformblock(71,7);
        new platformblock(71,8);
        
    new platformblock(71,14);
        new platformblock(71,15);
        
    new platformblock(74,9);
        new platformblock(74,10);
        
    new platformblock(75,9);
        new platformblock(75,10);
        
    new platformblock(87,14);
        new platformblock(87,15);
        
    new platformblock(88,14);
        
    new platformblock(89,14);
        
    new platformblock(84,3);
        new platformblock(84,4);
        new platformblock(84,5);
        new platformblock(84,6);
        new platformblock(84,7);
        new platformblock(84,8);
        new platformblock(84,9);
        
    new platformblock(84,12);
        new platformblock(84,13);
        new platformblock(84,14);
        
    new platformblock(87,4);
        new platformblock(87,5);
        new platformblock(87,6);
        new platformblock(87,7);
        new platformblock(87,8);
        new platformblock(87,9);
        new platformblock(87,10);
        new platformblock(87,11);
        new platformblock(87,12);
        new platformblock(87,13);
        new platformblock(87,14);
        
    new platformblock(88,4);
        
    new platformblock(89,5);
        
    new platformblock(91,7);
        
    new platformblock(93,10);
        new platformblock(93,11);
        new platformblock(93,12);
        new platformblock(93,13);
        new platformblock(93,14);
        new platformblock(93,15);
        
    new platformblock(94,10);
        
    new platformblock(95,10);
    
    new platformblock(96,10);
        
    new platformblock(96,12);
        
    new platformblock(96,15);
        
    new platformblock(97,10);
    
    new platformblock(97,12);
        
    new platformblock(97,15);
        
    new platformblock(98,12);
        
    new platformblock(98,15);
        
    new platformblock(99,0);
        new platformblock(99,1);
        new platformblock(99,2);
        new platformblock(99,3);
        new platformblock(99,4);
        new platformblock(99,5);
        new platformblock(99,6);
        new platformblock(99,7);
        new platformblock(99,8);
        new platformblock(99,9);
        new platformblock(99,10);
        new platformblock(99,11);
        new platformblock(99,12);
        new platformblock(99,13);
        new platformblock(99,14);
        new platformblock(99,15);
        
    
    }
    function update() {

        game.camera.x += (cameraVelocity * (game.time.elapsed/1000));
        levelupdate()
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(player, blocks);
        game.physics.arcade.overlap(player, powerups, pickupPowerup, null, this);
         
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.body.velocity.y = -550;  
        }

        if (cursors.left.isDown) {
            player.body.velocity.x = -170; 
        }
        else if (cursors.right.isDown) {
            player.body.velocity.x = 170; 
        }
        else  {
            player.body.velocity.x = 0;
        }

    
        if (player.body.position.x >= game.camera.x + game.camera.width/2 - player.body.width - 10)
        {
             player.body.position.x = game.camera.x + game.camera.width/2 - player.body.width - 10;
        }
        if (player.body.position.y > 800 || player.body.position.x < game.camera.x - player.body.width)
        {
            gameOver.visible = true;
        }
        if (player.body.position.y > (12*50) && player.body.position.y < (14*50)  && player.body.position.x > (97*50))
        {
            wonGame.visible = true;
        }

        if (game.camera.x > grid.x){
            grid.x = grid2.x +600;
        }
        if (game.camera.x > grid1.x){
            grid1.x = grid.x +600;
        }
        if (game.camera.x> grid2.x){
            grid2.x = grid1.x +600;
        }

    }
    function render() {
        //game.debug.cameraInfo(game.camera, 32, 32);
    }
