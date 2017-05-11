export const Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'app': 'app',
    },
    index: () => {
        $('.welcome').removeClass('welcome_hidden');
        $('.todolist').addClass('todolist_hidden'); 
    },
    app: () => {
        $('.todolist').removeClass('todolist_hidden');
        $('.welcome').addClass('welcome_hidden');    
    }
});

new Router();

// Backbone.history.start();