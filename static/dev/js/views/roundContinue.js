'use strict';

var RoundContinue = Backbone.Marionette.ItemView.extend({
    template: require('./templates/round-continue.hbs'),
    events: {
        'click a': 'continueRound'
    },
    initialize: function() {
        window.roundModel = this.model;
    },
    continueRound: function(e) {
        e.preventDefault();
        window.vent.trigger('showScorecard');
    }
});

module.exports = RoundContinue;