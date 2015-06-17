var CourseHoleView = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['course-hole'],
    tagName: 'ul',
    className: 'course__hole'
});

module.exports = CourseHoleView;