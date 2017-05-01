
leaveApp.service('formConfigService', function ($q, $http) {

    this.leaveForm = [
        { label: 'Employee Name', fieldName: 'empName', type: 'text' },
        { label: 'Employee Id', fieldName: 'empId', type: 'number', widthClass: 'col-md-6 gap' },
        { label: 'Employee Designation', fieldName: 'empDesignation', type: 'text', widthClass: 'col-md-6' },
        { label: 'Employyee Manager Name', fieldName: 'empManagerName', type: 'text' },
        { label: 'Leave Type', fieldName: 'leaveType', type: 'text' },
        { label: 'Start Date', fieldName: 'startDate', type: 'date', widthClass: 'col-md-6 gap' },
        { label: 'End Date', fieldName: 'endDate', type: 'date', widthClass: 'col-md-6' },
        { label: 'Leave Reason', fieldName: 'leaveReason', type: 'text' },
        { label: 'Joining Date', fieldName: 'joiningDate', type: 'date', widthClass: 'col-md-6 gap' },
        { label: 'Apply Date', fieldName: 'CreateDate', type: 'date', widthClass: 'col-md-6' },
        { label: 'Employee status', fieldName: 'employee status', type: 'text' },
        { label: 'Project Name', fieldName: 'projectName', type: 'text' },
        { label: 'Backup Employee Name', fieldName: 'backupEmpName', type: 'text' }
    ]

    //this.loginForm = [];

    this.tableConfig = [
        { fieldName: 'empId', displayName: 'Emp Id' },
        { fieldName: 'empName', displayName: 'Emp Name' },
        { fieldName: 'startDate', displayName: 'Start Date' },
        { fieldName: 'endDate', displayName: 'End Date' },
        { fieldName: 'leaveReason', displayName: 'Leave Reason' },
        { fieldName: 'leaveStatus', displayName: 'Leave status' },
        { fieldName: 'actionBtn', displayName: 'Acton', edit: 'Edit', delete: 'Delete' }
    ];
});
