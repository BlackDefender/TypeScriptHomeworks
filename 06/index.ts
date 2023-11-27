import Company from "./classes/Company";
import Accounting from "./classes/Accounting";
import EmployeeStatus from "./enums/EmployeeStatus";
import batchHire from "./helpers/batchHire";
import IDepartment from "./interfaces/IDepartment";
import Department from "./classes/Department";
import IProductionDepartment from "./interfaces/IProductionDepartment";
import ProductionDepartment from "./classes/ProductionDepartment";
import ISales from "./interfaces/ISales";
import Sales from "./classes/Sales";
import IEmployee from "./interfaces/IEmployee";

const company: Company = new Company("Synergy Inc.");

const accountingDepartment: Accounting = new Accounting(
  "Accounting",
  "Count money",
  company,
);
company.addAccountingDepartment(accountingDepartment);
batchHire(3, accountingDepartment, EmployeeStatus.Work, company);

const branchDepartment: IDepartment = new Department(
  "Branch",
  "Hired, but doing nothing",
);
company.addBranchDepartment(branchDepartment);
batchHire(2, branchDepartment, EmployeeStatus.Work, company);

const salesDepartment: ISales = new Sales("Sales", "Find contracts", company);
company.addSalesDepartment(salesDepartment);
batchHire(2, salesDepartment, EmployeeStatus.Work, company);

type departmentData = [string, string, number];

[
  ["Programming", "lorem ipsum", 3] as departmentData,
  ["Design", "lorem ipsum", 5] as departmentData,
].forEach((data: departmentData) => {
  const department: IProductionDepartment = new ProductionDepartment(
    data[0],
    data[1],
  );
  company.addDepartment(department);
  batchHire(data[2], department, EmployeeStatus.Work, company);
});

const someLazyEmployee: IEmployee = company.branch.employees[0];
const employeeMoved: boolean = company.moveEmployeeBetweenDepartments(
  someLazyEmployee,
  "branch",
  "design",
);
if (employeeMoved) {
  console.log(
    `Employee ${someLazyEmployee.fullName} moved from Branch to Design department`,
  );
} else {
  console.log(`Error: can't move employee ${someLazyEmployee.fullName}`);
}
console.log("");

const programmingDepartment: IDepartment | undefined =
  company.departmentByName("Programming");
if (programmingDepartment instanceof Department) {
  const hardworkingEmployee: IEmployee = programmingDepartment.employees[0];
  hardworkingEmployee.goToVacation(21);
  console.log(`${hardworkingEmployee.fullName} goes to vacation\n`);
}

company.sales.signContract("Fix the button style on the website", 100000);
company.accounting.paySalary();

console.log(
  `${company.name} current balance: ${company.accounting.balance}USD`,
);
console.log("");
console.log("Salary statistics:");
company.accounting.salaryStatistics();
