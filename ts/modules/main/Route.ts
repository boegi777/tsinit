module Main {
    export class Route{
        static $inject = ['$stateProvider']
        
        static configureRoutes( $stateProvider: angular.ui.IStateProvider,
                                $urlRouterProvider: angular.ui.IUrlRouterProvider){
            
            $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "/pages/home.html",
                controller: "HomeCtl"
            })
            .state('chat', {
                url: "/chat",
                templateUrl: "/pages/chat.html",
                controller: "ChatCtl"
            })
            .state('contacts', {
                url: "/contacts",
                templateUrl: "/pages/contacts.html",
                controller: "ContactsCtl"
            });
            
            $urlRouterProvider.otherwise('/home');
        }
    }
}