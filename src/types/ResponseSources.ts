import { ResponseError } from './ResponseError';
import { Source } from './Source';

export type ResponseSources =
    | {
          readonly status: 'ok' | 'error';
          readonly sources: Array<Source>;
      }
    | ResponseError;
