leaveApp.controller('myGridCtrl', function () {
    var vm = this;

    vm.edit = function (row) {
        console.log(row);
        row.row.empName = 'Anup Saw';
        //vm.onEdit(row);
    }

    vm.update = function () {
        vm.rows = [{ "leaveId": 131, "empId": 1, "empName": "Anup Saw", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": null, "joiningDate": null, "leaveReason": null, "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927" },
        { "leaveId": 132, "empId": 2, "empName": "Anup 1", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": null, "joiningDate": null, "leaveReason": null, "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927" },
        { "leaveId": 133, "empId": 3, "empName": "Anup 2", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": null, "joiningDate": null, "leaveReason": null, "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927" },
        { "leaveId": 134, "empId": 4, "empName": "Anup 3", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": null, "joiningDate": null, "leaveReason": null, "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927" },
        { "leaveId": 145, "empId": 5, "empName": "jaya saw 123456", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": "2017-05-17T18:30:00", "joiningDate": null, "leaveReason": "guygyutg", "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927" }]

    }

    vm.updateOneData = function () {
        vm.rows = [{ "leaveId": 131, "empId": 1, "empName": "Anup Saw", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": null, "joiningDate": null, "leaveReason": null, "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927" },
        { "leaveId": 132, "empId": 2, "empName": "Anup 1", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": null, "joiningDate": null, "leaveReason": null, "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927" },
        { "leaveId": 133, "empId": 3, "empName": "Anup 2", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": null, "joiningDate": null, "leaveReason": null, "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927" },
        { "leaveId": 134, "empId": 4, "empName": "Anup 3", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": null, "joiningDate": null, "leaveReason": null, "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927" },
        { "leaveId": 145, "empId": 5, "empName": "jaya saw 123456", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": "2017-05-17T18:30:00", "joiningDate": null, "leaveReason": "guygyutg", "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927"  },
        { "leaveId": 146, "empId": 6, "empName": "jaya saw 3", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": "2017-05-17T18:30:00", "joiningDate": null, "leaveReason": "guygyutg", "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927"  },
        { "leaveId": 147, "empId": 7, "empName": "jaya saw 6", "leaveType": "nhiuh", "empDesignation": "yujhnb", "empManagerName": "hgugug", "createDate": "2017-05-19T23:02:30.927", "startDate": null, "endDate": "2017-05-17T18:30:00", "joiningDate": null, "leaveReason": "guygyutg", "projectName": null, "backupEmpName": null, "modifiedDate": "2017-05-19T23:02:30.927"  }
        ]

    }


})

leaveApp.directive('myGrid', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/myGrid/myGrid.html',
        controller: 'myGridCtrl',
        controllerAs: 'grid',
        bindToController: true,
        scope: {
            config: '=',
            rows: '=',
            onDelete: '&',
            onEdit: '&',
            onSave: '&',
            back: '&'
        }
    }
})