import Employee from "../classes/Employee";
import { fa, faker } from "@faker-js/faker";
import IDepartment from "../interfaces/IDepartment";
import EmployeeStatus from "../enums/EmployeeStatus";

const createRandomUser = (
  department: IDepartment,
  status: EmployeeStatus,
): Employee =>
  new Employee(
    faker.person.firstName(),
    faker.person.lastName(),
    faker.number.int({ min: 5, max: 100 }) * 100,
    faker.finance.creditCardNumber(),
    department,
    status,
    faker.phone.number(),
  );

export default createRandomUser;
