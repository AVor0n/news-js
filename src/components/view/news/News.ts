import { SourceItem } from '../sources/sources';
import './news.css';

export interface NewsItem {
    urlToImage?: string;
    url: string;
    author: string;
    publishedAt: string;
    title: string;
    description: string;
    source: SourceItem;
}

class News {
    draw(data: Array<NewsItem>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as Element;
            const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            const descrTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            const descrSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            const descrContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            const readMoreLink = newsClone.querySelector('.news__read-more a') as HTMLElement;
            if (idx % 2) newsItem.classList.add('alt');

            if (newsMetaPhoto)
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsMetaAuthor.textContent = item.author || item.source.name;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            descrTitle.textContent = item.title;
            descrSource.textContent = item.source.name;
            descrContent.textContent = item.description;
            readMoreLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsElement = document.querySelector('.news') as HTMLElement;

        newsElement.innerHTML = '';
        newsElement.appendChild(fragment);
    }
}

export default News;
