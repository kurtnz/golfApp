'use strict';

var CourseHoleModel = require("../models/coursehole");

var HolesCollection = Backbone.Collection.extend({
    model: CourseHoleModel
});

module.exports = HolesCollection;