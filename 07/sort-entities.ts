enum ESortOrder{
    ASC = 'asc',
    DESC = 'desc',
}

interface IHasId {
    id: string;
}

const sortEntities = <T extends IHasId>(arr: Array<T>, sortOrder: ESortOrder = ESortOrder.ASC):T[] => {
    const newArray:T[] = [...arr];
    if (sortOrder === ESortOrder.ASC) {
        newArray.sort((a:IHasId, b:IHasId):number => a.id.localeCompare(b.id));
    } else {
        newArray.sort((a:IHasId, b:IHasId):number => b.id.localeCompare(a.id));
    }
    return newArray;
};


//---------------------------
class TestClass implements IHasId {
    public id: string;

    constructor() {
        this.id = Math.random().toString(16).slice(2);
    }
}

const dataAsc:TestClass[] = new Array(10).fill(null).map(() => new TestClass());
const dataDesc:TestClass[] = new Array(10).fill(null).map(() => new TestClass());

console.log('ASC');
console.log('Before:');
console.log(dataAsc);
console.log('After:');
console.log(sortEntities<TestClass>(dataAsc, ESortOrder.ASC));

console.log('\n--------\n');

console.log('DESC');
console.log('Before:');
console.log(dataDesc);
console.log('After:');
console.log(sortEntities<TestClass>(dataDesc, ESortOrder.DESC));

//sortEntities<number>([1,2,3]); <- error
