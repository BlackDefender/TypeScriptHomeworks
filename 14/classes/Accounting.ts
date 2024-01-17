import IZooInternal from "../interfaces/IZooInternal";
import IEmployee from "../interfaces/IEmployee";
import IAccounting from "../interfaces/IAccounting";

export default class Accounting implements IAccounting {
    private budget: number = 0;
    private zoo: IZooInternal;

    constructor(zoo: IZooInternal) {
        this.zoo = zoo;
    }

    buyExpendableMaterials(price: number): void {
        this.budget -= price;
    }

    buyFoodForAnimals(price: number): void {
        this.budget -= price;
    }

    paySalary(): void {
        this.zoo.employees.forEach((employee: IEmployee): void => {
            employee.getSalary(employee.salary);
            this.budget -= employee.salary;
        });
    }

    receiveMoneyFromTicketWindow(): void {
        this.budget += this.zoo.ticketWindow.collectRevenue();
    }

    statistics(): void {
        console.log(`Current budget is ${this.budget}`);
    }

}
