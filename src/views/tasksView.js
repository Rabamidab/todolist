import {App} from '../variables';
import {TaskView} from '../views/taskView';

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

App.Views.Tasks = Backbone.View.extend({
    // el: '.todolist__list',
    tagName: 'input',
    className: 'todolist__input',
    placeholder: 'Ваша новая задача',
    initialize: function() {
        this.collection.on('add', this.addOne, this );
    },
    render: function() {
        this.$el.attr({type: 'text', placeholder: 'Ваша новая задача'})
        this.collection.each(this.addOne, this);
        console.log(this.el);
        return this;
    },
    addOne: function(task) {
        // создавать новый дочерний вид
        let taskView = new TaskView({ model: task });
        // добавлять его в корневой элемент
        this.$el.append(taskView.render().el);
    }
});

let tasksView = new App.Views.Tasks({ collection: tasksCollection});

tasksView.render();