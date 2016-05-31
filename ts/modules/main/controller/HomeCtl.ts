module Main.Controller{
    export class HomeCtl{
        static $inject = ['$scope'];
        
        private scope: angular.IScope;
        
        constructor($scope: angular.IScope){
            this.scope = $scope;
            
            console.log(this.scope);
        }
    }
}