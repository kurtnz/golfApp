this["GolfApp"] = this["GolfApp"] || {};
this["GolfApp"]["Templates"] = this["GolfApp"]["Templates"] || {};

this["GolfApp"]["Templates"]["course-details"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>"
    + this.escapeExpression(((helper = (helper = helpers.coursename || (depth0 != null ? depth0.coursename : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"coursename","hash":{},"data":data}) : helper)))
    + "</h1>\n<ul class=\"course__head\">\n    <li>Hole</li>\n    <li>White</li>\n    <li>Red</li>\n    <li>Par</li>\n    <li>Score</li>\n    <!--<li>Putts</li>\n    <li>Fairways</li>\n    <li>Bunkers</li>\n    <li>Club</li>-->\n</ul>\n<div class=\"course__holes\"></div>\n<div id=\"course-score\" class=\"course__scores\"></div>";
},"useData":true});

this["GolfApp"]["Templates"]["course-hole"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression, alias2=this.lambda;

  return "<li>"
    + alias1(((helper = (helper = helpers.holenum || (depth0 != null ? depth0.holenum : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"holenum","hash":{},"data":data}) : helper)))
    + "</li>\n<li>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.white : depth0)) != null ? stack1.distance : stack1), depth0))
    + "</li>\n<li>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.red : depth0)) != null ? stack1.distance : stack1), depth0))
    + "</li>\n<li>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.white : depth0)) != null ? stack1.par : stack1), depth0))
    + "</li>";
},"useData":true});

this["GolfApp"]["Templates"]["course"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>";
},"useData":true});

this["GolfApp"]["Templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"new-round\">New round</a>";
},"useData":true});

this["GolfApp"]["Templates"]["round-hole"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
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

this["GolfApp"]["Templates"]["score"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "Score: <input type=\"text\" name=\"score\" value=\""
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "\"><br>\nPutts: <input type=\"text\" name=\"score\" value=\""
    + alias3(((helper = (helper = helpers.putts || (depth0 != null ? depth0.putts : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"putts","hash":{},"data":data}) : helper)))
    + "\"><br>\nFairways: <input type=\"text\" name=\"score\" value=\""
    + alias3(((helper = (helper = helpers.fairways || (depth0 != null ? depth0.fairways : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fairways","hash":{},"data":data}) : helper)))
    + "\"><br>\nBunkers: <input type=\"text\" name=\"score\" value=\""
    + alias3(((helper = (helper = helpers.bunkers || (depth0 != null ? depth0.bunkers : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"bunkers","hash":{},"data":data}) : helper)))
    + "\"><br>\nClub: <input type=\"text\" name=\"score\" value=\""
    + alias3(((helper = (helper = helpers.club || (depth0 != null ? depth0.club : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"club","hash":{},"data":data}) : helper)))
    + "\">\n\n<div id=\"map-canvas\"></div>";
},"useData":true});