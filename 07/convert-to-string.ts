const convertToString = <T>(value: T):string | undefined => {
    if (typeof value?.toString === 'function') {
        return value.toString();
    }
    return undefined;
};


//--------------------------

class Test1{
    toString():string {
        return 'Test1';
    }
}
class Test2{}


console.log(convertToString<boolean>(true));
console.log(convertToString<number>(5));
console.log(convertToString<string>('qwerty'));
console.log(convertToString<object>({}));
console.log(convertToString<Test1>(new Test1()));
console.log(convertToString<Test2>(new Test2()));
console.log(convertToString<null>(null));
