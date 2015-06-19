'use strict';

var HoleModel = Backbone.Model.extend({
    urlRoot: '/api/v1/hole',
    url: function() {
        return this.urlRoot;
    },
    defaults: {
        'score': 0,
        'putts': 0,
        'fairways': 0,
        'bunkers': 0,
        'club': ''
    },
    initialize: function() {
        this.listenTo(this, 'change', function(e) {
            window.vent.trigger('showScorecard');
        });
    }
});

module.exports = HoleModel;