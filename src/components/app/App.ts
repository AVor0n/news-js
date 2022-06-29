import AppController from '../controller/Controller';
import { AppView } from '../view/AppView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector<HTMLElement>('.sources');
        sources && sources.addEventListener('click', e => this.controller.getNews(e, data => this.view.drawNews(data)));
        this.controller.getSources(data => this.view.drawSources(data));
    }
}

export default App;
