this["GolfApp"] = this["GolfApp"] || {};
this["GolfApp"]["Templates"] = this["GolfApp"]["Templates"] || {};

this["GolfApp"]["Templates"]["static/dev/js/views/templates/course-details"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n<ul class=\"course__head\">\n    <li>Hole</li>\n    <li>White</li>\n    <li>Red</li>\n    <li>Par</li>\n    <li>Score</li>\n</ul>\n<div class=\"course__holes\"></div>\n<div id=\"course-score\" class=\"course__scores\"></div>";
},"useData":true});

this["GolfApp"]["Templates"]["static/dev/js/views/templates/course-hole"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li>"
    + alias3(((helper = (helper = helpers.hole_num || (depth0 != null ? depth0.hole_num : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hole_num","hash":{},"data":data}) : helper)))
    + "</li>\n<li>"
    + alias3(((helper = (helper = helpers.white_distance || (depth0 != null ? depth0.white_distance : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"white_distance","hash":{},"data":data}) : helper)))
    + "</li>\n<li>"
    + alias3(((helper = (helper = helpers.red_distance || (depth0 != null ? depth0.red_distance : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"red_distance","hash":{},"data":data}) : helper)))
    + "</li>\n<li>"
    + alias3(((helper = (helper = helpers.white_par || (depth0 != null ? depth0.white_par : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"white_par","hash":{},"data":data}) : helper)))
    + "</li>";
},"useData":true});

this["GolfApp"]["Templates"]["static/dev/js/views/templates/course"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>";
},"useData":true});

this["GolfApp"]["Templates"]["static/dev/js/views/templates/home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"new-round\">New round</a>";
},"useData":true});

this["GolfApp"]["Templates"]["static/dev/js/views/templates/login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<fieldset>\n    <div class=\"form_row\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" name=\"username\" id=\"username\">\n    </div>\n    <div class=\"form_row\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" id=\"password\">\n    </div>\n    <div class=\"form_row\">\n        <button type=\"submit\">Submit</button>\n    </div>\n</fieldset>";
},"useData":true});

this["GolfApp"]["Templates"]["static/dev/js/views/templates/score-hole"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\"#\">"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</a>\n<!--"
    + alias3(((helper = (helper = helpers.putts || (depth0 != null ? depth0.putts : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"putts","hash":{},"data":data}) : helper)))
    + "\n"
    + alias3(((helper = (helper = helpers.fairways || (depth0 != null ? depth0.fairways : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fairways","hash":{},"data":data}) : helper)))
    + "\n"
    + alias3(((helper = (helper = helpers.bunkers || (depth0 != null ? depth0.bunkers : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"bunkers","hash":{},"data":data}) : helper)))
    + "\n"
    + alias3(((helper = (helper = helpers.club || (depth0 != null ? depth0.club : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"club","hash":{},"data":data}) : helper)))
    + "-->";
},"useData":true});

this["GolfApp"]["Templates"]["static/dev/js/views/templates/score"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "Score: <input type=\"text\" name=\"score\" value=\""
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "\"><br>\nPutts: <input type=\"text\" name=\"putts\" value=\""
    + alias3(((helper = (helper = helpers.putts || (depth0 != null ? depth0.putts : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"putts","hash":{},"data":data}) : helper)))
    + "\"><br>\nFairways: <input type=\"text\" name=\"fairways\" value=\""
    + alias3(((helper = (helper = helpers.fairways || (depth0 != null ? depth0.fairways : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fairways","hash":{},"data":data}) : helper)))
    + "\"><br>\nBunkers: <input type=\"text\" name=\"bunkers\" value=\""
    + alias3(((helper = (helper = helpers.bunkers || (depth0 != null ? depth0.bunkers : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"bunkers","hash":{},"data":data}) : helper)))
    + "\"><br>\nClub: <input type=\"text\" name=\"club\" value=\""
    + alias3(((helper = (helper = helpers.club || (depth0 != null ? depth0.club : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"club","hash":{},"data":data}) : helper)))
    + "\">\n\n<div id=\"map-canvas\"></div>\n\n<button>Save</button>";
},"useData":true});