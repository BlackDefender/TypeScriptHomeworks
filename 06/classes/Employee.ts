import IDepartment from "../interfaces/IDepartment";
import EmployeeStatus from "../enums/EmployeeStatus";
import IEmployee from "../interfaces/IEmployee";

export default class Employee implements IEmployee {
  private wallet: number = 0;
  constructor(
    public firstName: string,
    public lastName: string,
    public salary: number,
    public bankAccount: string,
    public department: IDepartment,
    public status: EmployeeStatus,
    public contact: string,
  ) {}

  public doSomeJob(): void {
    // drink tea or coffee
    // work
  }

  public getSalary(money: number): void {
    this.wallet += money;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  goToUnpaidVacation(days: number): void {
    this.status = EmployeeStatus.Vacation;
    setTimeout((): void => {
      this.status = EmployeeStatus.Work;
    }, days * 1000); // one day per second
  }

  goToVacation(days: number): void {
    this.status = EmployeeStatus.UnpaidVacation;
    setTimeout((): void => {
      this.status = EmployeeStatus.Work;
    }, days * 1000); // one day per second
  }
}
