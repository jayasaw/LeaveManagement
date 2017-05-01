leaveApp.controller('gridCtrl', function (dataServices, $state, formConfigService) {
  var vm = this;
  vm.column = formConfigService.tableConfig;
  vm.rows = [];

  dataServices.getData().then(function (response) {
    vm.rows = response;
  }).catch(function (error) {
    console.log(error)
  })

  vm.onDelete = function (row) {

    console.log(row);
  }

  vm.onEdit = function (row) {

    console.log(row);
  }

  vm.deleteGridData = function (id) {
    dataServices.deleteData(vm.rows, id).then(function (response) {
      for (var i = 0; i < vm.rows.length; i++) {
        if (vm.rows[i].empId === empId) {
          vm.rows.slice(i, 1);
        }
      }
    })
  }
})