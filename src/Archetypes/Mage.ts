import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    this._energyType = 'mana';
    Mage.addArchetypeInstance();
  }

  private static addArchetypeInstance(): void {
    this._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}

export default Mage;

const mage1 = new Mage('Maguinho', 5, 15);

console.log(mage1.name);