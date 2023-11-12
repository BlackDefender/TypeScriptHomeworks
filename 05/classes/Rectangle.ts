import ShapeInterface from "../interfaces/ShapeInterface";
import PrintableInterface from "../interfaces/PrintableInterface";

export default class Rectangle implements ShapeInterface, PrintableInterface{
    constructor(public name:string, public color:string, private sideA:number, private sideB:number) {}

    calculateArea():number {
        return this.sideA * this.sideB;
    }

    print():void {
        console.log('Area = SideA * SideB');
    }
}
