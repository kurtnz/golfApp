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
var HoleModel = Backbone.Model.extend();
var ScoreHoleModel = Backbone.Model.extend({
    url: '/api/v1/hole',
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
    model: HoleModel
});
var ScoreCollection = Backbone.Collection.extend({
    model: ScoreHoleModel,
    initialize: function(models, props) {
        for( var i=0; i<props.numHoles; i++ ) {
            var roundId = window.roundModel.get('id');
            var hole = new ScoreHoleModel({ round_id: roundId });
            this.add(hole);
            hole.save();
        }
    }
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

var ScoreHole = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['score-hole'],
    tagName: 'li',
    className: 'course__score',
    events: {
        'click a': 'editScore'
    },
    editScore: function(e) {
        e.preventDefault();
        var holeModel = this.model;
        window.vent.trigger('editScore', holeModel);
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
        this.getPosition();
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

        this.model.set({
            'score': score,
            'putts': putts,
            'fairways': fairways,
            'bunkers': bunkers,
            'club': club
        });
        this.model.save();
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
        console.log('Show home');

        var homeView = new HomeView();
        GolfApp.appRegion.show(homeView);
    },

    showCourses: function() {
        console.log('Show courses');

        var coursesCollection = new CoursesCollection();
        var coursesCollectionFetch = coursesCollection.fetch();
        coursesCollectionFetch.done(function() {
            var courses = new Courses({ collection: coursesCollection });
            GolfApp.appRegion.show(courses);
        });
    },

    showScorecard: function(roundId) {
        console.log('Show scorecard');

        // TODO - Get scorecard from DB if exists or created new scorecard based on the round id

        var courseId              = window.roundModel.get('course_id');
        var courseModel           = new CourseModel({url: courseId});
        var courseHolesCollection = new CourseHolesCollection(null, {id: courseId});

        $.when(courseModel.fetch(), courseHolesCollection.fetch() ).done(function() {
            var numHoles        = courseHolesCollection.length;
            var course          = new Course({ model: courseModel, collection: courseHolesCollection });
            var scoreCollection = new ScoreCollection(null, {numHoles:numHoles});
            var scorecard       = new ScoreCard({ collection: scoreCollection });

            GolfApp.appRegion.show(course);
            GolfApp.scoreRegion.show(scorecard);
        });
    },

    editScore: function(holeModel) {
        console.log('Edit scorecard');

        var score = new Score({
            model: holeModel
        });
        GolfApp.appRegion.show(score);
    }

};

Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        'courses': 'showCourses',
        'scorecard/:roundId': 'showScorecard',
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

    // Check for previous round
    console.log('check for previous round');

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
    vent.on('editScore', function(holeModel) {
        // TODO - pass holemodel to hole view so we can switch back to showcard after save
        // controller.editScore(holeModel);
        GolfApp.router.navigate('/hole/' + window.courseId, {trigger: true});
    });

    // Start history
    if (!Backbone.History.started) {
        Backbone.history.start({pushState: true});
    }
});
GolfApp.start();