import IEmployee from "./IEmployee";

export default interface IDepartment {
  name: string;
  domain: string;
  employees: IEmployee[];

  addEmployee(employee: IEmployee): void;
  removeEmployee(employee: IEmployee): boolean;
  removeEmployeeByIndex(index: number): IEmployee | false;
  get totalSalary(): number;
}
