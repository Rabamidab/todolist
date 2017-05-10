import {App} from '../variables';

App.Collections.Task = Backbone.Collection.extend({
    model: App.Models.Task
});