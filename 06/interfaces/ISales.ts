import IDepartment from "./IDepartment";
import ICompany from "./ICompany";

export default interface ISales extends IDepartment {
  company: ICompany;
  signContract(jobSubject: string, price: number): void;
}
