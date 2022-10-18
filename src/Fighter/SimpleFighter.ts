interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackDamage: number): number;
}

export default SimpleFighter;