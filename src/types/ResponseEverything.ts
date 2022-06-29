import { Article } from './Article';
import { ResponseError } from './ResponseError';

export type ResponseEverything =
    | {
          readonly status: 'ok';
          readonly totalResults: number;
          readonly articles: Array<Article>;
      }
    | ResponseError;
