(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./app":2,"./router":20}],2:[function(require,module,exports){
"use strict";

var GolfApp = new Marionette.Application();
module.exports = GolfApp;
},{}],3:[function(require,module,exports){
var HomeView = require("views/home");
var Courses = require("views/courses");
var Course = require("views/course");
var ScoreCard = require("views/scorecard");
var Score = require("views/score");

var CourseModel = require("models/course");
var SingleHoleModel = require("models/singlehole");

var CoursesCollection = require("collections/courses");
var CourseHolesCollection = require("collections/courseholes");
var ScoreCollection = require("collections/score");



var controller = {

    home: function() {
        var homeView = new HomeView();
        GolfApp.appRegion.show(homeView);
    },

    showCourses: function() {
        var coursesCollection = new CoursesCollection();
        var coursesCollectionFetch = coursesCollection.fetch();
        coursesCollectionFetch.done(function() {
            var courses = new Courses({ collection: coursesCollection });
            GolfApp.appRegion.show(courses);
        });
    },

    showScorecard: function() {
        var courseId              = window.roundModel.get('course_id');
        var roundId               = window.roundModel.get('id');
        var courseModel           = new CourseModel({url: courseId});
        var courseHolesCollection = new CourseHolesCollection(null, {id: courseId});

        $.when(courseModel.fetch(), courseHolesCollection.fetch() ).done(function() {
            var numHoles        = courseHolesCollection.length;
            var course          = new Course({ model: courseModel, collection: courseHolesCollection });
            var scoreCollection = new ScoreCollection();

            $.when(scoreCollection.fetch({data: {roundId: roundId, numHoles: numHoles }})).done(function() {
                var scorecard = new ScoreCard({ collection: scoreCollection });

                GolfApp.appRegion.show(course);
                GolfApp.scoreRegion.reset().show(scorecard, {forceShow: true});
            });
        });
    },

    editScore: function(holeId) {
        var holeModel = new SingleHoleModel({ id: holeId });
        $.when( holeModel.fetch() ).done(function() {
            var score = new Score({
                model: holeModel
            });
            GolfApp.appRegion.show(score);
        });
    }

};

module.exports = controller;
},{"collections/courseholes":4,"collections/courses":5,"collections/score":7,"models/course":8,"models/singlehole":11,"views/course":12,"views/courses":14,"views/home":16,"views/score":17,"views/scorecard":18}],4:[function(require,module,exports){
var CourseHoleModel = require("models/coursehole");

var CourseHolesCollection = Backbone.Collection.extend({
    model: CourseHoleModel,
    initialize: function(models, props) {
        this.url = '/api/v1/course_hole/' + props.id
    }
});

module.exports = CourseHolesCollection;
},{"models/coursehole":9}],5:[function(require,module,exports){
var CoursesCollection = Backbone.Collection.extend({
    url: '/api/v1/courses'
});

module.exports = CoursesCollection;
},{}],6:[function(require,module,exports){
var CourseHoleModel = require("models/coursehole");

var HolesCollection = Backbone.Collection.extend({
    model: CourseHoleModel
});

module.exports = HolesCollection;
},{"models/coursehole":9}],7:[function(require,module,exports){
var ScoreCollection = Backbone.Collection.extend({
    model: HoleModel,
    url: '/api/v1/holes',
    initialize: function(models, props) {
        
    }
    // initialize: function(models, props) {
    //     for( var i=0; i<props.numHoles; i++ ) {

    //         var roundId = window.roundModel.get('id');
    //         var hole    = new HoleModel();

    //         this.add(hole);
    //         hole.save({ 
    //             round_id: roundId,
    //             hole_index: i+1
    //         }, {
    //             success: function(model, response, options) {
    //                 model.set({id: response});
    //             }
    //         });

    //     }
    // }
});

module.exports = ScoreCollection;
},{}],8:[function(require,module,exports){
var HolesCollection = require("collections/holes");

var CourseModel = Backbone.Model.extend({
    url: function() {
        return this.instanceUrl;
    },
    initialize: function(props) {
        this.url = '/api/v1/course/' + props.url;
        this.listenTo(this, 'sync', this.setCollection);
    },
    setCollection: function() {
        var holes = this.get("holes");
        if (holes){
            this.holes = new HolesCollection(holes);
            this.unset("holes");
        }
    }
});

module.exports = CourseModel;
},{"collections/holes":6}],9:[function(require,module,exports){
var CourseHoleModel = Backbone.Model.extend();

module.exports = CourseHoleModel;
},{}],10:[function(require,module,exports){
var RoundModel = Backbone.Model.extend({
    url: '/api/v1/round'
});
},{}],11:[function(require,module,exports){
var SingleHoleModel = Backbone.Model.extend({urlRoot : '/api/v1/hole'});

module.exports = SingleHoleModel;
},{}],12:[function(require,module,exports){
var CourseHoleView = require("views/coursehole");

var Course = Backbone.Marionette.CompositeView.extend({
    template: GolfApp.Templates['course-details'],
    childView: CourseHoleView,
    childViewContainer: '.course__holes',
    initialize: function() {
        this.listenTo(this.model, 'sync', this.render);
    }
});

module.exports = Course;
},{"views/coursehole":13}],13:[function(require,module,exports){
var CourseHoleView = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['course-hole'],
    tagName: 'ul',
    className: 'course__hole'
});

module.exports = CourseHoleView;
},{}],14:[function(require,module,exports){
var CourseView = require("views/courseview");

var Courses = Backbone.Marionette.CollectionView.extend({
    childView: CourseView
});

module.exports = Courses;
},{"views/courseview":15}],15:[function(require,module,exports){
var CourseView = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['course'],
    events: {
        'click a': 'selectCourse'
    },
    selectCourse: function(e) {
        e.preventDefault();

        var courseId = this.model.get('id');

        // Save course to round
        window.roundModel.set({course_id: courseId});
        window.roundModel.save(null, {
            success: function(model, response, options) {
                model.set({id: response});

                window.vent.trigger('showScorecard');
            }
        });
    }
});

module.exports = CourseView;
},{}],16:[function(require,module,exports){
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
},{"models/round":10}],17:[function(require,module,exports){
var Score = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['score'],
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
},{}],18:[function(require,module,exports){
var ScoreHole = require("views/scorehole");

var ScoreCard = Backbone.Marionette.CollectionView.extend({
    childView: ScoreHole,
    tagName: 'ul'
});

module.exports = ScoreCard;
},{"views/scorehole":19}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
var controller = require("./controller");

window.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        'courses': 'showCourses',
        'scorecard/:roundId': 'showScorecard',
        'hole/:holeId': 'editScore',
        '': 'home'
    }
});

var router = new Router({controller: controller});

module.exports = router;
},{"./controller":3}]},{},[1]);
