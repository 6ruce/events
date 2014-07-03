/// <reference path="Controls/Event/ListController.ts"/>
/// <reference path="Controls/Event/CreateController.ts"/>
/// <reference path="Controls/Main/MenuController.ts"/>

module Controllers {
    export function init(appModule) {
        appModule
            .controller('Controls.Event.ListController', Controls.Event.ListController)
            .controller('Controls.Event.CreateController', Controls.Event.CreateController)
            .controller('Controls.Main.MenuController', Controls.Main.MenuController);
    }
}