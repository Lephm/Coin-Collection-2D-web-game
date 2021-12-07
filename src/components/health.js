const health = (initialHealth) => {
  return {
    curHealth: initialHealth,
    onDead: () => {},
    onDamaged: (damage) => {},
    takeDamage(damage) {
      this.onDamaged(damage);
      this.curHealth -= damage;
      if (this.curHealth <= 0) {
        this.onDead();
        destroy(this);
      }
    },
  };
};

export default health;
