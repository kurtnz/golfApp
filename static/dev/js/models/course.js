'use strict';

var HolesCollection = require("../collections/holes");

var CourseModel = Backbone.Model.extend({
    url: function() {
        return this.instanceUrl;
    },
    initialize: function(props) {
        this.url = '/api/v1/course/' + props.url;
        this.listenTo(this, 'sync', this.setCollection);
    },
    setCollection: function() {
        var holes = this.get("holes");
        if (holes){
            this.holes = new HolesCollection(holes);
            this.unset("holes");
        }
    }
});

module.exports = CourseModel;