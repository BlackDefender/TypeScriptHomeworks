import ITicket from "../interfaces/ITicket";
import ETicketPrice from "../custom-types/ETicketPrice";
import ETicketType from "../custom-types/ETicketType";

export default class Ticket implements ITicket {
    private valid: boolean = true;
    price: ETicketPrice;
    type: ETicketType;
    id: string;
    clientId: string;
    constructor(type: ETicketType, clientId: string) {
        this.type = type;
        this.price = ETicketPrice[type];
        this.id = Math.random().toString(16).slice(2);
        this.clientId = clientId;
    }

    compost(): void {
        this.valid = false;
    }

    isValid(): boolean {
        return this.valid;
    }
}
