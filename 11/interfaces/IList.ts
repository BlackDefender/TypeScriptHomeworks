import IRecord from "./IRecord";

export default interface IList {
    // records: IRecord[];
    add(name: string, text: string, askPermission: boolean): void;
    remove(index: number): void;
    getByIndex(index: number): IRecord;
    getAll(): IRecord[];
    get totalCount(): number;
    get undoneCount(): number;
}
