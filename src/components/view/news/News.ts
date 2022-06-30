import { $ } from '../../../utils/common';
import { Source } from '../sources/Sources';
import './news.css';

export type Article = {
    author: string;
    source: Source;
    publishedAt: string;
    urlToImage: string;
    description: string;
    url: string;
    title: string;
};

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const $fragment = document.createDocumentFragment();

        news.forEach((item, idx) => {
            const $newsClone = $<HTMLTemplateElement>('#newsItemTemp').content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                $('.news__item', $newsClone).classList.add('alt');
            }

            $('.news__meta-photo', $newsClone).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            $('.news__meta-author', $newsClone).textContent = item.author || item.source.name;
            $('.news__meta-date', $newsClone).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            $('.news__description-title', $newsClone).textContent = item.title;
            $('.news__description-source', $newsClone).textContent = item.source.name;
            $('.news__description-content', $newsClone).textContent = item.description;
            $('.news__read-more a', $newsClone).setAttribute('href', item.url);

            $fragment.append($newsClone);
        });

        $('.news').innerHTML = '';
        $('.news').appendChild($fragment);
    }
}

export default News;
