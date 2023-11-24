import Employee from "./Employee";
import IDepartment from "../interfaces/IDepartment";
import IEmployee from "../interfaces/IEmployee";

export default class Department implements IDepartment {
  public employees: Employee[] = [];

  constructor(
    public name: string,
    public domain: string,
  ) {}

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  public removeEmployee(employee: Employee): boolean {
    const index: number = this.employees.indexOf(employee);
    if (index === -1) return false;
    this.employees.splice(index, 1);
    return true;
  }
  public removeEmployeeByIndex(index: number): Employee | false {
    const removedEmployees: Employee[] = this.employees.splice(index, 1);
    if (removedEmployees.length === 0) return false;
    return removedEmployees[0];
  }

  get totalSalary(): number {
    return this.employees.reduce(
      (sum, employee: IEmployee) => sum + employee.salary,
      0,
    );
  }
}
