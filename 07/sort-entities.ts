enum ESortOrder{
    ASC = 'asc',
    DESC = 'desc',
}

interface IHasId {
    id: string;
}

const sortEntities = (arr: Array<IHasId>, sortOrder: ESortOrder = ESortOrder.ASC):void => {
    if (sortOrder === ESortOrder.ASC) {
        arr.sort((a:IHasId, b:IHasId):number => a.id.localeCompare(b.id));
    } else {
        arr.sort((a:IHasId, b:IHasId):number => b.id.localeCompare(a.id));
    }
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
sortEntities(dataAsc, ESortOrder.ASC);
console.log('After:');
console.log(dataAsc);

console.log('\n--------\n');

console.log('DESC');
console.log('Before:');
console.log(dataDesc);
sortEntities(dataDesc, ESortOrder.DESC);
console.log('After:');
console.log(dataDesc);
