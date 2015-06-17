var CourseView = require("views/courseview");

var Courses = Backbone.Marionette.CollectionView.extend({
    childView: CourseView
});

module.exports = Courses;