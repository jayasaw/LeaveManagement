leaveApp.controller('filterDateCtrl', function () {
    var vm = this;
   // console.log('I am here');
});


leaveApp.directive('type1', function () {
    return {
        restrict: 'A',
        controller: 'filterDateCtrl',
        bindToController: true,
        scope: {
            ngModel: '=',
        },
        require:'ngModel',
        link: function (scope, ele, attr,ctrl) {
            // console.log(scope);
            // console.log('I am here at link');
            // angular.element(ele).on('blur', function(){
            //     console.log('I am blured');
            //     console.log(scope, attr, ele, ctrl);
            // })
        }
    }
})



