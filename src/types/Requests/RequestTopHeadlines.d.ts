type RequestTopHeadlines = {
    apiKey: string;
    category?: NewsCategory;
    sources?: string;
    q?: string;
    pageSize?: number;
    page?: number;
    country?: CountryCode;
};
