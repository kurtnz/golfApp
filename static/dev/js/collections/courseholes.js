var CourseHoleModel = require("models/coursehole");

var CourseHolesCollection = Backbone.Collection.extend({
    model: CourseHoleModel,
    initialize: function(models, props) {
        this.url = '/api/v1/course_hole/' + props.id
    }
});

module.exports = CourseHolesCollection;