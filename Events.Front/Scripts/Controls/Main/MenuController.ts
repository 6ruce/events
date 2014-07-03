module Controls.Main {
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
        }

        private onItemClick(index) {
            this.activateMenuItem(this.$scope.menuItems[index]);
        }

        private onRouteChange(path) {
            var routePath = path.$$route.originalPath;
            var matchMenuItem = _.find(this.$scope.menuItems, (item) => this.isPartOfItemPath(item, routePath));
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
            var matchMenuItem = _.find(this.$scope.menuItems, (item) => this.isPartOfItemPath(item, currentPath));
            if (matchMenuItem) {
                this.activeItem = matchMenuItem;
            } else {
                this.activeItem = this.$scope.menuItems[0];
            }
            this.activeItem.active = true;
        }

        private isPartOfItemPath(item, subPath) {
            return item.path.search(subPath) != -1;
        }

    }
}