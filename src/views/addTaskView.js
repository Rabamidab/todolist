import {TaskModel} from '../models/taskModel';
import {KEYS} from '../variables';
import $ from 'jquery';

App.Views.AddTask = Backbone.View.extend({
    // el: '.todolist__input',
    tagName: 'input',
    className: 'todolist__input',
    events: {
        'keypress' : 'submit'
    },
    initialize: function() {
    },
    submit: function(key) {
        if ( key.keyCode == KEYS.ENTER ) {
            let newTaskTitle =  $(this.el).val();
            let newTask = new TaskModel({ title: newTaskTitle });
            this.collection.add(newTask);
        }
    },
    render: function () {
        this.$el.attr({type: 'text', placeholder: 'Ваша новая задача'});
        return this;
    }
});