module Routes {
    export function config(appModule) {
        appModule.config(['$routeProvider',
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
    }
}