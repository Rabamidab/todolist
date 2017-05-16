const TaskModel = Backbone.Model.extend({
    defaults: {
        done: false,
    },
    validate(attrs) {
        if (!attrs.title) {
            return 'Имя задачи должно быть валидным!';
        }
    },
});

export default TaskModel;
