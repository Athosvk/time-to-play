/**
 * Created by Alexander on 18/09/2014.
 */

    function levelSetUp() {
        var style =  { font: "22px Arial", fill: '#fff', align: "right"}
    text = game.add.text((game.width), 50, "You currently have " + blocksAvailable + " blocks available!" , style)
        text.fixedToCamera = true
        var posy = Math.round((game.input.y + game.camera.y - 25)/50)
        Rand = new Phaser.RandomDataGenerator
        text.anchor.set(1.1)
    blocks = game.add.group();
    blocks.enableBody = true;
}
    function levelupdate() {
    mouseClick();
}

    function grid() {
        for (i = 0; i < 100; i++) {
            var posx = Math.round((game.input.x + game.camera.x - 25)/50)
            var posy = Math.round((game.input.y + game.camera.y - 25)/50)
        }
    }
    function mouseClick() {
        if (game.input.activePointer.isDown && blocksAvailable > 0) {
            if (!beenclicked) {
                beenclicked = true
            if (!collision()) {
                blocksAvailable--
                
                text.text = "You currently have " + blocksAvailable + " blocks available!"
                new block()
            }
        }
        } else {
            beenclicked = false
        }
    }

    function collision() {
        if ((game.input.x > game.width/2)) {
            return false
        } else {
            return true
        }
    }