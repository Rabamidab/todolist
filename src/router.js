import $ from 'jquery';

let Router = Backbone.Router.extend({
    routes: {
        ''     : 'index',
        'app' : 'app' 
    },
    index: function() {
        $('.welcome').removeClass('welcome_hidden');
        $('.todolist').addClass('todolist_hidden'); 
    },
    app: function() {
        $('.todolist').removeClass('todolist_hidden');
        $('.welcome').addClass('welcome_hidden');    
    }
});

new Router();

Backbone.history.start();