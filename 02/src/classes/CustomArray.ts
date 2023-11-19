export default class CustomArray<T> extends Array {
    constructor() {
        super();
    }

    toSorted(compareFn:((a:any, b:any) => number) | undefined):CustomArray<T> {
        const newArray:CustomArray<T> = this.map((x) => x) as CustomArray<T>;
        newArray.sort(compareFn);
        return newArray;
    }
}
