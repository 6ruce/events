module Controls.Event {
    'use strict';

    export class CreateController {
        private EVENTS_LIST_PATH = '/Events';

        public static $inject = [
            '$scope',
            '$location',
            'eventResourceFactory'
        ];

        constructor($scope, private $location, private eventResourceFactory) {
            $scope.event = {};
            this.bindViewCallbacks($scope);
        }

        private bindViewCallbacks($scope) {
            $scope.cancel = () => this.onCancel();
            $scope.save = event => this.onSave(event);
        }

        private onSave(eventForm) {
            var Event = this.eventResourceFactory.create();
            var event = new Event();
            event.Name = eventForm.name;
            event.Description = eventForm.description;
            event.$save(() => this.$location.path(this.EVENTS_LIST_PATH));
        }

        private onCancel() {
            this.$location.path(this.EVENTS_LIST_PATH);
        }

    }
}