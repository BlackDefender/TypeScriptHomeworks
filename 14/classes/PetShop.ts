import IPetShop from "../interfaces/IPetShop";
import IAnimal from "../interfaces/IAnimal";
import {faker} from "@faker-js/faker";
import Animal from "./Animal";
import ESpecies from "../custom-types/ESpecies";

export default class PetShop implements IPetShop {
    private static instance: IPetShop;

    private constructor() {}

    static getInstance(): IPetShop {
        if (this.instance === undefined) {
            this.instance = new this();
        }
        return this.instance;
    }

    private randomAnimal(species: ESpecies, healthStatus: string): IAnimal {
        const sex = faker.person.sexType();
        const currentYear: number = (new Date()).getFullYear();
        return new Animal(
            faker.person.firstName(sex),
            faker.number.int(currentYear),
            species,
            sex,
            healthStatus,
        );
    }

    animal(spices: ESpecies): IAnimal {
        const healthStatus: string = spices === ESpecies.Ghost ? 'died' : 'healthy';
        return this.randomAnimal(spices, healthStatus);
    }
}
