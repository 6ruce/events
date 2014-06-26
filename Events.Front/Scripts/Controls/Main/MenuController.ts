module Controls.Main {
    declare var console;
    declare var _;

    export class MenuController {
        public static $inject = ['$scope', '$location'];
        
        private activeItem; 

        constructor(private $scope, private $location) {
            $scope.menuItems = [
                {name : 'Home', path : '/', active : false},
                {name : 'Event', path : '#/Events', active : false}
            ];
            $scope.itemClick = (index) => this.onItemClick(index);
            $scope.$on('$routeChangeSuccess', (event, path) => this.onRouteChange(path));
            this.selectActiveItem();
            console.log("construct");
        }

        private onItemClick(index) {
            this.activateMenuItem(this.$scope.menuItems[index]);
        }

        private onRouteChange(path) {
            console.log("route: ");
            console.log(path.$$route);
            var matchMenuItem = _.find(this.$scope.menuItems, (item) => item.path.search(path.$$route.originalPath) != -1);
            if (matchMenuItem) {
                this.activateMenuItem(matchMenuItem);
            }
        }

        private activateMenuItem(menuItem) {
            this.activeItem.active = false;
            this.activeItem = menuItem;
            this.activeItem.active = true;
        }

        private selectActiveItem() {
            var currentPath = this.$location.path();
            var matchMenuItem = _.find(this.$scope.menuItems, (item) => item.path.search(currentPath) != -1);
            if (matchMenuItem) {
                this.activeItem = matchMenuItem;
            } else {
                this.activeItem = this.$scope.menuItems[0];
            }
            this.activeItem.active = true;
        }
    }
}