export interface Request {
    sum: number;
    from: number;
    to: number;
}

export enum ResponseStatus{
    Success = 'success',
    Error = 'error',
}

interface ResponseBase {
    status: ResponseStatus;
}

export interface ResponseSuccessData {
    databaseId: number,
    sum: number;
    from: number;
    to: number;
}

export interface ResponseErrorData {
    errorMessage: string;
    errorCode: number;
}

export interface ResponseSuccess extends ResponseBase {
    status: ResponseStatus.Success,
    data: ResponseSuccessData;
}
export interface ResponseError extends ResponseBase {
    status: ResponseStatus.Error,
    data: ResponseErrorData;
}
