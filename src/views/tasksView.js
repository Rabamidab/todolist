import TaskView from '../views/taskView';

const TasksView = Backbone.View.extend({
    tagName: 'ul',
    className: 'todolist__list',
    initialize() {
        this.collection.on('add', this.addOne, this);
    },
    render() {
        this.collection.each(this.addOne, this);
        return this;
    },
    addOne(task) {
        // создавать новый дочерний вид
        const taskView = new TaskView({ model: task });
        // добавлять его в корневой элемент
        this.$el.append(taskView.render().el);
    },
});

export default TasksView;
