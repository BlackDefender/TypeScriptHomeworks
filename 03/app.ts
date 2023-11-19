import {ResponseError, ResponseStatus, ResponseSuccess} from './interfaces';

const responseSuccess:ResponseSuccess = {
    status: ResponseStatus.Success,
    data: {
        sum: 1,
        from: 1,
        to: 1,
        databaseId: 1,
    }
};

const responseError:ResponseError = {
    status: ResponseStatus.Error,
    data: {
        errorMessage: 'Ooops!',
        errorCode: 500,
    }
};

console.log(responseSuccess);
console.log(responseError);
