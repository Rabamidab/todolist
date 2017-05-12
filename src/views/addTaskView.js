import TaskModel from '../models/taskModel';
import { KEYS } from '../variables';

const AddTaskView = Backbone.View.extend({
    tagName: 'input',
    className: 'todolist__input',
    attributes: {
        type: 'text',
        placeholder: 'Ваша новая задача',
    },
    events: {
        keypress: 'submit',
    },
    submit(key) {
        if (key.keyCode === KEYS.ENTER) {
            const newTaskTitle = $(this.el).val();
            const newTask = new TaskModel({ title: newTaskTitle });
            this.collection.add(newTask);
        }
    },
    render() {
        return this;
    },
});

export default AddTaskView;
