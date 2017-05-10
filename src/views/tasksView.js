import {App} from '../variables';
import {TaskView} from '../views/taskView';

App.Views.Tasks = Backbone.View.extend({
    // el: '.todolist__list',
    tagName: 'ul',
    className: 'todolist__list',
    initialize: function() {
        this.collection.on('add', this.addOne, this );
    },
    render: function() {
        // this.$el.attr({type: 'text', placeholder: 'Ваша новая задача'})
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function(task) {
        // создавать новый дочерний вид
        let taskView = new TaskView({ model: task });
        // добавлять его в корневой элемент
        this.$el.append(taskView.render().el);
    }
});
