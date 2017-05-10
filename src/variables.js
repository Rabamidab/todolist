import _ from 'underscore';
import $ from 'jquery';

const KEYS = {
    ENTER: 13
};

window.App = {
    Models: {},
    Collections: {},
    Views:{}    
};

let template = function(id) {
    return _.template( $('#' + id).html() );
};

export {KEYS, App, template};