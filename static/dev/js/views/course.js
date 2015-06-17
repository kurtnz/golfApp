var CourseHoleView = require("views/coursehole");

var Course = Backbone.Marionette.CompositeView.extend({
    template: GolfApp.Templates['course-details'],
    childView: CourseHoleView,
    childViewContainer: '.course__holes',
    initialize: function() {
        this.listenTo(this.model, 'sync', this.render);
    }
});

module.exports = Course;