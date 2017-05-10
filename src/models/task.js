import {App} from '../variables';
 
App.Models.Task = Backbone.Model.extend({
    validate: function (attrs) { 
        if ( ! attrs.title ) {
            return 'Имя задачи должно быть валидным!';
        }
    }
});