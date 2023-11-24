import Department from "./Department";
import ISales from "../interfaces/ISales";
import ICompany from "../interfaces/ICompany";
import Contract from "./Contract";

export default class Sales extends Department implements ISales {
  constructor(
    public name: string,
    public domain: string,
    public company: ICompany,
  ) {
    super(name, domain);
  }
  signContract(description: string, price: number): void {
    this.company.performContract(new Contract(description, price));
  }
}
