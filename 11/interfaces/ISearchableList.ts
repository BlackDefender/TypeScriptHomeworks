import IRecord from "./IRecord";

export default interface ISearchableList {
    searchByName(search: string): IRecord[];
    searchByText(search: string): IRecord[];
}
