'use strict';

var app =
    angular
        .module('EventsApp', ['ui.bootstrap', 'ngRoute', 'ngResource'])
        .controller('Controls.Event.OperationController', Controls.Event.OperationController)
        .run(function ($rootScope) {
            $rootScope.const = Constants;
            $rootScope._$ = _$;
        });

Dependencies.wire(app);
Factories.init(app);

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