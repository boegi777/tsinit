var Main;
(function (Main) {
    var App = (function () {
        function App(app) {
            this.app = app;
            //Controller registrieren
            this.app.controller('HomeCtl', Main.Controller.HomeCtl);
            this.app.controller('ChatCtl', Main.Controller.ChatCtl);
            this.app.controller('ContactsCtl', Main.Controller.ContactsCtl);
        }
        App.prototype.run = function () {
            this.app.run(function ($ionicPlatform) {
                $ionicPlatform.ready(function () {
                    if (Cordova && Keyboard) {
                        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                        // for form inputs)
                        Keyboard.hideFormAccessoryBar(true);
                        // Don't remove this line unless you know what you are doing. It stops the viewport
                        // from snapping when text inputs are focused. Ionic handles this internally for
                        // a much nicer keyboard experience.
                        Keyboard.disableScrollingInShrinkView(true);
                    }
                    if (window.StatusBar) {
                        StatusBar.styleDefault();
                    }
                });
            });
        };
        App.prototype.config = function () {
            this.app.config(Main.Route.configureRoutes);
        };
        Object.defineProperty(App.prototype, "App", {
            get: function () {
                return this.app;
            },
            enumerable: true,
            configurable: true
        });
        App.$inject = ['$ionicPlatform'];
        return App;
    }());
    Main.App = App;
})(Main || (Main = {}));
var Main;
(function (Main) {
    var Route = (function () {
        function Route() {
        }
        Route.configureRoutes = function ($stateProvider, $urlRouterProvider) {
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
        };
        Route.$inject = ['$stateProvider'];
        return Route;
    }());
    Main.Route = Route;
})(Main || (Main = {}));
var Main;
(function (Main) {
    var Controller;
    (function (Controller) {
        var HomeCtl = (function () {
            function HomeCtl($scope) {
                this.scope = $scope;
                console.log(this.scope);
            }
            HomeCtl.$inject = ['$scope'];
            return HomeCtl;
        }());
        Controller.HomeCtl = HomeCtl;
    })(Controller = Main.Controller || (Main.Controller = {}));
})(Main || (Main = {}));
var Main;
(function (Main) {
    var Controller;
    (function (Controller) {
        var ChatCtl = (function () {
            function ChatCtl($scope) {
                this.scope = $scope;
                console.log(this.scope);
            }
            ChatCtl.$inject = ['$scope'];
            return ChatCtl;
        }());
        Controller.ChatCtl = ChatCtl;
    })(Controller = Main.Controller || (Main.Controller = {}));
})(Main || (Main = {}));
var Main;
(function (Main) {
    var Controller;
    (function (Controller) {
        var ContactsCtl = (function () {
            function ContactsCtl($scope) {
                this.scope = $scope;
                console.log(this.scope);
            }
            ContactsCtl.$inject = ['$scope'];
            return ContactsCtl;
        }());
        Controller.ContactsCtl = ContactsCtl;
    })(Controller = Main.Controller || (Main.Controller = {}));
})(Main || (Main = {}));
/// <reference path="app.d.ts" />
var app = angular.module('starter', ['ionic']);
var main = new Main.App(app);
main.run();
main.config();
