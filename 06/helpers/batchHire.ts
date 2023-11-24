import IDepartment from "../interfaces/IDepartment";
import EmployeeStatus from "../enums/EmployeeStatus";
import Company from "../classes/Company";
import createRandomEmployee from "./createRandomEmployee";
import IEmployee from "../interfaces/IEmployee";

const batchHire = (
  count: number,
  department: IDepartment,
  status: EmployeeStatus,
  company: Company,
) => {
  for (let i = 0; i < count; i++) {
    const employee: IEmployee = createRandomEmployee(department, status);
    company.addEmployee(employee, department);
  }
};

export default batchHire;
