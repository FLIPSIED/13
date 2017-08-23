import Dungeon from "./Dungeon";
import Inventory from "./Inventory";

export const game = new Dungeon(20);
document.querySelector(".menu-wrapper").innerHTML = "";
game.initialize();
game.buildNewRoom(190);
game.populateRoom();
//play(fx.introSound);
const inventory = new Inventory();

document.onkeyup = e => {
    let x = 0, y = 0;
    switch (e.which) {
        case 37:
            x = -1;
            break;
        case 39:
            x = 1;
            break;
        case 38:
            y = -1;
            break;
        case 40:
            y = 1;
            break;
        case 73:
            inventory.show();
            break;
        case 79:
            inventory.hide();
            break;
        default:
            break;
    }
    game.player.movePlayerTo(game.player.x + x, game.player.y + y);
};