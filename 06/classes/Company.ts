import IProductionDepartment from "../interfaces/IProductionDepartment";
import IEmployee from "../interfaces/IEmployee";
import Accounting from "./Accounting";
import ICompany from "../interfaces/ICompany";
import IAccounting from "../interfaces/IAccounting";
import IDepartment from "../interfaces/IDepartment";
import ISales from "../interfaces/ISales";
import ProductionDepartment from "./ProductionDepartment";
import IContract from "../interfaces/IContract";
import isProductionDepartment from "../helpers/isProductionDepartment";

export default class Company implements ICompany {
  public allDepartments: IDepartment[] = [];
  public employees: IEmployee[] = [];
  public branch!: IDepartment;
  public accounting!: IAccounting;
  public sales!: ISales;

  public constructor(public readonly name: string) {}

  public addDepartment(department: IProductionDepartment): void {
    this.allDepartments.push(department);
  }

  public removeDepartment(department: IProductionDepartment): boolean {
    const index: number = this.allDepartments.indexOf(department);
    if (index === -1) return false;
    this.allDepartments.splice(index, 1);
    return true;
  }

  public addEmployee(employee: IEmployee, department: IDepartment): void {
    this.employees.push(employee);
    department.addEmployee(employee);
  }

  public removeEmployee(employee: IEmployee): boolean {
    const index: number = this.employees.indexOf(employee);
    if (index === -1) return false;
    this.employees.splice(index, 1);
    return true;
  }

  public addAccountingDepartment(accounting: Accounting): void {
    this.accounting = accounting;
    this.allDepartments.push(accounting);
  }

  public addBranchDepartment(branch: IDepartment): void {
    this.branch = branch;
    this.allDepartments.push(branch);
  }

  public addSalesDepartment(sales: ISales): void {
    this.sales = sales;
    this.allDepartments.push(sales);
  }

  public performContract(contract: IContract): void {
    this.allDepartments.forEach((department: IDepartment): void => {
      if (isProductionDepartment(department)) {
        department.performContractWork();
      }
    });
    this.accounting.receiveMoneyFromContract(contract.price);
  }

  public departmentByName(name: string): IDepartment | undefined {
    return this.allDepartments.find(
      (department: IDepartment) =>
        department.name.toLowerCase() === name.toLowerCase(),
    );
  }

  public moveEmployeeBetweenDepartments(
    employee: IEmployee,
    fromDepartmentName: string,
    toDepartmentName: string,
  ): boolean {
    const fromDepartment: IDepartment | undefined =
      this.departmentByName(fromDepartmentName);
    const toDepartment: IDepartment | undefined =
      this.departmentByName(toDepartmentName);
    if (!fromDepartment || !toDepartment) return false;
    if (!fromDepartment.removeEmployee(employee)) return false;
    toDepartment.addEmployee(employee);
    return true;
  }
}
