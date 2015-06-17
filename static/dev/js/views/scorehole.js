var ScoreHole = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['score-hole'],
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