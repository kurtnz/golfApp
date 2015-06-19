'use strict';

var CourseView = Backbone.Marionette.ItemView.extend({
    template: require('./templates/course.hbs'),
    events: {
        'click a': 'selectCourse'
    },
    selectCourse: function(e) {
        e.preventDefault();

        var courseId = this.model.get('id');

        // Save course to round
        window.roundModel.set({course_id: courseId});
        window.roundModel.save(null, {
            success: function(model, response, options) {
                model.set({id: response});

                window.vent.trigger('showScorecard');
            }
        });
    }
});

module.exports = CourseView;