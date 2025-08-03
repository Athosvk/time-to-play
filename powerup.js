
function createPowerup(posx, posy) {
    powerups.create(posx*50, posy*50, 'powerup5');
}

function pickupPowerup(player, powerup) {
    blocksAvailable += 5;
    text.text = "You currently have " + blocksAvailable + " blocks available!"
    powerup.kill();
}