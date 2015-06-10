// Data
// ----------------------------------------------

// fauxServer.addRoutes({
//     course: {
//         urlExp: "api/v1/course/:courseId",
//         httpMethod: "GET",
//         handler: function (context, courseId) {
//             var data;
//             if(courseId == 1) {
//                 data = {
//                     coursename: 'Yarra Bend',
//                     holes: [
//                         {
//                             holenum: 1,
//                             white: {
//                                 par: 4,
//                                 handicap: 9,
//                                 distance: 330
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 11,
//                                 distance: 293
//                             }
//                         },
//                         {
//                             holenum: 2,
//                             white: {
//                                 par: 4,
//                                 handicap: 3,
//                                 distance: 380
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 3,
//                                 distance: 318
//                             }
//                         },
//                         {
//                             holenum: 3,
//                             white: {
//                                 par: 4,
//                                 handicap: 11,
//                                 distance: 308
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 8,
//                                 distance: 297
//                             }
//                         },
//                         {
//                             holenum: 4,
//                             white: {
//                                 par: 3,
//                                 handicap: 17,
//                                 distance: 112
//                             },
//                             red: {
//                                 par: 3,
//                                 handicap: 18,
//                                 distance: 103
//                             }
//                         },
//                         {
//                             holenum: 5,
//                             white: {
//                                 par: 4,
//                                 handicap: 1,
//                                 distance: 387
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 1,
//                                 distance: 321
//                             }
//                         },
//                         {
//                             holenum: 6,
//                             white: {
//                                 par: 4,
//                                 handicap: 13,
//                                 distance: 327
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 10,
//                                 distance: 288
//                             }
//                         },
//                         {
//                             holenum: 7,
//                             white: {
//                                 par: 4,
//                                 handicap: 5,
//                                 distance: 341
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 7,
//                                 distance: 281
//                             }
//                         },
//                         {
//                             holenum: 8,
//                             white: {
//                                 par: 3,
//                                 handicap: 15,
//                                 distance: 159
//                             },
//                             red: {
//                                 par: 3,
//                                 handicap: 14,
//                                 distance: 127
//                             }
//                         },
//                         {
//                             holenum: 9,
//                             white: {
//                                 par: 5,
//                                 handicap: 7,
//                                 distance: 445
//                             },
//                             red: {
//                                 par: 5,
//                                 handicap: 6,
//                                 distance: 377
//                             }
//                         },
//                         {
//                             holenum: 10,
//                             white: {
//                                 par: 3,
//                                 handicap: 14,
//                                 distance: 122
//                             },
//                             red: {
//                                 par: 3,
//                                 handicap: 13,
//                                 distance: 115
//                             }
//                         },
//                         {
//                             holenum: 11,
//                             white: {
//                                 par: 4,
//                                 handicap: 18,
//                                 distance: 260
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 15,
//                                 distance: 244
//                             }
//                         },
//                         {
//                             holenum: 12,
//                             white: {
//                                 par: 4,
//                                 handicap: 2,
//                                 distance: 370
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 2,
//                                 distance: 331
//                             }
//                         },
//                         {
//                             holenum: 13,
//                             white: {
//                                 par: 5,
//                                 handicap: 16,
//                                 distance: 435
//                             },
//                             red: {
//                                 par: 5,
//                                 handicap: 9,
//                                 distance: 382
//                             }
//                         },
//                         {
//                             holenum: 14,
//                             white: {
//                                 par: 3,
//                                 handicap: 4,
//                                 distance: 160
//                             },
//                             red: {
//                                 par: 3,
//                                 handicap: 16,
//                                 distance: 122
//                             }
//                         },
//                         {
//                             holenum: 15,
//                             white: {
//                                 par: 5,
//                                 handicap: 6,
//                                 distance: 486
//                             },
//                             red: {
//                                 par: 5,
//                                 handicap: 5,
//                                 distance: 395
//                             }
//                         },
//                         {
//                             holenum: 16,
//                             white: {
//                                 par: 3,
//                                 handicap: 12,
//                                 distance: 148
//                             },
//                             red: {
//                                 par: 3,
//                                 handicap: 17,
//                                 distance: 112
//                             }
//                         },
//                         {
//                             holenum: 17,
//                             white: {
//                                 par: 4,
//                                 handicap: 8,
//                                 distance: 333
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 4,
//                                 distance: 307
//                             }
//                         },
//                         {
//                             holenum: 18,
//                             white: {
//                                 par: 4,
//                                 handicap: 10,
//                                 distance: 306
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 12,
//                                 distance: 290
//                             }
//                         }
//                     ]
//                 };
//             } else if(courseId == 2) {
//                 data = {
//                     coursename: 'Burnley',
//                     holes: [
//                         {
//                             holenum: 1,
//                             white: {
//                                 par: 4,
//                                 handicap: 14,
//                                 distance: 284
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 13,
//                                 distance: 268
//                             }
//                         },
//                         {
//                             holenum: 2,
//                             white: {
//                                 par: 4,
//                                 handicap: 12,
//                                 distance: 255
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 11,
//                                 distance: 243
//                             }
//                         },
//                         {
//                             holenum: 3,
//                             white: {
//                                 par: 4,
//                                 handicap: 4,
//                                 distance: 323
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 3,
//                                 distance: 303
//                             }
//                         },
//                         {
//                             holenum: 4,
//                             white: {
//                                 par: 4,
//                                 handicap: 6,
//                                 distance: 313
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 5,
//                                 distance: 305
//                             }
//                         },
//                         {
//                             holenum: 5,
//                             white: {
//                                 par: 4,
//                                 handicap: 8,
//                                 distance: 287
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 7,
//                                 distance: 280
//                             }
//                         },
//                         {
//                             holenum: 6,
//                             white: {
//                                 par: 3,
//                                 handicap: 18,
//                                 distance: 117
//                             },
//                             red: {
//                                 par: 3,
//                                 handicap: 17,
//                                 distance: 107
//                             }
//                         },
//                         {
//                             holenum: 7,
//                             white: {
//                                 par: 3,
//                                 handicap: 10,
//                                 distance: 150
//                             },
//                             red: {
//                                 par: 3,
//                                 handicap: 9,
//                                 distance: 148
//                             }
//                         },
//                         {
//                             holenum: 8,
//                             white: {
//                                 par: 4,
//                                 handicap: 16,
//                                 distance: 225
//                             },
//                             red: {
//                                 par: 4,
//                                 handicap: 15,
//                                 distance: 210
//                             }
//                         },
//                         {
//                             holenum: 9,
//                             white: {
//                                 par: 3,
//                                 handicap: 2,
//                                 distance: 182
//                             },
//                             red: {
//                                 par: 3,
//                                 handicap: 1,
//                                 distance: 174
//                             }
//                         }
//                     ]
//                 };
//             }
//             return data;
//         }
//     },
//     courses: {
//         urlExp: "api/v1/courses",
//         httpMethod: "GET",
//         handler: function (context) {
//             return  [
//                 { id: 1, name: 'Yarra Bend' },
//                 { id: 2, name: 'Burnley' },
//                 { id: 3, name: 'Ivanhoe' },
//                 { id: 4, name: 'Wattle Park' }
//             ];
//         }
//     },
//     getHole: {
//         urlExp: "api/v1/hole",
//         httpMethod: "POST",
//         handler: function(context) {
//             var randId = parseInt((Math.random(999999999)) * 100000000000000000);
//             return {
//                 'id': randId,
//                 'score': 0,
//                 'putts': 0,
//                 'fairways': 0,
//                 'bunkers': 0,
//                 'club': ''
//             }
//         }
//     },
//     saveHole: {
//         urlExp: "api/v1/hole",
//         httpMethod: "PUT",
//         handler: function(context) {
//             return {
//                 'id': context.data.id,
//                 'score': context.data.score,
//                 'putts': context.data.putts,
//                 'fairways': context.data.fairways,
//                 'bunkers': context.data.bunkers,
//                 'club': context.data.club
//             }
//         }
//     }
// });


