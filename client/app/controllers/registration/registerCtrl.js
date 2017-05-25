leaveApp.controller('registerCtrl', function ($state, formConfigService, dataServices) {
    var vm = this;
    vm.model = {};
    vm.registrationPage = formConfigService.registerConfig;

     vm.apply = function () {
             dataServices.post(vm.model).then(function (response) {

            }).catch(function (error) {
                console.log(error);
            })
        }


});
