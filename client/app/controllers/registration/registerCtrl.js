leaveApp.controller('registerCtrl', function ($state, formConfigService, dataServices) {
    var vm = this;
    vm.model = {};
    vm.registrationPage = formConfigService.registerConfig;

    vm.apply = function () {
        dataServices.post('register', vm.model).then(function (response) {
            if (response.error) {
                vm.err = response.error;
            }else{
                vm.err =  null;
                $state.go('login');
            }

        }).catch(function (error) {
            console.log(error);
        })
    }
 vm.cancel = function () {
        vm.model = null;
    }

});
