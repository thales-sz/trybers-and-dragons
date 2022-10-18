export type EnergyType = {
  mana: string;
  stamina: string;
};

export default interface Energy {
  type_: EnergyType;
  amount: number;
}