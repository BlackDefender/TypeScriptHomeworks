import IClient from "./IClient";
import ITicket from "./ITicket";

export default interface ICurrentVisitors {
    add(ticket: ITicket, visitor: IClient): void;
    remove(ticket: ITicket): void;
    get allVisitors(): IClient[];
    get numberOfVisitors(): number;
}
