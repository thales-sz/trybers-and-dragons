import { Mage, Necromancer, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Dwarf, Elf, Orc } from './Races';

const player1 = new Character(
  'Bradock',
  new Elf('Bradock', 30),
  new Warrior('Bradock'),
);
player1.levelUp();
player1.levelUp();

const player2 = new Character(
  'Welf',
  new Dwarf('Welf', 30),
  new Mage('Welf'),
);

const player3 = new Character(
  'Barney',
  new Orc('Barney', 30),
  new Necromancer('Barney'),
);

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => battle.fight());
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};