import IEmployee from "./IEmployee";

export default interface IDepartment {
  readonly name: string;
  readonly domain: string;
  employees: IEmployee[];

  addEmployee(employee: IEmployee): void;
  removeEmployee(employee: IEmployee): boolean;
  removeEmployeeByIndex(index: number): IEmployee | false;
  get totalSalary(): number;
}
