declare var Cordova: Cordova;
module Main {
    export class App {
        private app: angular.IModule;
        static $inject = ['$ionicPlatform'];

        constructor(app: angular.IModule) {
            this.app = app;
            
            //Controller registrieren
            this.app.controller('HomeCtl', Main.Controller.HomeCtl);
            this.app.controller('ChatCtl', Main.Controller.ChatCtl);
            this.app.controller('ContactsCtl', Main.Controller.ContactsCtl);
        }

        public run() {
            this.app.run(($ionicPlatform: ionic.platform.IonicPlatformService) => {
                $ionicPlatform.ready(() => {
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
            })
        }

        public config() {
            this.app.config(Main.Route.configureRoutes);
        }

        public get App(): angular.IModule {
            return this.app;
        }

    }
}