import $ from 'jquery';
import _ from 'underscore';
import {App} from '../variables';

let tasksCollection = new App.Collections.Task([
    {
        title: 'Сходить в магазин'
    },
    {
        title: 'Получить почту'
    },
    {
        title: 'Сходить на работу'
    },
]);

App.Views.App = Backbone.View.extend({
    el: '.todolist',
    render() {
        let addTaskView = new App.Views.AddTask({ collection: tasksCollection });
        let tasksView = new App.Views.Tasks({ collection: tasksCollection});
        this.$el.html();
        this.$el.append(addTaskView.render().$el);
        this.$el.append(tasksView.render().$el);
    }
});

let appView = new App.Views.App();
appView.render();
