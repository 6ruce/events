'use strict';

var app =
    angular
        .module('EventsApp', ['ui.bootstrap', 'ngRoute'])
        .controller('Controls.Event.OperationController', Controls.Event.OperationController)
        .run(function ($rootScope) {
            $rootScope.const = {
                TEMPLATES_ROOT: Constants.TEMPLATES_ROOT
            };
        });

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: Constants.TEMPLATES_ROOT + '/Main/welcome.html',
        }).
        when('/Events', {
            templateUrl: Constants.TEMPLATES_ROOT + '/Event/list.html',
            controller: 'Controls.Event.OperationController'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);