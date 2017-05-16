import StartView from './views/startView';
import AppView from './views/appView';
import { vent } from './variables';

const Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        // app: 'app',
        'app/:id': 'app',
    },
    appView: {
        instance: undefined,
        setInstance(view) {
            this.instance = view;
        },
        getInstance() {
            return this.instance;
        },
        remove() {
            if (this.instance !== undefined) {
                this.instance.remove();
                this.instance.unbind();
                this.instance = undefined;
            }
        },
    },
    index() {
        this.appView.remove();
        this.appView.setInstance(new StartView());
        $('#root').html(this.appView.getInstance().render().el);
    },
    // app() {
    //     this.appView.remove();
    //     this.appView.setInstance(new AppView());
    //     $('#root').html(this.appView.getInstance().render().el);
    //     $('.todolist').wrap('<div class="container"></div>');
    // },
    app(id) {
        this.appView.remove();
        this.appView.setInstance(new AppView());
        $('#root').html(this.appView.getInstance().render().$el);
        // $('.todolist').wrap('<div class="container"></div>');
        vent.trigger('appfilt:show', id);
    },
});

export default Router;
