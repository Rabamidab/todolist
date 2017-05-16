import AddTaskView from '../views/addTaskView';
import TasksView from '../views/tasksView';
import TasksFilterView from '../views/tasksFilterView'
import { tasksCollection } from '../variables';
import TasksFilterModel from '../models/tasksFilterModel'

const AppView = Backbone.View.extend({
    initialize: function() {
        const template = _.template('<div class="container"><%= title %></div>');
        const html = '<div class="container todolist"></div>';
        this.setElement(html);
    },
    render() {
        const addTaskView = new AddTaskView({ collection: tasksCollection });
        this.$el.append(addTaskView.render().$el);

        const tasksView = new TasksView({ collection: tasksCollection, model: tasksFilterModel });
        this.$el.append(tasksView.render().$el);

        const tasksFilterModel = new TasksFilterModel(); 
        const tasksFilterView = new TasksFilterView({ model: tasksFilterModel });
        this.$el.append(tasksFilterView.render().$el);

        return this;
    },
});

export default AppView;
