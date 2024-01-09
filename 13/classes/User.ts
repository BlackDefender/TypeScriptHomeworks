import Task from "./Task";
import EventBus from "./EventBus";

export default class User {
    #activeTask?: Task;
    readonly id: string;

    constructor(
        public name: string,
        public phone: string | undefined = undefined,
        public email: string | undefined = undefined,
        public telegramNickname: string | undefined = undefined,
    ) {
        this.id = "id" + Math.random().toString(16).slice(2);
        EventBus.getInstance().on('taskAdded', this.onTaskAdded.bind(this));
    }

    onTaskAdded(task: Task):void {
        if (task.assigneeId !== this.id) return;
        this.#activeTask = task;
    }

    get activeTask(): Task | undefined {
        return this.#activeTask;
    }
}
