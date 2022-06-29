import { Article } from './Article';
import { ResponseError } from './ResponseError';

export type ResponseTopHeadlines =
    | {
          readonly status: 'ok';
          readonly totalResults: number;
          readonly articles: Array<Article>;
      }
    | ResponseError;
