const TasksFilterView = Backbone.View.extend({
    tagName: 'a',
    className: 'todolist__filter',
    template: `
        Скрыть выполненные задания.
    `,
    events: {
        'click': 'checked',
    },
    initialize() {
        this.model.on('change', this.changed, this);
    },
    checked(){
        let isChecked = !this.model.get('isChecked');
        this.model.set({isChecked: isChecked,});
    },
    changed() {
        console.log(this.model.get('isChecked'));
        if (this.model.get('isChecked')){
            this.$el.html('Скрыть выполненные задания');
            this.$el.attr('href', '#app/all');
            this.isChecked = false;
        }
        else{
            this.$el.html('Показать выполненные задания');
            this.$el.attr('href', '#app/filter');
            this.isChecked = true;
        }
    },
    render() {
        this.checked();
        return this;
    },
});

export default TasksFilterView;