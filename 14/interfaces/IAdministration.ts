import IAnimal from "./IAnimal";
import IEmployee from "./IEmployee";
import ESpecies from "../custom-types/ESpecies";

export default interface IAdministration {
    hireEmployee(): void;
    hireEmployees(count: number): void;
    fireEmployee(employee: IEmployee): void;
    addAnimal(species: ESpecies): void;
    removeAnimal(animal: IAnimal): void;
    generateSpam(): void;
    notifyAllVisitors(message: string): void;
}
