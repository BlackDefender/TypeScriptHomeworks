
// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
interface Task1 {
    [key: string]: string | number;
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface Task2 {
    [key: string]: (...args:any) => void;
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
interface Task3<T> {
    [index: number]: T;
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface Task4{
    name: string;
    birthDate: Date;
    [index: number]: any;
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
interface Task5_1 {
    [index: number]: string;
}
interface Task5_2 extends Task5_1{
    someSpecificParameter1: string;
    someSpecificParameter2: number;
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
interface Task6 {
    [index: string]: any;
}
const checkAllObjectPropertiesAreNumbers = (obj: Task6): boolean => {
    for (const property in obj) {
        if (typeof obj[property] !== 'number') return false;
    }
    return true;
};

console.log(checkAllObjectPropertiesAreNumbers({
    'a': 1,
    'b': 2,
}));
console.log(checkAllObjectPropertiesAreNumbers({
    'a': 0,
    'b': 'Something',
    'c': 'get',
    'd': 'wrong!'
}));
