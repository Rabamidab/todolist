const StartView = Backbone.View.extend({
    className: 'welcome',
    template: `
        <h2 class="welcome__header">Чтобы открыть приложение нажмите на кнопку.</h2>
        <a class="welcome__goto-app" href="#app/all">Открыть</a>
    `,
    render() {
        this.$el.html(this.template);
        return this;
    },
});

export default StartView;
