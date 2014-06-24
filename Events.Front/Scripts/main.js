'use strict';

var app = angular.module('EventsApp', ['ui.bootstrap', 'ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: Constants.TEMPLATES_ROOT + '/EventPages/list.html',
            //controller: function () {}
        }).
        when('/Events', {
            redirectTo: '/'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);