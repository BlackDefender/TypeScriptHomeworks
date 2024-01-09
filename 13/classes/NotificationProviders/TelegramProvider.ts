import NotificationProvider from "../../interfaces/NotificationProvider";
import User from "../User";
import Task from "../Task";

export default class TelegramProvider implements NotificationProvider {
    notify(task: Task, user: User): void {
        if (user.telegramNickname === undefined) return;
        // connect to telegram server and notify user
        console.log(`TELEGRAM: task '${task.title}' added to your board`);
    }
}
