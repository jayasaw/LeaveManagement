leaveApp.controller('leaveCtrl', function (dataServices, $state, $stateParams, formConfigService) {
    var vm = this;
    vm.modelObj = {};

    console.log($stateParams);

    if (!!$stateParams){
         vm.modelObj = $stateParams.data;
    }


    vm.formConfig = formConfigService.leaveForm;

    vm.apply = function () {
        console.log(vm.modelObj);
        dataServices.post('leave',vm.modelObj).then(function (response) {
            $state.go('grid');
        }).catch(function (error) {
            console.log(error);
        })
    }

    vm.save = function(){
        dataServices.put(vm.modelObj,vm.modelObj.leaveId).then(function (response){
            $state.go('grid');
       }).catch(function(error){
           console.log(error);
       })
    }

    vm.cancel = function(){
    vm.modelObj = null;
    }

})