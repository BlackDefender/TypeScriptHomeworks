import ITicket from "./ITicket";
import IClient from "./IClient";

export default interface IGate {
    enter(visitor: IClient, ticket: ITicket): void;
    exit(ticket: ITicket): void;
}
