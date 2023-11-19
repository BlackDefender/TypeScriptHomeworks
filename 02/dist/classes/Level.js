"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Level {
    constructor(name, description) {
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    get groups() {
        return this._groups;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    addGroup(group) {
        this._groups.push(group);
    }
    removeGroup(group) {
        const index = this._groups.indexOf(group);
        if (index < 0)
            return;
        this._groups.splice(index, 1);
    }
}
exports.default = Level;
