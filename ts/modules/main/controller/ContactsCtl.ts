module Main.Controller{
    export class ContactsCtl{
        static $inject = ['$scope'];
        
        private scope: angular.IScope;
        
        constructor($scope: angular.IScope){
            this.scope = $scope;
            
            console.log(this.scope);
        }
    }
}