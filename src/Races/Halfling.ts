import Race from './Race';

class Halfling extends Race {
  private static _instances = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.addRaceInstances();
  }

  private static addRaceInstances(): void {
    this._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instances;
  }
}

export default Halfling;