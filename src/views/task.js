import {App, template} from '../variables';

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