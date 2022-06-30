type RequestEverything = {
    apiKey: string;
    q?: string;
    qInTitle?: string;
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: LanguageCode;
    sortBy?: SortBy;
    pageSize?: number;
    page?: number;
};
