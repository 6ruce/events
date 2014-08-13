/// <reference path="Controls/Event/ResourceFactory.ts"/>

module Dependencies {
    export function wire(app) {
        app.service('eventResourceFactory', Controls.Event.ResourceFactory);
        app.service('responseHandler', Controls.Event.ResourceFactory);
    }
}