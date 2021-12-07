import kaboom from "kaboom";
import game from "./src/scenes/game";
import { rootGameImageFolderPath } from "./src/utils/game-utils";
import gameOver from "./src/scenes/game-over";
import menu from "./src/scenes/menu";
kaboom();
// Load assets
loadSprite("background", `${rootGameImageFolderPath}/bg.jpg`);
loadSprite("player", `${rootGameImageFolderPath}/sara.png`, {
  sliceX: 13,
  sliceY: 21,
  anims: {
    idle: {
      from: 13,
      to: 14,
      speed: 5,
      loop: true,
    },
    run: {
      from: 117,
      to: 125,
      speed: 20,
      loop: true,
    },
    jump: 18,
    attack: {
      from: 222,
      to: 224,
      speed: 20,
      loop: false,
    },
  },
});
loadSprite("wall", `${rootGameImageFolderPath}/dirt.png`);
loadSprite("ground", `${rootGameImageFolderPath}/ground.png`);
loadSprite("coin", `${rootGameImageFolderPath}/coin.png`);
loadSprite("door", `${rootGameImageFolderPath}/door.png`);
scene("game", game);
scene("gameOver", gameOver);
scene("menu", menu);
go("menu");
