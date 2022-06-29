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

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        if (!newsItemTemp) throw new Error('На странице отсутствует #newsItemTemp');

        news.forEach((item, idx) => {
            const $newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
            const $newsItem = $newsClone.querySelector<HTMLDivElement>('.news__item');
            const $newsMetaPhoto = $newsClone.querySelector<HTMLImageElement>('.news__meta-photo');
            const $newsMetaAuthor = $newsClone.querySelector<HTMLElement>('.news__meta-author');
            const $newsMetaDate = $newsClone.querySelector<HTMLElement>('.news__meta-date');

            idx % 2 && $newsItem && $newsItem.classList.add('alt');

            $newsMetaPhoto &&
                ($newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`);
            $newsMetaAuthor && ($newsMetaAuthor.textContent = item.author || item.source.name);
            $newsMetaDate && ($newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-'));

            const $newsDescriptionTitle = $newsClone.querySelector('.news__description-title');
            const $newsDescriptionSource = $newsClone.querySelector('.news__description-source');
            const $newsDescriptionContent = $newsClone.querySelector('.news__description-content');
            const $newsReadMore = $newsClone.querySelector('.news__read-more a');
            $newsDescriptionTitle && ($newsDescriptionTitle.textContent = item.title);
            $newsDescriptionSource && ($newsDescriptionSource.textContent = item.source.name);
            $newsDescriptionContent && ($newsDescriptionContent.textContent = item.description);
            $newsReadMore && $newsReadMore.setAttribute('href', item.url);

            fragment.append($newsClone);
        });

        const $news = document.querySelector<HTMLElement>('.news');
        if (!$news) throw new Error('На странице отсутствует #news');
        $news.innerHTML = '';
        $news.appendChild(fragment);
    }
}

export default News;
