import spawnPlayer from "../game-objects/player";
import levels, { levelConfig } from "../game-objects/levels";
import { initializeMeleeEnemy } from "../game-objects/melee-enemy";
const game = (level) => {
  let coinCollected = 0;
  const bg = add([
    sprite("background"),
    pos(height() / 2, width() / 2),
    origin("center"),
    z(-20),
  ]);
  const player = spawnPlayer();
  addLevel(levels[level], levelConfig);
  // Initialize enemy
  every("meleeEnemy", initializeMeleeEnemy);
  const coinDisplayText = add([text(`Coin collected: 0`), pos()]);
  const healthDisplayText = add([text(`HP: ${player.curHealth}`), pos()]);

  onUpdate(() => {
    // Update ui
    coinDisplayText.pos.x = camPos().x - width() / 2;
    coinDisplayText.pos.y = camPos().y - height() / 2;
    healthDisplayText.pos.x = camPos().x - width() / 2;
    healthDisplayText.pos.y = camPos().y - height() / 2 + 100;
    healthDisplayText.text = `HP: ${player.curHealth}`;
    bg.pos = player.pos;
    every("coin", (coin) => {
      if (coin.isColliding(player)) {
        destroy(coin);
        coinCollected++;
        coinDisplayText.text = `Coin collected: ${coinCollected}`;
      }
    });
  });

  player.onDead = () => {
    go("gameOver", { numOfCoins: coinCollected, win: false });
  };
  get("endLevelDoor")[0].onCollide("player", () => {
    go("gameOver", { numOfCoins: coinCollected, win: true });
  });
};
export default game;
