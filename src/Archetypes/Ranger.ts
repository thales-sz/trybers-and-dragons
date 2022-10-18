import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'stamina';
  
  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    Ranger.addArchetypeInstance();
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

export default Ranger;
