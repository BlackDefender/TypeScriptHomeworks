import ShapeInterface from "../interfaces/ShapeInterface";

export default class Circle implements ShapeInterface{
    constructor(public name:string, public color:string, private radius:number) {}

    calculateArea():number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
