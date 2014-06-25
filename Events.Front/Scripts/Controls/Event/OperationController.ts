module Controls.Event {
    'use strict';
    declare var console;

    export class OperationController {
        public static $inject = [
            '$scope',
            '$location'
        ];

        constructor($scope, $location) {
            $scope.$location = $location;
            $scope.events = ["Opening..", "Cool stuff happens !!!"];
        }
    }
}