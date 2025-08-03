/**
 * Created by Alexander on 18/09/2014.
 */

function block() {
    var posy = Math.round((game.input.y + game.camera.y - 25)/50)
    var posx = Math.round((game.input.x + game.camera.x - 25)/50)
    var blocktype = Rand.between(0, 2)
    var block = blocks.create(posx * 50, posy * 50, blocktype + 'block')
    block.body.immovable = true
    block.enableBody = true
}
function platformblock(posx, posy) {
    var block = blocks.create(posx * 50, posy * 50, 'block')
    block.body.immovable = true
    block.enableBody = true
}