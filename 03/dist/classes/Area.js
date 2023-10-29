"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Area {
    constructor(name) {
        this._levels = [];
        this._name = name;
    }
    get name() {
        return this._name;
    }
    allLevel(level) {
        this._levels.push(level);
    }
    removeLevel(level) {
        const index = this._levels.indexOf(level);
        if (index < 0)
            return;
        this._levels.splice(index, 1);
    }
    get levels() {
        return this._levels;
    }
}
exports.default = Area;
