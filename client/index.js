


var leaveApp = angular.module('leaveApp', ['ui.router']);


leaveApp.provider('jaya', function () {
    var name;
    return {
        setName: function (_name) {
            name = _name;
        },
        $get: function () {
            return {
                getName: function () {
                    return name;
                }
            }
        }
    }
});


// angular.element(document).ready(
//     function () {
//         angular.bootstrap(document, ['leaveApp']);
//     }
// )
leaveApp.controller('mainCtrl', function () {
    var vm = this;


})
    .config(function ($stateProvider, $urlRouterProvider, jayaProvider) {

        console.log(jayaProvider);

        jayaProvider.setName('Jaya Saw');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: "app/controllers/home/home.html",
                controller: 'homeCtrl',
                controllerAs: 'homeCtrl'
            })
            .state('leave', {
                url: '/leave',
                templateUrl: "app/controllers/leave/leave.html",
                controller: 'leaveCtrl',
                controllerAs: 'leaveCtrl',
                params: { data: null }
            })
            .state('grid', {
                url: '/grid',
                templateUrl: "app/controllers/grid/grid.html",
                controller: 'gridCtrl',
                controllerAs: 'gridCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: "app/controllers/login/login.html",
                controller: 'loginCtrl',
                controllerAs: 'loginCtrl'
            })

            .state('register', {
                url: '/register',
                templateUrl: "app/controllers/registration/register.html",
                controller: 'registerCtrl',
                controllerAs: 'registerCtrl'
            })
        $urlRouterProvider.otherwise('/home');
    });


// leaveApp.controller('mainCtrl', function () {
//     var vm = this;


// });


