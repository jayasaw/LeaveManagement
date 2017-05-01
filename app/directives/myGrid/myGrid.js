leaveApp.controller('myGridCtrl', function(){
    var vm = this;

    
    
    
})

leaveApp.directive('myGrid', function(){
    return {
        restrict : 'E',
        templateUrl : 'app/directives/myGrid/myGrid.html',
        controller:'myGridCtrl',
        controllerAs : 'grid',
        bindToController: true,
        scope : {
            config: '=',
            rows : '=',
            onDelete: '&',
            onEdit : '&'
        }
    }
})