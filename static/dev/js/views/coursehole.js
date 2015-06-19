'use strict';

var CourseHoleView = Backbone.Marionette.ItemView.extend({
    template: require('./templates/course-hole.hbs'),
    tagName: 'ul',
    className: 'course__hole'
});

module.exports = CourseHoleView;