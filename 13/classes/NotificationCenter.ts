import NotificationProvider from "../interfaces/NotificationProvider";
import Task from "./Task";
import EventBus from "./EventBus";
import User from "./User";

export default class NotificationCenter {
    readonly #user: User;
    #providers:NotificationProvider[] = [];

    constructor(user: User) {
        this.#user = user;
        EventBus.getInstance().on('taskAdded', this.onTaskAdded.bind(this));
    }

    addNotificationProvider(provider: NotificationProvider):void {
        this.#providers.push(provider);
    }

    removeNotificationProvider(provider: NotificationProvider):void {
        if (!this.#providers.includes(provider)) return;
        const index:number = this.#providers.indexOf(provider);
        this.#providers.splice(index, 1);
    }

    private onTaskAdded(task:Task):void {
        if (task.assigneeId !== this.#user.id) return;
        this.#providers.forEach((provider: NotificationProvider):void => {
            provider.notify(task, this.#user);
        });
    }
}
