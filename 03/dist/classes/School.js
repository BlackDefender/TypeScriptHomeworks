"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class School {
    constructor(name) {
        this._areas = [];
        this._lecturers = [];
        this._name = name;
    }
    get name() {
        return this._name;
    }
    addArea(area) {
        this._areas.push(area);
    }
    removeArea(area) {
        const index = this._areas.indexOf(area);
        if (index < 0)
            return;
        this._areas.splice(index, 1);
    }
    get areas() {
        return this._areas;
    }
    addLecturer(lecturer) {
        this._lecturers.push(lecturer);
    }
    removeLecturer(lecturer) {
        const index = this._lecturers.indexOf(lecturer);
        if (index < 0)
            return;
        this._lecturers.splice(index, 1);
    }
    get lecturers() {
        return this._lecturers;
    }
}
exports.default = School;
