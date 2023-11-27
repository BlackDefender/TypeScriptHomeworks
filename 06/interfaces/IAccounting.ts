import IDepartment from "./IDepartment";

export default interface IAccounting extends IDepartment {
  receiveMoneyFromContract(money: number): void;
  paySalary(): void;
  salaryStatistics(): void;
  get balance(): number;
}
