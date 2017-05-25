leaveApp.controller('leaveCtrl', function (dataServices, $state, managerList, $stateParams, formConfigService, userSession, optionsData) {
    var vm = this;
    vm.formConfig = formConfigService.leaveForm;
    vm.modelObj = {};
    // if (!!$stateParams) {
    //     vm.modelObj = $stateParams.data;
    // }

    vm.formConfig.map(function (item, index) {
        if (item.fieldName == 'leaveType') {
            item.options = optionsData.leaveType;
        }
        if (item.fieldName == 'managerEmpId') {
            item.options = managerList;
        }
        return item;
    })


    var user = userSession.getUserDetails();

    if (user) {
        vm.modelObj.empName = user.fullName;
        vm.modelObj.empId = user.empId;
        vm.modelObj.leaveStatus = 'Pending';
    }

    vm.apply = function () {
        console.log(vm.modelObj);
        dataServices.post('leave', vm.modelObj).then(function (response) {
            $state.go('grid');
        }).catch(function (error) {
            console.log(error);
        })
    }

    vm.save = function () {
        dataServices.put(vm.modelObj, vm.modelObj.leaveId).then(function (response) {
            $state.go('grid');
        }).catch(function (error) {
            console.log(error);
        })
    }

    vm.cancel = function () {
        vm.modelObj = null;
    }

      vm.back = function () {
    $state.go('grid');
  }

})