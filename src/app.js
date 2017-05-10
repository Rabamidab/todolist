import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import './style.scss'
import {App} from './variables';
import './collections/taskCollection';
import './views/tasksView';
import './views/addTaskView';
// import './views/appView';

// let tasksCollection = new App.Collections.Task([
//     {
//         title: 'Сходить в магазин'
//     },
//     {
//         title: 'Получить почту'
//     },
//     {
//         title: 'Сходить на работу'
//     },
// ]);

// let tasksView = new App.Views.Tasks({ collection: tasksCollection});
// let addTaskView = new App.Views.AddTask({ collection: tasksCollection });
// let appView = new App.Views.App();

// appView.render();
// tasksView.render();