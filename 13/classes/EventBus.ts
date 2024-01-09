export default class EventBus {
    private eventsList:Map<string, Array<Function>>;
    private static instance: EventBus;
    private constructor() {
        this.eventsList = new Map();
    }

    static getInstance(): EventBus {
        if (this.instance === undefined) {
            this.instance = new EventBus();
        }
        return this.instance;
    }

    private getEventListeners(eventName:string): Function[] {
        let listeners: Function[] | undefined = this.eventsList.get(eventName);
        if (listeners === undefined) {
            listeners = [];
            this.eventsList.set(eventName, listeners);
        }
        return listeners as Function[];
    }

    on(eventName:string, callBack:Function) {
        this.getEventListeners(eventName).push(callBack);
        return this;
    }

    off(eventName:string, callBack:Function) {
        const listeners:Function[] = this.getEventListeners(eventName);
        const index:number = listeners.indexOf(callBack);
        if (index !== -1) listeners.splice(index, 1);
        return this;
    }

    emit(eventName:string, ...data:any[]) {
        this.getEventListeners(eventName).forEach((callBack) => callBack(...data));
        return this;
    }
}
