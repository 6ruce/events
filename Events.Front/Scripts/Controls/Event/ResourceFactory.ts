module Controls.Event {
    'use strict';

    export class ResourceFactory {
        public static $inject = [
            '$resource'
        ];

        constructor(private $resource) { }

        create() {
            return this.$resource(Constants.API_ROOT + '/Event');
        }
    }
}