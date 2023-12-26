import IRecord from "../interfaces/IRecord";
import IList from "../interfaces/IList";
import Record from "./Record";
import ISearchableList from "../interfaces/ISearchableList";
import ISortableList from "../interfaces/ISortableList";

export default class List implements IList, ISearchableList, ISortableList{
    private records: IRecord[] = [];

    add(name: string, text: string, askPermission: boolean = false): void {
        this.records.push(new Record(name, text, askPermission));
    }

    remove(index: number): void {
        this.records.splice(index, 1);
    }

    getAll(): IRecord[] {
        return this.records;
    }

    getByIndex(index: number): IRecord {
        if (index >= this.records.length) throw new Error("Record doesn't exist");
        return this.records[index];
    }

    get totalCount(): number {
        return this.records.length;
    }

    get undoneCount(): number {
        return this.records.filter((record: IRecord) => !record.done).length;
    }

    searchByName(search: string): IRecord[] {
        const lowerCaseSearch: string = search.toLowerCase();
        return this.records.filter((record: IRecord) => record.name.toLowerCase().includes(lowerCaseSearch));
    }

    searchByText(search: string): IRecord[] {
        const lowerCaseSearch: string = search.toLowerCase();
        return this.records.filter((record: IRecord) => record.text.toLowerCase().includes(lowerCaseSearch));
    }

    sortByStatus() {
        this.records.sort((a: IRecord, b: IRecord) => Number(a.done) - Number(b.done));
    }

    sortByCreatedDate() {
        this.records.sort((a: IRecord, b: IRecord) => a.createdAt - b.createdAt);
    }

    sortByUpdatedDate() {
        this.records.sort((a: IRecord, b: IRecord) => a.updatedAt - b.updatedAt);
    }
}
