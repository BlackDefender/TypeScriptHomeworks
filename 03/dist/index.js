"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Lecturer_1 = __importDefault(require("./classes/Lecturer"));
const Student_1 = __importDefault(require("./classes/Student"));
const Area_1 = __importDefault(require("./classes/Area"));
const School_1 = __importDefault(require("./classes/School"));
const Group_1 = __importDefault(require("./classes/Group"));
const panTaras = new Lecturer_1.default('Taras', 'Batkovich', 'teacher', 'ONPU', 'JS', 'JS/TS', 'test');
const student1 = new Student_1.default('Givi', 'Zurabovich', 1896);
const student2 = new Student_1.default('Mykola', 'Micheev', 1991);
const area = new Area_1.default('Programming');
const school = new School_1.default('Hillel');
school.addArea(area);
school.addLecturer(panTaras);
const TSGroup = new Group_1.default('TS', 'Advanced');
TSGroup.addStudent(student1);
TSGroup.addStudent(student2);
[true, false, true, true, false].forEach((visit) => student1.setVisit(visit));
[true, true, false, true, true].forEach((visit) => student2.setVisit(visit));
[
    ['test', 100],
    ['test', 95],
    ['test', 80],
    ['test', 97],
    ['test', 50],
].forEach((value) => student1.setGrade(value[0], value[1]));
[
    ['test', 100],
    ['test', 95],
    ['test', 99],
    ['test', 96],
    ['test', 100],
].forEach((value) => student2.setGrade(value[0], value[1]));
console.log(student1.getPerformanceRating());
console.log(student2.getPerformanceRating());
TSGroup.showPerformance();
