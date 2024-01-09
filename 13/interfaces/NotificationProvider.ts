import Task from "../classes/Task";
import User from "../classes/User";

export default interface NotificationProvider {
    notify(task:Task, user: User):void;
}
