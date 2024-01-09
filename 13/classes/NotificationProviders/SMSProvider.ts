import NotificationProvider from "../../interfaces/NotificationProvider";
import User from "../User";
import Task from "../Task";

export default class SMSProvider implements NotificationProvider{
    notify(task: Task, user: User):void {
        if (user.phone === undefined) return;
        // check phone number is correct/active/etc.
        // send SMS
        console.log(`SMS: task '${task.title}' added to your board`);
    }
}
