'use strict';

var ScoreHole = require("../views/scorehole");

var ScoreCard = Backbone.Marionette.CollectionView.extend({
    childView: ScoreHole,
    tagName: 'ul'
});

module.exports = ScoreCard;