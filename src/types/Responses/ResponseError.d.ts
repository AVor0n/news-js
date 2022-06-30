type ErrorResponse = {
    readonly status: 'error';
    readonly code: string;
    readonly message: string;
};
