leaveApp.controller('loginCtrl', function ($state, formConfigService, dataServices, userSession) {
    var vm = this;
    vm.model = {};
    // $state.go('login');
    vm.loginPage = formConfigService.loginConfig;

    vm.login = function () {
        dataServices.post('login', vm.model).then(function (response) {
            console.log(response);
            if (response.error) {
                vm.error = response.error
                alert(response.error);
            } else {
                userSession.login(response);
                $state.go('grid');
            }
        }).catch(function (error) {
            console.log(error);
        })
    }

});

