/// <reference path="Controls/Event/OperationController.ts"/>
/// <reference path="Controls/Main/MenuController.ts"/>

module Controllers {
    export function init(appModule) {
        appModule
            .controller('Controls.Event.OperationController', Controls.Event.OperationController)
            .controller('Controls.Main.MenuController', Controls.Main.MenuController);
    }
}