import $ from 'jquery';
import _ from 'underscore';
import {App} from '../variables';

App.Views.App = Backbone.View.extend({
    el: '.todolist',
    template: ` 
            <input class="todolist__input" type="text" placeholder="Ваша новая задача">
            <ul class="todolist__list">

            </ul>`
    ,
    render() {
        // this.$el.html( this.template );
        // let tasksView = new App.Views.Tasks({ collection: tasksCollection});
        // this.$el.html( this.template );
        // this.$el.html( tasksView.render() );
    }
});

// App.Views.Input = Backbone.View.extend({
//     el: '.todolist',
//     template: ` 
//             <input class="todolist__input" type="text" placeholder="Ваша новая задача">
//             <ul class="todolist__list">

//             </ul>`
//     ,
//     render() {
//         this.$el.html( this.template );
//     }
// });