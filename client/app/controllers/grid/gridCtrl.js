leaveApp.controller('gridCtrl', function (dataServices, $state, formConfigService, userSession, gridData) {
  var vm = this;
  vm.column = formConfigService.tableConfig;
  vm.approveLeavesColumn = formConfigService.ApproveTableConfig;
  vm.rows = [];



  vm.user = userSession.getUserDetails();
  //vm.rows = gridData;
  updateRows();

  // dataServices.get('grid', null, { empId: vm.user.empId }).then(function (response) {
  //   vm.rows = response;
  // }).catch(function (error) {
  //   console.log(error)
  // });


  vm.approveLeaveList = function () {
    dataServices.get('grid', null, { managerEmpId: vm.user.empId }).then(function (response) {
      vm.hide = true;
      vm.appliedLeaves = response;
    }).catch(function (error) {
      console.log(error)
    });
  }

  vm.onAction = function (action, row) {
    console.log(row);
    console.log(action);
    if (action == 'approve') {
      updateStatus("Approve", row)
    } if (action == 'reject') {
      updateStatus("Rejected", row)
    } if(action == 'delete'){
      updateStatus('deleted', row)
      updateRows();
    }

    
  }

  function updateRows(){
     vm.rows = gridData.filter(function(item){
        if(item.leaveStatus != 'deleted'){
            return item;
        }
      })
    }

    function updateStatus(status, row) {
      dataServices.put('grid', row._id, { status: status })
        .then(function (response) {
          row.leaveStatus = status;
        }).catch(function (error) {
          console.log(error)
        })
    }


    // vm.onDelete = function (row) {
    //   dataServices.deleteData(row.leaveId).then(function (response) {
    //     for (var i = 0; i < vm.rows.length; i++) {
    //       if (vm.rows[i].leaveId === row.leaveId) {
    //         vm.rows.splice(i, 1);
    //       }
    //     }
    //   });
    //   console.log(row);
    // }

    vm.onEdit = function (row) {

      console.log(row);
      $state.go('leave', { data: row });
    }

    vm.back = function () {
      $state.go('leave');
    }

    vm.onSave = function (row) {
      console.log(row);
    }

})



//using ng-transclude ..............

// leaveApp.directive('jaya', function(){
//     return {
//         restrict : 'E',
//         template:'<div><ng-transclude /></div><div>My Name is Jaya</div>',
//         transclude:true
//     }
// })



