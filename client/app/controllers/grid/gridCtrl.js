leaveApp.controller('gridCtrl', function (dataServices, $state, formConfigService, jaya) {
  var vm = this;
  vm.column = formConfigService.tableConfig;
  vm.rows = [];


  // dataServices.getData().then(function (response) {
  //   vm.rows = response;
  // }).catch(function (error) {
  //   console.log(error)
  // })

  vm.onDelete = function (row) {
    dataServices.deleteData(row.leaveId).then(function (response) {
      for (var i = 0; i < vm.rows.length; i++) {
        if (vm.rows[i].leaveId === row.leaveId) {
          vm.rows.splice(i, 1);
        }
      }
    });
    console.log(row);
  }

  vm.onEdit = function (row) {

    console.log(row);
    $state.go('leave', { data: row });
  }

  vm.back = function(){
    $state.go('leave');
  }

  vm.onSave = function(row){
    console.log(row);
  }



  //   vm.deleteGridData = function (id) {
  //     dataServices.deleteData(vm.rows, id).then(function (response) {
  //       for (var i = 0; i < vm.rows.length; i++) {
  //         if (vm.rows[i].leaveId === leaveId) {
  //           vm.rows.slice(i, 1);
  //         }
  //       }
  //     })
  //   }
})
leaveApp.directive('jaya', function(){
    return {
        restrict : 'E',
        template:'<div><ng-transclude /></div><div>My Name is Jaya</div>',
        transclude:true
    }
})



