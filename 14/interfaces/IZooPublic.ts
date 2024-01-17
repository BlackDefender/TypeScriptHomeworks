import ETicketType from "../custom-types/ETicketType";
import ITicket from "./ITicket";
import IClient from "./IClient";
import TTicketOrder from "../custom-types/TTicketOrder";

export default interface IZooPublic {
    visit(client: IClient, order: TTicketOrder[]): ITicket[];
    leave(ticket: ITicket): void;
}
