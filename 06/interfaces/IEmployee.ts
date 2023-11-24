import IDepartment from "./IDepartment";
import EmployeeStatus from "../enums/EmployeeStatus";

export default interface IEmployee {
  firstName: string;
  lastName: string;
  salary: number;
  bankAccount: string;
  department: IDepartment;
  status: EmployeeStatus;
  contact: string;

  doSomeJob(): void;
  getSalary(money: number): void;
  get fullName(): string;
  goToVacation(days: number): void;
  goToUnpaidVacation(days: number): void;
}
