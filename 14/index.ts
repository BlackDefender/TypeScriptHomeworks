import IClient from "./interfaces/IClient";
import Client from "./classes/Client";
import Zoo from "./classes/Zoo";
import IZooPublic from "./interfaces/IZooPublic";
import ETicketType from "./custom-types/ETicketType";
import ITicket from "./interfaces/ITicket";
import IZooInternal from "./interfaces/IZooInternal";
import ESpecies from './custom-types/ESpecies';

// internal part
const zoo: IZooPublic & IZooInternal = new Zoo();
zoo.administration.addAnimal(ESpecies.Manticore);
zoo.administration.addAnimal(ESpecies.Harpy);
zoo.administration.addAnimal(ESpecies.Unicorn);
zoo.administration.addAnimal(ESpecies.Ghost);
zoo.administration.hireEmployees(5);


// client part
const zooPublic: IZooPublic = zoo;
const client: IClient = new Client('Изя Кацман', '+48999888777');
const tickets: ITicket[] = zooPublic.visit(client, [[ETicketType.Adult, 1], [ETicketType.Child, 5]]);
zooPublic.leave(tickets[0]);

console.log(tickets);
console.log(zoo);
