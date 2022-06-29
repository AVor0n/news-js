type News = {
    data: string[];
};

type Endpoint = 'everything' | 'sources';

class Loader {
    baseLink: string;
    options: Record<string, string>;

    constructor(baseLink: string, options: Record<string, string>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, method = 'GET' }: { endpoint: Endpoint; method?: Request['method'] },
        callback = () => console.error('No callback for GET response'),
    ) {
        this.load(method, endpoint, callback);
    }

    errorHandler(this: void, res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Record<string, string>, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach(key => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: Request['method'], endpoint: string, callback: (data: News) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then<Response>(this.errorHandler)
            .then<News>(res => res.json())
            .then<void>(data => callback(data))
            .catch(err => console.error(err));
    }
}

export default Loader;
