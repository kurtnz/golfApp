window.app = require("./app");
var router = require("./router");


// Regions
app.addRegions({
    appRegion: '#app',
    scoreRegion: '#course-score'
});


// Start app
app.on('start', function() {

    // Event aggregator
    window.vent = new Backbone.Wreqr.EventAggregator();

    // TODO - Check for previous round
    // console.log('check for previous round');

    Home
    vent.on('showHome', function() {
        app.router.navigate('', {trigger: true});
    });

    // Course select
    vent.on('showCourses', function() {
        app.router.navigate('/courses', {trigger: true});
    });

    // Scorecard
    vent.on('showScorecard', function() {
        var roundId = window.roundModel.get('id');
        app.router.navigate('/scorecard/' + roundId, {trigger: true});
    });

    // Edit score
    vent.on('editScore', function(holeId) {
        app.router.navigate('/hole/' + holeId, {trigger: true});
    });

    // Start history
    if (!Backbone.History.started) {
        Backbone.history.start({pushState: true});
    }
});
app.start();