import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import './style.scss'
// const path = require('./twice');
// console.log('Hello webpack 2');
// let a = 3;

const ListItem = Backbone.Model.extend({
    defaults: {
        description: '',
        deadline: 10,
        is_checked: false
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