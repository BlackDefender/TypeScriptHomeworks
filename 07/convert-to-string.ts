const convertToString = (value: any):string => {
    if (typeof value?.toString === 'function') {
        return value.toString();
    }
    return 'undefined';
};


//--------------------------
class Test1{
    toString():string {
        return 'Test1';
    }
}
class Test2{}

[
    true,
    5,
    'qwerty',
    {},
    [],
    new Test1(),
    new Test2(),
    null,
    undefined,
    Symbol(),
    new Map(),
    new Set(),
    Set,
    Math,
    ():void => {},
]
    .map(convertToString)
    .forEach((item) => { console.log(item); });

