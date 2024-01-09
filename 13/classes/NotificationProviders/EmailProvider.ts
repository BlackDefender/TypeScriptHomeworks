import User from "../User";
import NotificationProvider from "../../interfaces/NotificationProvider";
import Task from "../Task";

export default class EmailProvider implements NotificationProvider {
    notify(task: Task, user: User):void {
        if (user.email === undefined) return;
        // send Email
        console.log(`EMAIL: task '${task.title}' added to your board`);
    }
}
