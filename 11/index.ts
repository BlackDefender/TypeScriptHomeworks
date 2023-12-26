/*
Вам необхідно написати додаток Todo list. У списку нотаток повинні бути методи для додавання нового запису, видалення,
редагування та отримання повної інформації про нотатку за ідентифікатором, а так само отримання списку всіх нотаток.
Крім цього, у користувача має бути можливість позначити нотатку, як виконану, і отримання інформації про те, скільки
всього нотаток у списку і скільки залишилося невиконаними. Нотатки не повинні бути порожніми.

Кожний нотаток має назву, зміст, дату створення ( або редагування) та статус. Нотатки бувають двох типів.
Дефолтні та такі, які вимагають підтвердження при редагуванні.

Окремо необхідно розширити поведінку списку та додати можливість пошуку нотатка за ім'ям або змістом.

Також окремо необхідно розширити список можливістю сортування нотаток за статусом або часом створення.
*/

import List from "./classes/List";
import IRecord from "./interfaces/IRecord";
import sleep from "./helpers/sleep";

(async () => {
    const todoList:List = new List();

    todoList.add('Task 0', 'Lorem ipsum');
    await sleep(Math.random() * 1000);
    todoList.add('Task 1', 'Lorem ipsum');
    await sleep(Math.random() * 1000);
    todoList.add('Task 2', 'Lorem ipsum');
    await sleep(Math.random() * 1000);
    todoList.add('Task 3', 'Lorem ipsum');
    await sleep(Math.random() * 1000);
    todoList.add('Task 4', 'Lorem ipsum');
    await sleep(Math.random() * 1000);
    todoList.add('Task 5', 'Lorem ipsum', true);
    // error
    // todoList.add('Task 3', '');
    //console.log(todoList);

    const someExistingTask: IRecord = todoList.getByIndex(2);
    someExistingTask.update(someExistingTask.name, 'Dolor sit amet');
    // error
    //todoList.getByIndex(5).update('New name', 'new text');
    // console.log(todoList);

    todoList.getByIndex(0).markAsDone();
    todoList.getByIndex(3).markAsDone();
    //console.log(todoList);

    console.log(todoList.searchByName('3'));

    todoList.sortByStatus();
    console.log(todoList);

    todoList.sortByCreatedDate();
    console.log(todoList);

    console.log(todoList.totalCount);

    todoList.remove(0);
    // console.log(todoList);

    console.log(todoList.totalCount);
})();
