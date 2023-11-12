import Square from "./classes/Square";
import Rectangle from "./classes/Rectangle";
import Triangle from "./classes/Triangle";
import Circle from "./classes/Circle";

console.log('Square');
const square = new Square('Square', 'red', 5);
console.log(square.calculateArea());
square.print();

console.log('----');

console.log('Rectangle');
const rectangle = new Rectangle('Rectangle', 'black', 5, 10);
console.log(rectangle.calculateArea());
square.print();

console.log('----');

console.log('Triangle');
const triangle = new Triangle('Triangle', 'green', 3, 4, 5);
console.log(triangle.calculateArea());

console.log('----');

console.log('Circle');
const circle = new Circle('Circle', 'black', 7);
console.log(circle.calculateArea());
