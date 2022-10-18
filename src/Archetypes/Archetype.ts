import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    private name: string,
    private special: number = 0,
    private cost: number = 0,
  ) {}

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}