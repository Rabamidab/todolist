import './style.scss';
import { App } from './variables';
import Router from './router';
import './collections/taskCollection';
import './views/tasksView';
import './views/addTaskView';
import './views/appView';

Backbone.history.start();