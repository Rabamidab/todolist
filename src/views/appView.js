import AddTaskView from '../views/addTaskView';
import TasksView from '../views/tasksView';
import { tasksCollection } from '../variables';

const AppView = Backbone.View.extend({
    className: 'todolist',
    render() {
        const addTaskView = new AddTaskView({ collection: tasksCollection });
        const tasksView = new TasksView({ collection: tasksCollection });
        this.$el.html();
        this.$el.append(addTaskView.render().$el);
        this.$el.append(tasksView.render().$el);
        return this;
    },
});

export default AppView;
