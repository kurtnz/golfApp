'use strict';

window.app = require("./app");
var router = require("./router");


// Regions
// ----------------------------------------------

app.addRegions({
    appRegion: '#app',
    scoreRegion: '#course-score'
});


// Modify jquery ajax requests to check for token
// ----------------------------------------------

jQuery.ajaxSetup({

    cache: false,

    // Append token
    beforeSend: function(xhr) {
        var token = sessionStorage.getItem('golf_auth_token');
        if (token) {
            xhr.setRequestHeader('JWT-Authorization', token);
        }
    },

    // Response codes
    statusCode: {
        401: function () {
            console.log('401 error');
            vent.trigger('showLogin');
        },
        400: function () {
            console.log('400 error');
            vent.trigger('showLogin');
        }
    }

});


// Start app
// ----------------------------------------------

app.on('start', function() {

    // Event aggregator
    window.vent = new Backbone.Wreqr.EventAggregator();

    // TODO - Check for previous round
    // console.log('check for previous round');

    vent.on('showLogin', function() {
        router.navigate('/login', {trigger: true});
    });

    vent.on('showHome', function() {
        router.navigate('', {trigger: true});
    });

    // Course select
    vent.on('showCourses', function() {
        router.navigate('/courses', {trigger: true});
    });

    // Scorecard
    vent.on('showScorecard', function() {
        var roundId = window.roundModel.get('id');
        router.navigate('/scorecard/' + roundId, {trigger: true});
    });

    // Edit score
    vent.on('editScore', function(holeId) {
        router.navigate('/hole/' + holeId, {trigger: true});
    });

    // Start history
    if (!Backbone.History.started) {
        Backbone.history.start({pushState: true});
    }
});
app.start();