const TaskModel = Backbone.Model.extend({
    validate(attrs) {
        if (!attrs.title) {
            return 'Имя задачи должно быть валидным!';
        }
    },
});

export default TaskModel;
