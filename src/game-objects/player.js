import health from "../components/health";
import meleeAttack from "../components/melee-attack";
const MOVE_SPEED = 700;
const JUMP_FORCE = 500;
const playerInitialHealth = 5;
const spawnPlayer = () => {
  const player = add([
    pos(width() / 2, height() / 2),
    origin("center"),
    sprite("player"),
    area({
      shape: "rect",
      width: 40,
      height: 50,
      offset: {
        x: 0,
        y: 1,
      },
    }),
    body(),
    health(playerInitialHealth),
    "player",
    meleeAttack(1, "enemy", 100, 100, 2),
  ]);
  const playAppopirateAnimationDependsOnVelocity = () => {
    if (player.curAnim() === "attack") {
      return;
    }
    if (!player.isGrounded()) {
      player.play("jump");
    } else {
      if ((isKeyDown("a") || isKeyDown("d")) && player.curAnim() !== "run") {
        player.play("run");
      } else if (
        !(isKeyDown("a") || isKeyDown("d")) &&
        player.curAnim() !== "idle"
      ) {
        player.play("idle");
      }
    }
  };
  onKeyPress("space", () => {
    if (player.useMeleeAttack(player.pos) === "failed") {
      burp({ volume: 0.1, speed: 2 });
    }
  });
  onKeyPress("w", () => {
    if (player.isGrounded()) {
      player.jump(JUMP_FORCE);
    }
  });

  onKeyDown("a", () => {
    player.flipX(false);
    player.move(-MOVE_SPEED, 0);
  });

  onKeyDown("d", () => {
    player.flipX(true);
    player.move(MOVE_SPEED, 0);
  });
  player.onUpdate(() => {
    camPos(player.pos);
    playAppopirateAnimationDependsOnVelocity();
  });
  player.onAnimEnd("attack", () => {
    playAppopirateAnimationDependsOnVelocity();
  });
  player.onDamaged = (damage) => {
    const amountOfDamagedTextParticle = add([
      pos(player.pos.x, player.pos.y),
      text(`${damage}`, { size: 50 }),
      origin("center"),
      scale(rand(0.2, 1)),
      lifespan(1, { fade: 0.5 }),
      move(UP, rand(60, 240)),
      color(255, 0, 0),
    ]);
  };
  return player;
};

export default spawnPlayer;
