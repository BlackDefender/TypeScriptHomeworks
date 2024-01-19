import Zoo from "../classes/Zoo";
import Client from "../classes/Client";
import ETicketType from "../custom-types/ETicketType";
import Ticket from "../classes/Ticket";
import ESpecies from "../custom-types/ESpecies";

describe('Zoo', () => {
    let zoo: Zoo;

    beforeEach(() => {
        zoo = new Zoo();
    });

    it('expect to be instance of Zoo', () => {
        expect(zoo).toBeInstanceOf(Zoo);
    });

    it('expect to be instance of Ticket', () => {
        const client = new Client('test1', '+48 333 666 999');
        const tickets = zoo.visit(client, [[ETicketType.Adult, 1]]);
        zoo.leave(tickets[0]);
        expect(tickets[0]).toBeInstanceOf(Ticket);
    });

    it('expect number of visitors to be 2', () => {
        const client = new Client('test2', '+48 333 666 999');
        const tickets = zoo.visit(client, [[ETicketType.Adult, 2]]);
        expect(zoo.currentVisitors.numberOfVisitors).toBe(2);
    });

    it('expect to hire employee', () => {
        const employeesStartCount: number = zoo.employees.length;
        zoo.administration.hireEmployee();
        expect(zoo.employees).toHaveLength(employeesStartCount + 1);
    });

    it('expect to buy new animal', () => {
        const animalsStartCount: number = zoo.animals.length;
        zoo.administration.addAnimal(ESpecies.Unicorn);
        expect(zoo.animals).toHaveLength(animalsStartCount + 1);
    });

    it('expect accounting to spend money', () => {
        const startBudget: number = zoo.accounting.currentBudget;
        zoo.accounting.buyFoodForAnimals(100);
        expect(startBudget - zoo.accounting.currentBudget).toBe(100);
    });
});
