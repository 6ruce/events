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

        private onSave(formData) {
            var event = this.createEventModel();
            this.mapFormToEvent(formData, event);
            event.$save(() => this.$location.path(this.EVENTS_LIST_PATH));
        }

        private createEventModel() {
            var Event = this.eventResourceFactory.create();
            return new Event();
        }

        private mapFormToEvent(formData, event) {
            event.Name = formData.name;
            event.Description = formData.description;
        }

        private onCancel() {
            this.$location.path(this.EVENTS_LIST_PATH);
        }

    }
}