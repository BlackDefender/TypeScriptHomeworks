import Level from "./Level";

export default class Area {
    _levels:Level[] = [];
    _name:string;

    constructor(name:string) {
        this._name = name;
    }

    get name():string {
        return this._name;
    }

    allLevel(level:Level):void {
        this._levels.push(level);
    }

    removeLevel(level:Level):void {
        const index = this._levels.indexOf(level);
        if (index < 0) return;
        this._levels.splice(index, 1);
    }

    get levels():Level[] {
        return this._levels;
    }
}
