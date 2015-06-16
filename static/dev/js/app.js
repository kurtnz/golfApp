"use strict";

// Models
// ----------------------------------------------

var RoundModel = Backbone.Model.extend({
    url: '/api/v1/round'
});
var CourseHoleModel = Backbone.Model.extend();
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
var CourseHoleModel = Backbone.Model.extend();
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
var SingleHoleModel = Backbone.Model.extend({urlRoot : '/api/v1/hole'});


// Collections
// ----------------------------------------------

var CourseHolesCollection = Backbone.Collection.extend({
    model: CourseHoleModel,
    initialize: function(models, props) {
        this.url = '/api/v1/course_hole/' + props.id
    }
});
var CoursesCollection = Backbone.Collection.extend({
    url: '/api/v1/courses'
});
var HolesCollection = Backbone.Collection.extend({
    model: CourseHoleModel
});
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


// Views
// ----------------------------------------------

/**
 * [HomeView Display options on initial page load]
 */
var HomeView = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['home'],
    events: {
        'click .new-round': 'newRound'
    },
    newRound: function(e) {
        e.preventDefault();
        window.roundModel = new RoundModel();
        window.vent.trigger('showCourses');
    }
});

/**
 * [CourseHoleView Individual hole view]
 */
var CourseHoleView = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['course-hole'],
    tagName: 'ul',
    className: 'course__hole'
});

/**
 * [Course Overall course view]
 */
var Course = Backbone.Marionette.CompositeView.extend({
    template: GolfApp.Templates['course-details'],
    childView: CourseHoleView,
    childViewContainer: '.course__holes',
    initialize: function() {
        this.listenTo(this.model, 'sync', this.render);
    }
});

/**
 * [CourseView Childview of Courses]
 */
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

/**
 * [Courses List of courses]
 */
var Courses = Backbone.Marionette.CollectionView.extend({
    childView: CourseView
});


/**
 * [ScoreHole Individual hole score]
 */
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
var ScoreCard = Backbone.Marionette.CollectionView.extend({
    childView: ScoreHole,
    tagName: 'ul'
});
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


// Regions
// ----------------------------------------------

GolfApp.addRegions({
    appRegion: '#app',
    scoreRegion: '#course-score'
});


// Router 
// ----------------------------------------------

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

            // TODO - why doesn't scorecard get rendered after savign score?
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

window.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        'courses': 'showCourses',
        'scorecard/:roundId': 'showScorecard',
        'hole/:holeId': 'editScore',
        '': 'home'
    }
});


// Start app
// ----------------------------------------------

GolfApp.on('start', function() {

    // Router
    GolfApp.router = new Router({controller: controller});

    // Event aggregator
    window.vent = new Backbone.Wreqr.EventAggregator();

    // TODO - Check for previous round
    // console.log('check for previous round');

    // Home
    vent.on('showHome', function() {
        GolfApp.router.navigate('', {trigger: true});
    });

    // Course select
    vent.on('showCourses', function() {
        GolfApp.router.navigate('/courses', {trigger: true});
    });

    // Scorecard
    vent.on('showScorecard', function() {
        var roundId = window.roundModel.get('id');
        GolfApp.router.navigate('/scorecard/' + roundId, {trigger: true});
    });

    // Edit score
    vent.on('editScore', function(holeId) {
        GolfApp.router.navigate('/hole/' + holeId, {trigger: true});
    });

    // Start history
    if (!Backbone.History.started) {
        Backbone.history.start({pushState: true});
    }
});
GolfApp.start();