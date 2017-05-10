import {App} from '../variables';

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