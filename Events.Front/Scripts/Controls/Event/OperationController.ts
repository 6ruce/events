module Controls.Event {
    'use strict';
    declare var console;

    export class OperationController {
        public static $inject = [
            '$scope',
            '$location',
            'eventResourceFactory'
        ];

        constructor($scope, $location, eventResourceFactory) {
            $scope.$location = $location;
            var eventResource = eventResourceFactory.create();
            $scope.events = eventResource.query();
        }
    }
}