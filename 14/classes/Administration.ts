import IAdministration from "../interfaces/IAdministration";
import IAnimal from "../interfaces/IAnimal";
import IEmployee from "../interfaces/IEmployee";
import IZooInternal from "../interfaces/IZooInternal";
import EmploymentAgency from "./EmploymentAgency";
import PetShop from "./PetShop";
import IPetShop from "../interfaces/IPetShop";
import ESpecies from "../custom-types/ESpecies";
import IClient from "../interfaces/IClient";

export default class Administration implements IAdministration {
    private zoo: IZooInternal;

    constructor(zoo: IZooInternal) {
        this.zoo = zoo;
    }
    addAnimal(species: ESpecies): void {
        const petShop:IPetShop = PetShop.getInstance();
        this.zoo.animals.push(petShop.animal(species));
    }

    removeAnimal(animal: IAnimal): void {
        const index: number = this.zoo.animals.indexOf(animal);
        if (index === -1) {
            console.log('Animal not found');
            return;
        }
        this.zoo.animals.splice(index, 1);
    }

    hireEmployee(): void {
        const employee: IEmployee = EmploymentAgency.getInstance().hire();
        this.zoo.employees.push(employee);
    }

    hireEmployees(count: number): void {
        const employees: IEmployee[] = EmploymentAgency.getInstance().batchHire(count)
        this.zoo.employees.push(...employees);
    }

    fireEmployee(employee: IEmployee): void {
        const index: number = this.zoo.employees.indexOf(employee);
        if (index === -1) {
            console.log('Employee not found');
            return;
        }
        this.zoo.employees.splice(index, 1);
    }

    generateSpam(): void {
        this.zoo.marketingDepartment.sendSpam('Lorem ipsum');
    }

    notifyAllVisitors(message: string): void {
        // notify visitors using reproducer
    }
}
