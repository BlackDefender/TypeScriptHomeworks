export interface Request {
    sum: number;
    from: number;
    to: number;
}

interface ResponseBase {
    status: string;
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
    data: ResponseSuccessData;
}
export interface ResponseError extends ResponseBase {
    data: ResponseErrorData;
}
