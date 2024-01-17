import ESpecies from "../custom-types/ESpecies";

export default interface IAnimal {
    readonly name: string;
    readonly birthYear: number;
    get age(): number;
    species: ESpecies;
    gender: string;
    healthStatus: string;
}
