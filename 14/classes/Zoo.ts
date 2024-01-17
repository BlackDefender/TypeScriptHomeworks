import IZooPublic from "../interfaces/IZooPublic";
import IClient from "../interfaces/IClient";
import ETicketType from "../custom-types/ETicketType";
import ITicket from "../interfaces/ITicket";
import ITicketWindow from "../interfaces/ITicketWindow";
import IGate from "../interfaces/IGate";
import TicketWindow from "./TicketWindow";
import Gate from "./Gate";
import IAdministration from "../interfaces/IAdministration";
import ICurrentVisitors from "../interfaces/ICurrentVisitors";
import IAnimal from "../interfaces/IAnimal";
import IZooInternal from "../interfaces/IZooInternal";
import IEmployee from "../interfaces/IEmployee";
import IMarketingDepartment from "../interfaces/IMarketingDepartment";
import Accounting from "./Accounting";
import Administration from "./Administration";
import MarketingDepartment from "./MarketingDepartment";
import CurrentVisitors from "./CurrentVisitors";
import IAccounting from "../interfaces/IAccounting";
import TTicketOrder from "../custom-types/TTicketOrder";

export default class Zoo implements IZooPublic, IZooInternal {
    ticketWindow: ITicketWindow;
    gate: IGate;
    accounting: IAccounting;
    administration: IAdministration;
    animals: IAnimal[];
    employees: IEmployee[];
    marketingDepartment: IMarketingDepartment;
    currentVisitors: ICurrentVisitors;

    constructor() {
        this.ticketWindow = new TicketWindow(this);
        this.gate = new Gate(this);
        this.accounting = new Accounting(this);
        this.administration = new Administration(this);
        this.animals = [];
        this.employees = [];
        this.marketingDepartment = new MarketingDepartment();
        this.currentVisitors = new CurrentVisitors();
    }


    visit(client: IClient, order: TTicketOrder[]): ITicket[] {
        const orderedTickets: ITicket[] = order
            .reduce((tickets: ITicket[], orderItem: TTicketOrder): ITicket[] => {
                tickets.push(
                    ...Array(orderItem[1])
                        .fill(null)
                        .map(():ITicket => this.ticketWindow.sellTicket(client, orderItem[0]))
                );
                return tickets;
            }, []);
        orderedTickets.forEach((ticket: ITicket) => this.gate.enter(client, ticket));
        return orderedTickets;
    }

    leave(ticket: ITicket): void {
        this.gate.exit(ticket);
    }
}
