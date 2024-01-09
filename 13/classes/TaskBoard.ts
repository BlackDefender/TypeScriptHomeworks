import Task from "./Task";
import EventBus from "./EventBus";

export default class TaskBoard {
    #tasks: Task[] = [];

    get tasks() {
        return this.#tasks;
    }

    addTask(task: Task): void {
        this.#tasks.push(task);
        EventBus.getInstance().emit('taskAdded', task);
    }
}
