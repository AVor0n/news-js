import { NewsData, SourceData } from '../view/AppView';
import AppLoader from './AppLoader';

class AppController extends AppLoader {
    getSources(callback: (data: SourceData) => void) {
        super.getResp({ endpoint: 'sources' }, callback);
    }

    getNews(e: Event, callback: (data: NewsData) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (!sourceId) {
                    throw new ReferenceError('Атрибут data-source-id отсутствует у целевого элемента');
                }
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback,
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
