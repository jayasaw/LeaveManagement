leaveApp.controller('myGridCtrl', function () {
    var vm = this;

    vm.onAction = function (row) {
        console.log(row);
        row.row.empName = 'Anup Saw';
        //vm.onEdit(row);
    }

})

leaveApp.directive('myGrid', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/myGrid/myGrid.html',
        controller: 'myGridCtrl',
        controllerAs: 'grid',
        bindToController: true,
        scope: {
            config: '=',
            rows: '=',
            message: '@',
            onAction: '&?'
        }
    }
})