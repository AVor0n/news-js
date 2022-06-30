import { NewsData, SourceData } from '../view/AppView';

type LoaderOptions = {
    [key: string]: string;
};

class Loader {
    baseLink: string;
    options?: LoaderOptions;
    constructor(baseLink: string, options?: LoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: Endpoint; options?: LoaderOptions },
        callback: (data: SourceData & NewsData) => void,
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(this: void, res: Response) {
        if (!res.ok) {
            if ([401, 404].includes(res.status)) {
                throw new Error(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            }
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: LoaderOptions, endpoint: Endpoint) {
        const urlOptions = Object.assign({}, this.options, options);
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach(key => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: Method,
        endpoint: Endpoint,
        callback: (data: SourceData & NewsData) => void,
        options: LoaderOptions = {},
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then<SourceData & NewsData>(res => res.json())
            .then(data => callback(data))
            .catch(err => {
                throw new Error(String(err));
            });
    }
}

export default Loader;
