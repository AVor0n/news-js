import { RequestEverything } from './RequestEverything';
import { RequestSources } from './RequestSources';
import { RequestTopHeadlines } from './RequestTopHeadlines';
import { ResponseTopHeadlines } from './ResponceTopHeadlines';
import { ResponseEverything } from './ResponseEverything';
import { ResponseSources } from './ResponseSources';

export type Endpoint = 'everything' | 'top-headlines' | 'sources';
export type Methods = 'GET';
export type ResponseNewsApi = ResponseEverything | ResponseTopHeadlines | ResponseSources;
export type RequestNewsApi = RequestEverything | RequestTopHeadlines | RequestSources;
