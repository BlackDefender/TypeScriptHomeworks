export default interface IRecord {
    name: string;
    text: string;
    createdAt: number;
    updatedAt: number;
    done: boolean;
    askPermission: boolean;

    markAsDone(): void;
    update(name: string, text: string, permission?: boolean): void;
}
