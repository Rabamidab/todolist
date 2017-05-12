import StartView from './views/startView';
import AppView from './views/appView';

const Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        app: 'app',
    },
    index() {
        const startView = new StartView();
        $('#root').html(startView.render().el);
    },
    app() {
        const appView = new AppView();
        $('#root').html(appView.render().el);
        $('.todolist').wrap('<div class="container"></div>');
    },
});

export default Router;
