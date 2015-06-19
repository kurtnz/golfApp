'use strict';

var CoursesCollection = Backbone.Collection.extend({
    url: '/api/v1/courses'
});

module.exports = CoursesCollection;