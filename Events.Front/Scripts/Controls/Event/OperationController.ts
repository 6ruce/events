module Controls.Event {
    'use strict';
    declare var console;

    export class OperationController {
        public static $inject = [
            '$scope',
            '$location',
            'EventResource'
        ];

        constructor($scope, $location, EventResource) {
            $scope.$location = $location;
            EventResource.query((events) => { $scope.events = events; console.log(events);});
            //$scope.events = ["Opening..", "Cool stuff happens !!!"];
        }
    }
}