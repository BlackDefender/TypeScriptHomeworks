export default interface IEmployee {
    readonly firstName: string;
    readonly lastName: string;
    position: string;
    salary: number;
    bankAccount: string;
    contact: string;
    getSalary(money: number): void;
    get fullName(): string;
}
