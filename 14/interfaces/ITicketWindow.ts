import ETicketType from "../custom-types/ETicketType";
import ITicket from "./ITicket";
import IClient from "./IClient";

export default interface ITicketWindow {
    sellTicket(client: IClient, type: ETicketType): ITicket;
    collectRevenue(): number;
}
