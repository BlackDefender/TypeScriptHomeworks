"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomArray extends Array {
    constructor() {
        super();
    }
    toSorted(compareFn) {
        const newArray = this.map((x) => x);
        newArray.sort(compareFn);
        return newArray;
    }
}
exports.default = CustomArray;
