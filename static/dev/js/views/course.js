'use strict';

var CourseHoleView = require("../views/coursehole");

var Course = Backbone.Marionette.CompositeView.extend({
    template: require('./templates/course-details.hbs'),
    childView: CourseHoleView,
    childViewContainer: '.course__holes',
    initialize: function() {
        this.listenTo(this.model, 'sync', this.render);
    }
});

module.exports = Course;