import TaskView from '../views/taskView';
import { vent } from '../variables';

let currentId = '';

const TasksView = Backbone.View.extend({
    tagName: 'ul',
    className: 'todolist__list',
    initialize() {
        this.collection.on('add', this.addOne, this);
        vent.on('appfilt:show', this.changeCurrentID, this);
        this.collection.on('change', this.render, this);
    },
    changeCurrentID(id) {
        currentId = id;
        this.render();
    },
    render() {
        this.$el.html('');
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne(task) {
        const taskView = new TaskView({ model: task });
        if (currentId === 'filter'){
            if (!taskView.model.get('done')) {
                this.$el.append(taskView.render().el);
            } 
        } else {
            this.$el.append(taskView.render().el);
        }
    },
});

export default TasksView;
