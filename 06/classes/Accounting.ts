import Company from "./Company";
import IDepartment from "../interfaces/IDepartment";
import IAccounting from "../interfaces/IAccounting";
import Department from "./Department";
import IEmployee from "../interfaces/IEmployee";

export default class Accounting extends Department implements IAccounting {
  private budget: number = 0;
  public constructor(
    public readonly name: string,
    public readonly domain: string,
    public readonly company: Company,
  ) {
    super(name, domain);
  }

  public receiveMoneyFromContract(money: number): void {
    this.budget += money;
  }

  public paySalary(): void {
    this.company.employees.forEach((employee: IEmployee): void => {
      this.budget -= employee.salary;
      employee.getSalary(employee.salary);
    });
  }

  public get balance(): number {
    return this.budget;
  }

  public salaryStatistics(): void {
    const statistics = this.company.allDepartments
      .map(
        (department: IDepartment) =>
          `${department.name}: ${department.totalSalary} USD`,
      )
      .join("\n");
    console.log(statistics);
  }

  public get totalSalary(): number {
    return this.employees.reduce(
      (sum, employee: IEmployee) => sum + employee.salary,
      0,
    );
  }
}
