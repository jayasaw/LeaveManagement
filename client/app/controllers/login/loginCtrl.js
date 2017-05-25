leaveApp.controller('loginCtrl', function ($state, formConfigService, dataServices) {
    var vm = this;
    vm.model = {};
    // $state.go('login');
    vm.loginPage = formConfigService.loginConfig;

    vm.login = function () {
        dataServices.post('login', vm.model).then(function (response) {
            console.log(response);
            if(response.data.error){
                vm.error = response.data.error
            }else{
                $state.go('grid');
            }
        }).catch(function (error) {
            console.log(error);
        })
    }

});

