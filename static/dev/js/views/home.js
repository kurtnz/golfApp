var RoundModel = require("models/round");

var HomeView = Backbone.Marionette.ItemView.extend({
    template: app.Templates['home'],
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