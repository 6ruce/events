module Controls.Main {
    declare var console;
    declare var _;

    export class MenuController {
        public static $inject = ['$scope'];
        
        private activeItem; 

        constructor(private $scope) {
            $scope.menuItems = [
                {name : 'Home', path : '/', active : true},
                {name : 'Event', path : '#/Events', active : false}
            ];
            $scope.itemClick = (index) => this.onItemClick(index);
            $scope.$on('$routeChangeSuccess', (event, path) => this.onRouteChange(path));
            this.activeItem = $scope.menuItems[0];
        }

        private onItemClick(index) {
            this.activateMenuItem(this.$scope.menuItems[index]);
        }

        private onRouteChange(path) {
            var matchMenuItem = _.find(this.$scope.menuItems, (item) => path.$$route.regexp.test(item.path));
            if (matchMenuItem) {
                this.activateMenuItem(matchMenuItem);
            }
        }

        private activateMenuItem(menuItem) {
            this.activeItem.active = false;
            this.activeItem = menuItem;
            this.activeItem.active = true;
        }
    }
}