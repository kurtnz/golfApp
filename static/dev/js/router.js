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