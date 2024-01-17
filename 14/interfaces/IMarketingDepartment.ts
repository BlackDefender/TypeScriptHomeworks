import IClient from "./IClient";

export default interface IMarketingDepartment {
    sendSpam(message: string): void;
    addClient(client: IClient): void;
}
