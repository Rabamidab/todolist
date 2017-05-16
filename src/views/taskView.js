const TaskView = Backbone.View.extend({
    tagName: 'li',
    className: 'todolist__task',
    template: _.template(`
        <% if ( done ) {%>
            <input class="todolist__checked" type="checkbox" checked>
        <% } else { %>
            <input class="todolist__checked" type="checkbox">
        <% } %>
        <span class="todolist__list-text">
            <%= title %>
        </span>
        <button class="todolist__edit-task">
            Edit
        </button> 
        <button class="todolist__delete-task">
            Delete
        </button>
    `),
    initialize() {
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    },
    render() {
        const template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this;
    },
    events: {
        'click .todolist__edit-task': 'editTask',
        'click .todolist__delete-task': 'destroy',
        'click .todolist__list-text': 'edit',
        'focusout .todolist__list-text': 'focusout',
        'click .todolist__checked': 'checked',
    },
    editTask() {
        const newTaskTitle = prompt('Как переименуем задачу?', this.model.get('title'));
        this.model.set('title', newTaskTitle, { validate: true });
    },
    focusout(e) {
        const newTaskTitle = $(e.currentTarget).removeAttr('contenteditable').html();
        if (newTaskTitle !== '') {
            this.model.set('title', newTaskTitle, { validate: true });
        } else {
            this.model.destroy();
        }
    },
    edit(e) {
        $(e.currentTarget).attr('contenteditable', true).focus();
    },
    destroy() {
        this.model.destroy();
    },
    checked(e) {
        const isChecked = e.currentTarget.checked;
        this.model.set('done', isChecked, { validate: true });
    },
});

export default TaskView;
