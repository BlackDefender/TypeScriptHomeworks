import IEmploymentAgency from "../interfaces/IEmploymentAgency";
import IEmployee from "../interfaces/IEmployee";
import Employee from "./Employee";
import {faker} from "@faker-js/faker";

export default class EmploymentAgency implements IEmploymentAgency{
    private static instance: IEmploymentAgency;

    private constructor() {}

    static getInstance(): IEmploymentAgency {
        if (this.instance === undefined) {
            this.instance = new this();
        }
        return this.instance;
    }
    batchHire(count: number): IEmployee[] {
        return (new Array(count)).fill(null).map(this.hire.bind(this));
    }

    hire(): IEmployee {
        return new Employee(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.person.jobTitle(),
            faker.number.int({ min: 5, max: 100 }) * 100,
            faker.finance.creditCardNumber(),
            faker.phone.number(),
        );
    }
}
