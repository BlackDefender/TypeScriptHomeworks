import IEmployee from "./IEmployee";

export default interface IEmploymentAgency {
    hire(): IEmployee;
    batchHire(count: number): IEmployee[];
}
