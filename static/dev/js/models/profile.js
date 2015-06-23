'use strict';

var ProfileModel = Backbone.Model.extend({
    url: "/api/v1/profile.json"
});

module.exports = ProfileModel;