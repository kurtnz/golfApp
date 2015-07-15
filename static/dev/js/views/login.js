'use strict';

var LoginModel = require("../models/login.js");

var Login = Backbone.Marionette.ItemView.extend({
    template: require('./templates/login.hbs'),
    tagName: 'form',
    events: {
        'submit': 'submitHandler'
    },
    submitHandler: function(e) {
        e.preventDefault();

        // Get form data
        var unindexed_array = this.$el.serializeArray();
        var indexed_array = {};
        $.map(unindexed_array, function(n, i){
            indexed_array[n['name']] = n['value'];
        });

        var loginModel =  new LoginModel(indexed_array);
        loginModel.save(null, {

            success: function(data) {
                var token = data.get('token');
                var user_id = data.get('user_id');

                sessionStorage.setItem('golf_auth_token', token);
                sessionStorage.setItem('user_id', user_id);

                vent.trigger('showHome');
            },

            error: function(data) {
                console.log('Login error');
            }

        });
    }
});

module.exports = Login;