import IContract from "../interfaces/IContract";

export default class Contract implements IContract {
  constructor(
    public description: string,
    public price: number,
  ) {}
}
