"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(firstName, lastName, birthYear) {
        this._grades = []; // workName: mark
        this._visits = []; // lesson: present
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }
    set fullName(value) {
        [this._lastName, this._firstName] = value.split(' ');
    }
    get age() {
        return new Date().getFullYear() - this._birthYear;
    }
    setGrade(subject, value) {
        this._grades.push([subject, value]);
    }
    setVisit(visit) {
        this._visits.push(visit);
    }
    getPerformanceRating() {
        if (this._grades.length === 0)
            return 0;
        const averageGrade = this._grades
            .map((grade) => grade[1])
            .reduce((sum, value) => sum + value, 0) / this._grades.length;
        const attendancePercentage = (this._visits.filter((present) => present).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    }
}
exports.default = Student;
