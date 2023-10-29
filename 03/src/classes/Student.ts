import Grade from "./Grade";

export default class Student {
    _firstName:string;
    _lastName:string;
    _birthYear:number;
    _grades:Grade[] = []; // workName: mark
    _visits:boolean[] = []; // lesson: present

    constructor(firstName:string, lastName:string, birthYear:number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName():string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value:string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    get age():number {
        return new Date().getFullYear() - this._birthYear;
    }

    setGrade(subject:string, value:number):void {
        this._grades.push([subject, value]);
    }

    setVisit(visit:boolean):void {
        this._visits.push(visit);
    }

    getPerformanceRating():number {
        if (this._grades.length === 0) return 0;

        const averageGrade = this._grades
            .map((grade:Grade) => grade[1])
            .reduce((sum:number, value:number) => sum + value, 0) / this._grades.length;
        const attendancePercentage = (this._visits.filter((present:boolean) => present).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}
