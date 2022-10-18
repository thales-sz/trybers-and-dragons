import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    private _name: string,
    private _special: number = 0,
    private _cost: number = 0,
  ) {}

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  get name(): string { return this._name; }

  get cost(): number { return this._cost; }

  get special(): number { return this._special; }

  abstract get energyType(): EnergyType;
}