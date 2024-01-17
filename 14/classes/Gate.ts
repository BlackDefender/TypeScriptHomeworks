import IGate from "../interfaces/IGate";
import IClient from "../interfaces/IClient";
import ITicket from "../interfaces/ITicket";
import CurrentVisitors from "./CurrentVisitors";
import IZooInternal from "../interfaces/IZooInternal";

export default class Gate implements IGate{
    constructor(private zoo: IZooInternal) {}

    enter(visitor: IClient, ticket: ITicket): void {
        if(!ticket.isValid()) {
            console.log("Security don't give the client to enter");
            return;
        }
        ticket.compost();
        this.zoo.currentVisitors.add(ticket, visitor);
    }

    exit(ticket: ITicket): void {
        this.zoo.currentVisitors.remove(ticket);
    }
}
