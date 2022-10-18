import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private player1: Character | Fighter,
    private player2: Character | Fighter,
  ) {
    super(player1);
  }
}

export default PVP;