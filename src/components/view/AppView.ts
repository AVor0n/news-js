import News, { NewsItem } from './news/news';
import Sources, { SourceItem } from './sources/sources';

export interface NewsData {
    articles: Array<NewsItem>;
}
export interface SourcesData {
    sources: Array<SourceItem>;
}
export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
