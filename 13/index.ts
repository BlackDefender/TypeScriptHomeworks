import User from "./classes/User";
import NotificationCenter from "./classes/NotificationCenter";
import TaskBoard from "./classes/TaskBoard";
import Task from "./classes/Task";
import EmailProvider from "./classes/NotificationProviders/EmailProvider";
import SMSProvider from "./classes/NotificationProviders/SMSProvider";

const userGivi: User = new User('Givi', undefined, 'givi@zurabovich.com');
const userTaras: User = new User('Taras', '999 888 777');
const taskBoard: TaskBoard = new TaskBoard();

const notificationCenter1: NotificationCenter = new NotificationCenter(userGivi);
notificationCenter1.addNotificationProvider(new EmailProvider());

const notificationCenter2: NotificationCenter = new NotificationCenter(userTaras);
notificationCenter2.addNotificationProvider(new SMSProvider());

taskBoard.addTask(new Task('task for Givi', 'do some job', userGivi.id));
taskBoard.addTask(new Task('task for Taras', 'do some job', userTaras.id));
