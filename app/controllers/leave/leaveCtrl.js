leaveApp.controller('leaveCtrl', function (dataServices, $state, formConfigService) {
    var vm = this;
    vm.modelObj = {};

    vm.formConfig = formConfigService.leaveForm;

    vm.apply = function () {
        console.log(vm.modelObj);
        dataServices.postData(vm.modelObj).then(function (response) {
            $state.go('grid');
        }).catch(function (error) {
            console.log(error);
        })
    }

})