module Controls.Main {
    export class MenuController {
        public static $inject = ['$scope'];
        
        private activeItem; 

        constructor(private $scope) {
            $scope.menuItems = [
                {name : 'Home', path : '/', active : true},
                {name : 'Event', path : '#/Events', active : false}
            ];
            $scope.itemClick = (index) => this.onItemClick(index);
            this.activeItem = $scope.menuItems[0];
        }

        onItemClick(index) {
            console.log(index);
            console.log(this);
            this.activeItem.active = false;
            this.activeItem = this.$scope.menuItems[index];
            this.activeItem.active = true;
        }

    }
}