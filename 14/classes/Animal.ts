import IAnimal from "../interfaces/IAnimal";
import ESpecies from "../custom-types/ESpecies";

export default class Animal implements IAnimal {
    constructor(
        public readonly name: string,
        public readonly birthYear: number,
        public species: ESpecies,
        public gender: string,
        public healthStatus: string
    ) {}

    get age(): number {
        return (new Date()).getFullYear() - this.birthYear;
    }

}
