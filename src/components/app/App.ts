import AppController from '../controller/controller';
import { AppView, NewsData, SourcesData } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources');
        if (sources) {
            sources.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: NewsData) => this.view.drawNews(data))
            );
        }
        this.controller.getSources((data: SourcesData) => this.view.drawSources(data));
    }
}

export default App;
