import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3cf5bc25a59d40d3a23ffc284b3e2942',
        });
    }
}

export default AppLoader;
