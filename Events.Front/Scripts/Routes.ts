module Routes {
    export function config(appModule) {
        appModule.config(['$routeProvider',
            $routeProvider => {
                $routeProvider.
                    when('/', {
                        templateUrl: Constants.TEMPLATES_ROOT + '/Main/welcome.html',
                    }).
                    when('/Events', {
                        templateUrl: Constants.TEMPLATES_ROOT + '/Event/list.html',
                        controller: 'Controls.Event.ListController'
                    }).
                    when('/Events/Create', {
                        templateUrl: Constants.TEMPLATES_ROOT + '/Event/createForm.html',
                        controller: 'Controls.Event.CreateController'
                    }).
                    otherwise({
                        redirectTo: '/'
                    });
            }]);
    }
}