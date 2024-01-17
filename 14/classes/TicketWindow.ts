import ITicketWindow from "../interfaces/ITicketWindow";
import IClient from "../interfaces/IClient";
import ETicketType from "../custom-types/ETicketType";
import ITicket from "../interfaces/ITicket";
import Ticket from "./Ticket";
import IZooInternal from "../interfaces/IZooInternal";

export default class TicketWindow implements ITicketWindow{
    private revenue: number = 0;
    private zoo: IZooInternal;

    constructor(zoo: IZooInternal) {
        this.zoo = zoo;
    }

    collectRevenue(): number{
        const money: number = this.revenue;
        this.revenue = 0;
        return money;
    }

    sellTicket(client: IClient, type: ETicketType): ITicket {
        const ticket: ITicket = new Ticket(type, client.id);
        this.revenue += ticket.price;
        this.zoo.marketingDepartment.addClient(client);
        return ticket;
    }

}
