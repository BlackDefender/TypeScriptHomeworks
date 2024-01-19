import ICurrentVisitors from "../interfaces/ICurrentVisitors";
import IClient from "../interfaces/IClient";
import ITicket from "../interfaces/ITicket";

export default class CurrentVisitors implements ICurrentVisitors {
    private readonly visitors: Map<string, IClient>;
    private readonly tickets: ITicket[];
    constructor() {
        this.visitors = new Map<string, IClient>();
        this.tickets = [];
    }
    add(ticket: ITicket, visitor: IClient): void {
        this.tickets.push(ticket);
        this.visitors.set(visitor.id, visitor);
    }

    remove(ticketToRemove: ITicket): void {
        const clientId: string = ticketToRemove.clientId;
        const index: number = this.tickets.findIndex((ticket: ITicket): boolean => ticket.id === ticketToRemove.id);
        if (index === -1) {
            console.log('Call to police');
            return;
        }
        this.tickets.splice(index, 1);
        const canRemoveVisitor: boolean = this.tickets.every((ticket: ITicket): boolean => ticket.clientId !== clientId);
        if (canRemoveVisitor) {
            this.visitors.delete(clientId);
        }
    }

    get numberOfVisitors(): number {
        return this.tickets.length;
    }

    get allVisitors(): IClient[] {
        return Array.from(this.visitors, ([key, value]) => value);
    }
}
