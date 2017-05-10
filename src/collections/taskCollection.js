import {TaskModel} from '../models/taskModel';

App.Collections.Task = Backbone.Collection.extend({
    model: TaskModel
});