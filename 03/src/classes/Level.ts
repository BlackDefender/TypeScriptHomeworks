import Group from "./Group";

export default class Level {
    _groups:Group[] = [];
    _name:string;
    _description:string;

    constructor(name:string, description:string) {
        this._name = name;
        this._description = description;
    }

    get groups():Group[] {
        return this._groups;
    }

    get name():string {
        return this._name;
    }

    get description():string {
        return this._description;
    }

    addGroup(group:Group):void {
        this._groups.push(group);
    }

    removeGroup(group:Group):void {
        const index = this._groups.indexOf(group);
        if (index < 0) return;
        this._groups.splice(index, 1);
    }
}
