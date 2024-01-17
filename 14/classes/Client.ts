import IClient from "../interfaces/IClient";

export default class Client implements IClient {
    id: string;
    constructor(
        public name: string,
        public phone?: string,
    ) {
        this.id = Math.random().toString(16).slice(2);
    }
}
