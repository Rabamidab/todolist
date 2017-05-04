import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import './style.scss'

window.App = {
    Models: {},
    Views: {},
    Collections: {}
};

window.template = function ( id ) {
    return _.template( $('#' + id).html() )
}

App.Models.Task = Backbone.Model.extend({
    defaults: {
        checked: false
    }
});

App.Views.Task = Backbone.View.extend({
    tagName: 'li',
    className: 'todolist__task',
    initialize: function initialize() {
        // this.render();
    },
    render: function () {
        this.$el.html( this.model.get('title') );
        return this;
    }
});

App.Collections.Tasks = Backbone.Collections.extend({
    model: App.Models.Task
});

App.Views.Tasks = Backbone.View.extend({
    tagName: 'ul',
    render: function () {
        this.collection.each(this.addOne, this)
        return this;
    },
    addOne: function ( task ) {
        let taskView = new App.Views.Task({ model: task });
        $('.todolist__list').append(taskView);
    }
});

let tasksCollection = App.Collections.Tasks([
    {
        title: 'Взять пиво',
        preority: 1
    },
    {
        title: 'Сходить в кино',
        preority: 3
    },
    {
        title: 'Прыгнуть в лужу',
        preority: 2
    }
]);

var tasksViev = new App.Views.Tasks({ collection: tasksCollection })

tasksViev.render();





