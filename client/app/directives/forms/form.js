leaveApp.controller('myFormCtrl', function () {
    var vm = this;

    vm.options = [
        { code: 'e', description: 'Employee' },
        { code: 'm', description: 'Manager' }
        ]
});


leaveApp.directive('myForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/forms/form.html',
        controller: 'myFormCtrl',
        controllerAs: 'formCtrl',
        bindToController: true,
        scope: {
            config: '=',
            model: '=',
            error: '='
        },
        link: function (scope) {
            console.log(scope);
        }
    }
})



