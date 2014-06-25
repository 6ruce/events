module Factories {
    export function init(appModule) {
        appModule.factory('EventResource', ($resource) => {
            return $resource(Constants.API_ROOT + '/Event');
        });
    }
}