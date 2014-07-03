module Controls.Event {
    'use strict';
    declare var console;

    export class ListController {
        public static $inject = [
            '$scope',
            '$location',
            'eventResourceFactory'
        ];

        constructor($scope, private $location, eventResourceFactory) {
            var eventResource = eventResourceFactory.create();
            $scope.events = eventResource.query();
            this.bindViewCallbacks($scope);
        }

        private bindViewCallbacks($scope) {
            $scope.onCreateClick = () => this.onCreateClick();
        }

        private onCreateClick() {
            this.$location.path('/Events/Create');
        }
    }
}