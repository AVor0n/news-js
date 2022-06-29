export type ResponseError = {
    readonly status: 'error';
    readonly code: string;
    readonly message: string;
};
