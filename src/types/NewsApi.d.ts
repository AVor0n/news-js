type Endpoint = 'everything' | 'top-headlines' | 'sources';

type Method = 'GET';

type ResponseNewsApi = ResponseEverything | ResponseTopHeadlines | ResponseSources;

type RequestNewsApi = RequestEverything | RequestTopHeadlines | RequestSources;
