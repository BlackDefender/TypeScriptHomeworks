import IAdministration from "./IAdministration";
import ICurrentVisitors from "./ICurrentVisitors";
import IAnimal from "./IAnimal";
import IEmployee from "./IEmployee";
import IMarketingDepartment from "./IMarketingDepartment";
import ITicketWindow from "./ITicketWindow";
import IGate from "./IGate";
import IAccounting from "./IAccounting";

export default interface IZooInternal {
    accounting: IAccounting;
    administration: IAdministration;
    animals: IAnimal[];
    currentVisitors: ICurrentVisitors;
    employees: IEmployee[];
    marketingDepartment: IMarketingDepartment;
    ticketWindow: ITicketWindow;
    gate: IGate;
}
