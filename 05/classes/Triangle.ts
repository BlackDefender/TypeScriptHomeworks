import ShapeInterface from "../interfaces/ShapeInterface";

export default class Triangle implements ShapeInterface{
    constructor(
        public name:string,
        public color:string,
        private sideA:number,
        private sideB:number,
        private sideC:number
    ) {}

    calculateArea(): number {
        const halfPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(
            halfPerimeter
            * (halfPerimeter - this.sideA)
            * (halfPerimeter - this.sideB)
            * (halfPerimeter - this.sideC)
        );
    }
}
