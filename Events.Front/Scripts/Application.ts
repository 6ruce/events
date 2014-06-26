/// <reference path="Constants.ts"/>
/// <reference path="Translations.ts"/>
/// <reference path="Dependencies.ts"/>
/// <reference path="Factories.ts"/>
/// <reference path="Controllers.ts"/>
/// <reference path="Routes.ts"/>

module Application {
    declare var angular;
    export function start() {
        var app =
            angular
                .module('EventsApp', ['ui.bootstrap', 'ngRoute', 'ngResource'])
                .run(function ($rootScope) {
                    $rootScope.const = Constants;
                    $rootScope._$ = _$;
                });

        Dependencies.wire(app);
        Factories.init(app);
        Controllers.init(app);
        Routes.config(app);
    }
}