import IMarketingDepartment from "../interfaces/IMarketingDepartment";
import IClient from "../interfaces/IClient";

export default class MarketingDepartment implements IMarketingDepartment{
    private clientsList: IClient[];

    constructor() {
        this.clientsList = [];
    }

    addClient(newClient: IClient): void {
        const clientExists: boolean = this.clientsList.some((client: IClient): boolean => client.id === newClient.id);
        if (clientExists) return;
        this.clientsList.push(newClient);
    }

    sendSpam(message: string): void {
        this.clientsList
            .filter((client: IClient): boolean => client.phone !== undefined)
            .forEach((client: IClient): void => {
                // do some really bad stuff.
            });
    }
}
