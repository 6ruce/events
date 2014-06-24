module Controls.Event {
    'use strict';
    declare var console;

    export class OperationController {
        public static $inject = [
            '$scope'
        ];

        constructor($scope) {
            console.log("from constructor");
        }
    }
}