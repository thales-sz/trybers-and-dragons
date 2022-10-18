import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType;
  
  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    this._energyType = 'stamina';
    Warrior.addArchetypeInstance();
  }

  private static addArchetypeInstance(): void {
    this._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
