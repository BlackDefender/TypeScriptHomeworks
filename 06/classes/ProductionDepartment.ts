import Department from "./Department";
import IProductionDepartment from "../interfaces/IProductionDepartment";
import IEmployee from "../interfaces/IEmployee";
import EmployeeStatus from "../enums/EmployeeStatus";

export default class ProductionDepartment
  extends Department
  implements IProductionDepartment
{
  public performContractWork(): void {
    this.employees
      .filter((employee: IEmployee) => employee.status === EmployeeStatus.Work)
      .forEach((employee: IEmployee) => employee.doSomeJob());
  }
}
