import IEmployee from "../interfaces/IEmployee";

export default class Employee implements IEmployee {
    private wallet: number = 0;
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public position: string,
        public salary: number,
        public bankAccount: string,
        public contact: string,
    ) {}

    getSalary(money: number): void {
        this.wallet += money;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
