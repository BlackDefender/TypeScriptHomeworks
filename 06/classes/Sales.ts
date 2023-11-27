import Department from "./Department";
import ISales from "../interfaces/ISales";
import ICompany from "../interfaces/ICompany";
import Contract from "./Contract";

export default class Sales extends Department implements ISales {
  public constructor(
    public readonly name: string,
    public readonly domain: string,
    public readonly company: ICompany,
  ) {
    super(name, domain);
  }
  public signContract(description: string, price: number): void {
    this.company.performContract(new Contract(description, price));
  }
}
