var leaveApp = angular.module('leaveApp', ['ui.router']);
    leaveApp.controller('mainCtrl', function(){
        var vm = this;


    // vm.formConfig = [{label: 'EmpName', fieldName: 'userName', type: 'text'},
    // { label: 'EmpDesignation', fieldName: 'designation', type: 'text' },
    // { label: 'EmpManagerName', fieldName: 'managerName', type: 'text' },
    // { label: 'LeaveType', fieldName: 'leave', type: 'text'},
    // { label: 'StartDate', fieldName: 'date', type: 'number'},
    // { label: 'EndDate', fieldName: 'date', type: 'number'},
    // { label: 'LeaveReason', fieldName: 'reason', type: 'text'},
    // { label: 'JoiningDate', fieldName: 'date', type: 'number'},
    // { label: 'ProjectName', fieldName: 'Projectname', type: 'text'},
    // { label: 'BackupEmpName', fieldName: 'empName', type: 'text'} ]


 })
.config(function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: "app/controllers/home/home.html",
            controller:'homeCtrl',
           controllerAs:'homeCtrl'
        })
        .state('leave', {
            url: '/leave',
            templateUrl: "app/controllers/leave/leave.html",
            controller:'leaveCtrl',
            controllerAs:'leaveCtrl'
        })
        .state('grid', {
            url: '/grid',
            templateUrl: "app/controllers/grid/grid.html",
            controller:'gridCtrl',
            controllerAs:'gridCtrl'
        })

        $urlRouterProvider.otherwise('/home');
});


// leaveApp.controller('mainCtrl', function () {
//     var vm = this;
   

// });


