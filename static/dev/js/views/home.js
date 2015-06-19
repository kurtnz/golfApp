'use strict';

var RoundModel = require("../models/round");

var HomeView = Backbone.Marionette.ItemView.extend({
    template: require('./templates/home.hbs'),
    events: {
        'click .new-round': 'newRound'
    },
    newRound: function(e) {
        e.preventDefault();
        window.roundModel = new RoundModel();
        window.vent.trigger('showCourses');
    }
});

module.exports = HomeView;