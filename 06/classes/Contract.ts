import IContract from "../interfaces/IContract";

export default class Contract implements IContract {
  public constructor(
    public description: string,
    public price: number,
  ) {}
}
