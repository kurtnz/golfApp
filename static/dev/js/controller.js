'use strict';

var LoginView = require('./views/login');
var HomeView = require("./views/home");
var Courses = require("./views/courses");
var Course = require("./views/course");
var ScoreCard = require("./views/scorecard");
var Score = require("./views/score");
var RoundContinue = require("./views/roundContinue");

var ProfileModel = require("./models/profile");
var CourseModel = require("./models/course");
var SingleHoleModel = require("./models/singlehole");
var RoundModel = require("./models/round");

var CoursesCollection = require("./collections/courses");
var CourseHolesCollection = require("./collections/courseholes");
var ScoreCollection = require("./collections/score");


var controller = {

    login: function() {
        var loginView = new LoginView();
        app.appRegion.show(loginView);
    },

    home: function() {

        // Check for previous round
        var previousRound = new RoundModel();
        previousRound.fetch({

            data: {
                user_id: 1
            },

            // Previous round exists - show previous round view
            success: function(model, response, options) {

                var roundContinue = new RoundContinue({
                    model: model
                });
                app.appRegion.show(roundContinue);

            },

            // No previous round - show home view
            error: function(model, response, options) {

                var profileModel = new ProfileModel();
                var profileModelFetch = profileModel.fetch({type: 'POST'});
                profileModelFetch.done(function(profile) {

                    var homeView = new HomeView();
                    app.appRegion.show(homeView);

                });

            }

        });
        
    },

    showCourses: function() {
        var profileModel = new ProfileModel();
        var profileModelFetch = profileModel.fetch({type: 'POST'});
        profileModelFetch.done(function(profile) {

            var coursesCollection = new CoursesCollection();
            var coursesCollectionFetch = coursesCollection.fetch();
            coursesCollectionFetch.done(function() {
                var courses = new Courses({ collection: coursesCollection });
                app.appRegion.show(courses);
            });

        });
    },

    showScorecard: function() {
        var profileModel = new ProfileModel();
        var profileModelFetch = profileModel.fetch({type: 'POST'});
        profileModelFetch.done(function(profile) {

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

                    app.appRegion.show(course);
                    app.scoreRegion.reset().show(scorecard, {forceShow: true});
                });
            });

        });
    },

    editScore: function(holeId) {
        var profileModel = new ProfileModel();
        var profileModelFetch = profileModel.fetch({type: 'POST'});
        profileModelFetch.done(function(profile) {

            var holeModel = new SingleHoleModel({ id: holeId });
            $.when( holeModel.fetch() ).done(function() {
                var score = new Score({
                    model: holeModel
                });
                app.appRegion.show(score);
            });

        });
    }

};

module.exports = controller;