const meleeAttack = (
  damageDealt,
  targetTag,
  attackHeight,
  attackWidth,
  attackSpeed
) => {
  return {
    damageDealt: damageDealt,
    targetTag: targetTag,
    attackHeight: attackHeight,
    attackWidth: attackWidth,
    attackSpeed: attackSpeed,
    timeSinceLastAttack: 0,
    update() {
      this.timeSinceLastAttack -= dt();
    },

    useMeleeAttack(position) {
      if (this.timeSinceLastAttack > 0) {
        return "failed";
      }
      this.timeSinceLastAttack = attackSpeed;

      this.play("attack");
      const attackRange = add([
        origin("center"),
        pos(position.x, position.y),
        area({ height: attackHeight, width: attackWidth }),
      ]);
      every(targetTag, (target) => {
        if (attackRange.isColliding(target)) {
          target.takeDamage(damageDealt);
        }
      });
      destroy(attackRange);
      return "sucess";
    },
  };
};

export default meleeAttack;
