'use strict';

var Score = Backbone.Marionette.ItemView.extend({
    template: require('./templates/score.hbs'),
    events: {
        'click button': 'saveScore'
    },
    onRender: function(){
        // this.getPosition();
    },
    getPosition: function() {
        navigator.geolocation.getCurrentPosition(function(position) {
          createMap(position.coords.latitude, position.coords.longitude);
        }, function() {
            console.log('error');
        }, {'enableHighAccuracy':true,'timeout':10000,'maximumAge':0});

        function createMap(lat, long) {
            var myLatlng   = new google.maps.LatLng(lat,long);
            var mapOptions = { center: myLatlng, zoom: 12 };
            var map        = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var marker     = new google.maps.Marker({ position: myLatlng, map: map });
        }
    },
    saveScore: function() {
        var score    = this.$el.find('input[name="score"]').val();
        var putts    = this.$el.find('input[name="putts"]').val();
        var fairways = this.$el.find('input[name="fairways"]').val();
        var bunkers  = this.$el.find('input[name="bunkers"]').val();
        var club     = this.$el.find('input[name="club"]').val();

        // Update hole data
        this.model.save({
            'score': score,
            'putts': putts,
            'fairways': fairways,
            'bunkers': bunkers,
            'club': club
        });

        // Show scorecard
        window.vent.trigger('showScorecard');
    }
});

module.exports = Score;