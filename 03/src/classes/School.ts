import Lecturer from "./Lecturer";
import Area from "./Area";

export default class School {
    _name:string;
    _areas:Area[] = [];
    _lecturers:Lecturer[] = [];

    constructor(name:string) {
        this._name = name;
    }

    get name():string {
        return this._name;
    }

    addArea(area:Area):void {
        this._areas.push(area);
    }

    removeArea(area:Area):void {
        const index = this._areas.indexOf(area);
        if (index < 0) return;
        this._areas.splice(index, 1);
    }

    get areas():Area[] {
        return this._areas;
    }

    addLecturer(lecturer:Lecturer):void {
        this._lecturers.push(lecturer);
    }

    removeLecturer(lecturer:Lecturer):void {
        const index = this._lecturers.indexOf(lecturer);
        if (index < 0) return;
        this._lecturers.splice(index, 1);
    }

    get lecturers():Lecturer[] {
        return this._lecturers;
    }
}
