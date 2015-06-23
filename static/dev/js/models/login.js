'use strict';

var LoginModel = Backbone.Model.extend({
    url: "/api/v1/login.json"
});

module.exports = LoginModel;