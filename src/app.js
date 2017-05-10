import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import './style.scss'
import {App} from './variables';
import './models/task';
import './collections/task';
import './views/task';
import './views/tasks';
import './views/add-task';

let tasksCollection = new App.Collections.Task([
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

let tasksView = new App.Views.Tasks({ collection: tasksCollection});
let addTaskView = new App.Views.AddTask({ collection: tasksCollection });

tasksView.render();