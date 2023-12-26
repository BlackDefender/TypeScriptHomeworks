import IRecord from "../interfaces/IRecord";

export default class Record implements IRecord {
    name: string;
    text: string;
    createdAt: number;
    updatedAt: number;
    done: boolean;
    askPermission: boolean;

    constructor(name: string, text: string, askPermission: boolean = false) {
        if (name === '') throw new Error("Name can't be empty");
        if (text === '') throw new Error("Text can't be empty");
        this.name = name;
        this.text = text;
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
        this.done = false;
        this.askPermission = askPermission;
    }

    markAsDone(): void {
        this.done = true;
    }

    update(name: string, text: string, permission: boolean = false):void {
        if (this.askPermission && !permission) throw new Error('Edit not allowed');
        this.name = name;
        this.text = text;
        this.updatedAt = Date.now();
    }
}
