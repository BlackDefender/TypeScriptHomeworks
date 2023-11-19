import Student from "./Student";
import CustomArray from "./CustomArray";
import Area from "./Area";

export default class Group {
    // implement getters for fields and '' and 'set status' methods

    _area:Area | undefined;
    _status:string;
    _students:CustomArray<Student>;
    directionName:string;
    levelName:string;

    constructor(directionName:string, levelName:string) {
        this.directionName = directionName;
        this.levelName = levelName;
        this._students = new CustomArray<Student>();
        this._status = '';
    }

    addStudent(student:Student):void {
        this._students.push(student);
    }

    removeStudent(student:Student):void {
        const index = this._students.indexOf(student);
        if (index < 0) return;
        this._students.splice(index, 1);
    }

    get status():string {
        return this._status;
    }

    set status(status:string) {
        this._status = status;
    }

    get area():Area | undefined {
        return this._area;
    }

    set area(area:Area) {
        this._area = area;
    }

    showPerformance():void {
        const performance:string = this
            ._students
            .toSorted((a:Student, b:Student) => b.getPerformanceRating() - a.getPerformanceRating())
            .map((student:Student) => `${student.fullName} - ${student.getPerformanceRating()}`)
            .join('\n');
        console.log(performance);
    }
}
