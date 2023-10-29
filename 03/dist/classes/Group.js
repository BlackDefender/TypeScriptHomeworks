"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomArray_1 = __importDefault(require("./CustomArray"));
class Group {
    constructor(directionName, levelName) {
        this.directionName = directionName;
        this.levelName = levelName;
        this._students = new CustomArray_1.default();
        this._status = '';
    }
    addStudent(student) {
        this._students.push(student);
    }
    removeStudent(student) {
        const index = this._students.indexOf(student);
        if (index < 0)
            return;
        this._students.splice(index, 1);
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    get area() {
        return this._area;
    }
    set area(area) {
        this._area = area;
    }
    showPerformance() {
        const performance = this
            ._students
            .toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating())
            .map((student) => `${student.fullName} - ${student.getPerformanceRating()}`)
            .join('\n');
        console.log(performance);
    }
}
exports.default = Group;