// Models
// ----------------------------------------------

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
var RoundHoleModel = Backbone.Model.extend({
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
            window.vent.trigger('showScorecard', courseId);
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
var RoundCollection = Backbone.Collection.extend({
    model: RoundHoleModel,
    initialize: function(models, props) {
        for( var i=0; i<props.numHoles; i++ ) {
            var hole = new RoundHoleModel();
            this.add(hole);
            hole.save();
        }
    }
});


// Views
// ----------------------------------------------

var HomeView = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['home'],
    events: {
        'click .new-round': 'newRound'
    },
    newRound: function(e) {
        e.preventDefault();
        window.vent.trigger('showCourses');
    }
});
var CourseView = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['course'],
    events: {
        'click a': 'selectCourse'
    },
    selectCourse: function(e) {
        e.preventDefault();
        var courseId = this.model.get('id');
        window.vent.trigger('showScorecard', courseId);
    }
});
var CourseHoleView = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['course-hole'],
    tagName: 'ul',
    className: 'course__hole'
});
var Course = Backbone.Marionette.CompositeView.extend({
    template: GolfApp.Templates['course-details'],
    childView: CourseHoleView,
    childViewContainer: '.course__holes',
    initialize: function() {
        this.listenTo(this.model, 'sync', this.render);
    }
});
var Courses = Backbone.Marionette.CollectionView.extend({
    childView: CourseView
});
var RoundHole = Backbone.Marionette.ItemView.extend({
    template: GolfApp.Templates['round-hole'],
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
var Round = Backbone.Marionette.CollectionView.extend({
    childView: RoundHole,
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
        var score 	 = this.$el.find('input[name="score"]').val();
        var putts 	 = this.$el.find('input[name="putts"]').val();
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
            var courses = new Courses({
                collection: coursesCollection
            });
            GolfApp.appRegion.show(courses);
        });
    },
    showScorecard: function(courseId) {
        console.log('Show scorecard');

        var courseModel           = new CourseModel({url: courseId});
        var courseHolesCollection = new CourseHolesCollection(null, {id: courseId});

        $.when(courseModel.fetch(), courseHolesCollection.fetch() ).done(function() {
            var courseId = courseModel.get('id');

            var numHoles = courseHolesCollection.length;
            var course = new Course({
                model: courseModel,
                collection: courseHolesCollection
            });
            var roundCollection = new RoundCollection(null, {numHoles:numHoles});
            var round = new Round({
                collection: roundCollection
            });
            GolfApp.appRegion.show(course);
            GolfApp.scoreRegion.show(round);
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
        'scorecard/:courseId': 'showScorecard',
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

    // Home
    vent.on('showHome', function() {
        GolfApp.router.navigate('', {trigger: true});
    });

    // Course select
    vent.on('showCourses', function() {
        GolfApp.router.navigate('/courses', {trigger: true});
    });

    // Scorecard
    vent.on('showScorecard', function(courseId) {
        GolfApp.router.navigate('/scorecard/' + courseId, {trigger: true});
    });

    // Edit score
    vent.on('editScore', function(holeModel) {
        controller.editScore(holeModel);
    });

    // Start history
    if (!Backbone.History.started) {
        Backbone.history.start({pushState: true});
    }
});
GolfApp.start();