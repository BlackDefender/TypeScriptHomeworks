import Lecturer from "./classes/Lecturer";
import Student from "./classes/Student";
import Area from "./classes/Area";
import School from "./classes/School";
import Group from "./classes/Group";
import Grade from "./classes/Grade";

const panTaras = new Lecturer(
    'Taras',
    'Batkovich',
    'teacher',
    'ONPU',
    'JS',
    'JS/TS',
    'test',
);

const student1 = new Student(
    'Givi',
    'Zurabovich',
    1896,
);
const student2 = new Student(
    'Mykola',
    'Micheev',
    1991,
);

const area = new Area('Programming');

const school = new School('Hillel');
school.addArea(area);
school.addLecturer(panTaras);

const TSGroup = new Group('TS', 'Advanced');
TSGroup.addStudent(student1);
TSGroup.addStudent(student2);

[true, false, true, true, false].forEach((visit:boolean) => student1.setVisit(visit));
[true, true, false, true, true].forEach((visit:boolean) => student2.setVisit(visit));

[
    ['test', 100] as Grade,
    ['test', 95] as Grade,
    ['test', 80] as Grade,
    ['test', 97] as Grade,
    ['test', 50] as Grade,
].forEach((value:Grade) => student1.setGrade(value[0], value[1]));

[
    ['test', 100] as Grade,
    ['test', 95] as Grade,
    ['test', 99] as Grade,
    ['test', 96] as Grade,
    ['test', 100] as Grade,
].forEach((value:Grade) => student2.setGrade(value[0], value[1]));

console.log(student1.getPerformanceRating());
console.log(student2.getPerformanceRating());

TSGroup.showPerformance();
