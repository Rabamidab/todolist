import {App} from '../variables';

App.Views.Tasks = Backbone.View.extend({
    el: '.todolist__list',
    initialize: function() {
        this.collection.on('add', this.addOne, this );
    },
    render: function() {
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne: function(task) {
        // создавать новый дочерний вид
        let taskView = new App.Views.Task({ model: task });
        // добавлять его в корневой элемент
        this.$el.append(taskView.render().el);
    }
});