import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import './style.scss'
// const path = require('./twice');
// console.log('Hello webpack 2');
// let a = 3;

const ListItem = Backbone.Model.extend({
    defaults: {
        description: 'Неизвестно',
        deadline: 10,
        is_checked: false
    },
    tagName: 'li',
    render: function () {
        this.$el.html(this.model.get('description'));
    },
    validate: function( attrs ) {
        if ( attrs.description == '' ) {
            return 'Вы ничего не ввели!';
        }
    }
});

const ListItemsCollection = Backbone.Collection.extend({  
    model: ListItem
});

const todolist = new ListItemsCollection;


todolist.comparator = function(listitem) {
    return listitem.get('deadline');
};

todolist.add(new ListItem({ description: 'Побегать', deadline: 5 }));
todolist.add(new ListItem({ description: 'Попрыгать', deadline: 1 }));
todolist.add(new ListItem({ description: 'Сделать уроки', deadline: 3 }));
todolist.add(new ListItem({ description: 'Погонять голубей', deadline: 2 }));
todolist.add(new ListItem({ description: 'Починить самолёт', deadline: 9 }));

console.log(todolist.pluck('description'));

// ----------------------------------------------------------------------

window.App = {
    Models: {},
    Views: {},
    Collections: {}
};

App.Models.Person = Backbone.Model.extend({
    defaults: {
        name: 'Dima',
        age: 23,
        job: 'wd'
    }
});

App.Collections.People = Backbone.Collection.extend({
    model: App.Models.Person
});

let person = new App.Models.Person;

App.Views.People = Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
        // console.log(this.collection);
        this.render();
    },

    render: function () {
        this.collection.each((person)=>{
            // console.log(this.collection);
            var personView = new App.Views.Person({model: person});
            // this.$el.append(personView.el);
        }, this);
        // $('.todolist__list').append(this.$el);
    },

    className: 'todolist__list'

});

App.Views.Person = Backbone.View.extend({
    tagName: 'li',

    initialize: function () {
        this.render();
    },

    className: 'todolist__item',

    template: _.template($('#person-id').html()),

    render: function () {
        this.$el.html(this.template( this.model.toJSON() ));
        $('.todolist__list').append(this.$el);
    }
});

// let person = new Person;
// var personView = new PersonView({model: person});
// personView.render();
// console.log(personView.el);

let peopleCollection = new App.Collections.People([
    {
        name: 'Пётр',
        age: 21,
        job: 'таксист'
    },
    {
        name: 'Леон',
        age: 35,
        job: 'тракторист'
    },
    {
        name: 'Светка',
        age: 19,
        job: 'няша'
    }
]);
// console.log(peopleCollection);
let peopleView = new App.Views.People({ collection: peopleCollection });
// console.log(peopleView);











