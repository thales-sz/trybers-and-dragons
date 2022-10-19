import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private playerE: Character | Fighter,
    private monsters: Array<Monster | SimpleFighter | Fighter>,
  ) {
    super(playerE);
  }

  fight(): number {
    this.monsters.forEach((monster) => {
      while (this.playerE.lifePoints > 0 && monster.lifePoints > 0) {
        this.playerE.attack(monster);
        monster.attack(this.player);
      }
    });
    return super.fight();
  }
}

export default PVE;