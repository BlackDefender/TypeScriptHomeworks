import ETicketType from "../custom-types/ETicketType";
import ETicketPrice from "../custom-types/ETicketPrice";

export default interface ITicket {
    type : ETicketType;
    price: ETicketPrice;
    id: string;
    clientId: string;
    compost():void;
    isValid(): boolean;
}
