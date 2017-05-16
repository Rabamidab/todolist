import TaskModel from '../models/taskModel';

const TaskCollection = Backbone.Collection.extend({
    model: TaskModel,
    
});

export default TaskCollection;
