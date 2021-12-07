import health from "../components/health";
import meleeAttack from "../components/melee-attack";
const meleeEnemyAttackRangeHeight = 100;
const meleeEnemyAttackRangeWidth = 100;
const initialMeleeEnemyHealth = 2;

const getMeleeEnemyComponents = () => [
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
  health(initialMeleeEnemyHealth),
  color(255, 0, 154),
  "enemy",
  "meleeEnemy",
  meleeAttack(
    1,
    "player",
    meleeEnemyAttackRangeHeight,
    meleeEnemyAttackRangeWidth,
    5
  ),
];

const initializeMeleeEnemy = (meleeEnemy) => {
  meleeEnemy.play("idle");
  meleeEnemy.onDamaged = (damage) => {
    const amountOfDamagedTextParticle = add([
      pos(meleeEnemy.pos.x, meleeEnemy.pos.y),
      text(`${damage}`, { size: 50 }),
      origin("center"),
      scale(rand(0.2, 1)),
      lifespan(1, { fade: 0.5 }),
      move(UP, rand(60, 240)),
      color(0, 255, 0),
    ]);
  };
  const player = get("player")[0];
  meleeEnemy.onUpdate(() => {
    const attackRange = add([
      area({
        shape: "rect",
        width: meleeEnemyAttackRangeWidth,
        height: meleeEnemyAttackRangeWidth,
      }),
      origin("center"),
      pos(meleeEnemy.pos.x, meleeEnemy.pos.y),
    ]);
    if (attackRange.isColliding(player)) {
      if (player.pos) {
        if (player.pos.x > meleeEnemy.pos.x) {
          meleeEnemy.flipX(true);
        } else {
          meleeEnemy.flipX(false);
        }
      }
      meleeEnemy.useMeleeAttack(meleeEnemy.pos);
    }

    destroy(attackRange);
  });

  meleeEnemy.onAnimEnd("attack", () => {
    meleeEnemy.play("idle");
  });
};

export { initializeMeleeEnemy };

export default getMeleeEnemyComponents;
