import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import './style.scss'

const KEYS = {
    ENTER: 13
};

let tasksCollection,
    tasksView,
    addTaskView;

window.App = {
    Models: {},
    Collections: {},
    Views:{}    
};

let template = function(id) {
    return _.template( $('#' + id).html() );
};

App.Models.Task = Backbone.Model.extend({
    validate: function (attrs) { 
        if ( ! attrs.title ) {
            return 'Имя задачи должно быть валидным!';
        }
    }
});

App.Collections.Task = Backbone.Collection.extend({
    model: App.Models.Task
});

App.Views.Task = Backbone.View.extend({
    tagName: 'li',
    className: 'todolist__task',
    template: template('taskTemplate'),
    initialize: function () {  
        this.model.on('change', this.render, this); 
        this.model.on('destroy', this.remove, this);
    },
    render: function () {
        var template = this.template(this.model.toJSON());
        this.$el.html( template );
        return this;
    },
    events:{
        'click .todolist__edit-task': 'editTask',
        'click .todolist__delete-task': 'destroy',
        'click .todolist__list-text': 'edit',
        'focusout .todolist__list-text': 'focusout'
    },
    edit: function (e) {
        $(e.currentTarget).attr('contenteditable', true).focus();
    },
    focusout: function (e) {
        let newTaskTitle = $(e.currentTarget).removeAttr('contenteditable').html();
        if ( newTaskTitle != '' ) {
            this.model.set('title', newTaskTitle, {validate:true});
        } else {
            this.model.destroy();
        }
    },
    destroy: function  () {
        this.model.destroy();
    },
    editTask: function  () {
        let newTaskTitle = prompt('Как переименуем задачу?', this.model.get('title'));
        this.model.set('title', newTaskTitle, {validate:true});
    }
});

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
})

App.Views.AddTask = Backbone.View.extend({
    el: '.todolist__input',
    events: {
        'keypress' : 'submit'
    },
    initialize: function() {
    },
    submit: function(key) {
        if ( key.keyCode == KEYS.ENTER ) {
            let newTaskTitle =  $(this.el).val();
            let newTask = new App.Models.Task({ title: newTaskTitle });
            this.collection.add(newTask);
        }
    }
});

tasksCollection = new App.Collections.Task([
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

tasksView = new App.Views.Tasks({ collection: tasksCollection});
addTaskView = new App.Views.AddTask({ collection: tasksCollection });

tasksView.render();
