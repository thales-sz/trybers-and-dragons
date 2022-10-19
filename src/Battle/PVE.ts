import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private playerE: Character | SimpleFighter | Fighter,
    private monsters: Array<Monster | SimpleFighter | Fighter>,
  ) {
    super(playerE);
  }

  fight(): number {
    while (this.playerE.lifePoints > 0
      || !this.monsters.every((enemy) => enemy.lifePoints === 0)) {
      this.monsters.forEach((defEnemy) => this.playerE.attack(defEnemy));
      this.monsters.forEach((attcEnemy) => attcEnemy.attack(this.playerE));
    }
    return super.fight();
  }
}

export default PVE;