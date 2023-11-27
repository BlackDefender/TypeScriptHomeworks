import IDepartment from "./IDepartment";
import IEmployee from "./IEmployee";
import ISales from "./ISales";
import IAccounting from "./IAccounting";
import IProductionDepartment from "./IDepartment";
import Employee from "../classes/Employee";
import IContract from "./IContract";

export default interface ICompany {
  readonly name: string;
  allDepartments: IDepartment[];
  employees: IEmployee[];
  branch: IDepartment;
  accounting: IAccounting;
  sales: ISales;

  addDepartment(department: IProductionDepartment): void;
  removeDepartment(department: IProductionDepartment): boolean;
  addEmployee(employee: Employee, department: IDepartment): void;
  removeEmployee(employee: Employee): boolean;
  addAccountingDepartment(accounting: IAccounting): void;
  addBranchDepartment(branch: IDepartment): void;
  addSalesDepartment(sales: ISales): void;
  performContract(contract: IContract): void;
  departmentByName(name: string): IDepartment | undefined;
  moveEmployeeBetweenDepartments(
    employee: IEmployee,
    fromDepartmentName: string,
    toDepartmentName: string,
  ): boolean;
}
