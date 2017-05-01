leaveApp.controller('myFormCtrl' , function(){
    var vm= this;
});


leaveApp.directive('myForm', function(){
    return {
        restrict : 'E',
        templateUrl : 'app/directives/forms/form.html',
        controller : 'myFormCtrl',
        controllerAs : 'formCtrl',
        bindToController: true,
        scope : {
            config : '=',
            model : '='
        },
        link:function(scope){
console.log(scope);
        }
    }
})



