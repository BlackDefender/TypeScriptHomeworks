import IEmploymentAgency from "../interfaces/IEmploymentAgency";
import EmploymentAgency from "../classes/EmploymentAgency";
import Employee from "../classes/Employee";

describe('EmploymentAgency', () => {
    const employmentAgency: IEmploymentAgency = EmploymentAgency.getInstance();

    it('should be instance of EmploymentAgency', () => {
        expect(employmentAgency).toBeInstanceOf(EmploymentAgency);
    });

    it('should be instance of Employee', () => {
        expect(employmentAgency.hire()).toBeInstanceOf(Employee);
    });

    it('should be array of Employee', () => {
        const employees = employmentAgency.batchHire(1);
        expect(employees).toBeInstanceOf(Array);
        expect(employees[0]).toBeInstanceOf(Employee);
    });
});
