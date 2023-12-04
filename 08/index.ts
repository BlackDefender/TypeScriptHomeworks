/*
Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.
Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.
Вам потрібно зробити свій аналог утіліти Pick, яка конструює новий тип, який буде включати в себе лише параметри передані в цю утіліту.
*/


interface Person {
    name?: string;
    age: number;
    parents: {
        father: string,
        mother: string,
    }
}

type MyDeepReadonly<T> = {
    readonly [P in keyof T]: MyDeepReadonly<T[P]>;
};
type MyDeepRequiredReadonly<T> = {
    readonly [P in keyof T]-?: MyDeepRequiredReadonly<T[P]>;
};

const  readonlyPerson:MyDeepReadonly<Person> = {
    //name: 'test', // NO ERROR
    age: 12,
    parents: {
        father: 'Test1',
        mother: 'Test2',
    },
};
readonlyPerson.age = 15; // ERROR
readonlyPerson.parents.mother = 'test3'; // ERROR

const  readonlyRequiredPerson:MyDeepRequiredReadonly<Person> = {
    //name: 'test', // ERROR
    age: 12,
    parents: {
        father: 'Test1',
        mother: 'Test2',
    },
};


interface User {
    name: string;
    age: number;
    permission: string[];
}

type UpperCaseKeys<T> = {
    [P in keyof T as Uppercase<P & string>]: T[P]
};
let upperUser:UpperCaseKeys<User> = {
    NAME: 'test',
    AGE: 40,
    PERMISSION: [],
}

type TPick<T, allowedProps extends keyof T> = {
    [P in allowedProps]: T[P];
}
let newUser: TPick<User, "name" | "age"> = {
    name: 'test',
    age: 13,
    // permission: [''], // error
};
