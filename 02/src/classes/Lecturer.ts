export default class Lecturer{
    name:string;
    surname:string;
    position:string;
    company:string;
    experience:string;
    courses:string;
    contacts:string;
    constructor(name:string, surname:string, position:string, company:string, experience:string, courses:string, contacts:string) {
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.company = company;
        this.experience = experience;
        this.courses = courses;
        this.contacts = contacts;
    }
}
