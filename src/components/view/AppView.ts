import News, { Article } from './news/News';
import Sources, { Source } from './sources/Sources';

export interface NewsData {
    articles: Article[];
}

export interface SourceData {
    sources: Source[];
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData) {
        const values = data.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: SourceData) {
        const values = data.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
