type ResponseTopHeadlines =
    | {
          readonly status: 'ok';
          readonly totalResults: number;
          readonly articles: Array<Article>;
      }
    | ErrorResponse;
