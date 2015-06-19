'use strict';

var ScoreHole = Backbone.Marionette.ItemView.extend({
    template: require('./templates/score-hole.hbs'),
    tagName: 'li',
    className: 'course__score',
    events: {
        'click a': 'editScore'
    },
    editScore: function(e) {
        e.preventDefault();
        var holeId = this.model.get('id');
        window.vent.trigger('editScore', holeId);
    }
});

module.exports = ScoreHole;