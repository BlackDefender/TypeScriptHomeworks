import ShapeInterface from "../interfaces/ShapeInterface";
import PrintableInterface from "../interfaces/PrintableInterface";

export default class Square implements ShapeInterface, PrintableInterface{
    constructor(public name:string, public color:string, private side:number) {}

    calculateArea():number {
        return Math.pow(this.side, 2);
    }

    print():void {
        console.log('Area = Side * Side');
    }
}
