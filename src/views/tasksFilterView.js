const TasksFilterView = Backbone.View.extend({
    hideTemplate: '<a href="#app/all" class="todolist__filter">Скрыть выполненные задания</a>',
    showTemplate: '<a href="#app/filter" class="todolist__filter">Показать выполненные задания</a>',
    events: {
        click: 'checked',
    },
    initialize() {
        this.model.on('change', this.changed, this);
    },
    checked() {
        const isChecked = !this.model.get('isChecked');
        this.model.set({ isChecked: isChecked });
        console.log(this.model.get('isChecked'))
    },
    changed() {
        if (this.model.get('isChecked')) {
            this.$el.html(this.hideTemplate);
        } else {
            this.$el.html(this.showTemplate);
        }
    },
    render() {
        this.changed();
        return this;
    },
});

export default TasksFilterView;
