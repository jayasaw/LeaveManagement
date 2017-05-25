
leaveApp.service('formConfigService', function ($q, $http) {

    var managerNames = [
        { code: '1000', description: 'Anup' },
        { code: '1001', description: 'Priyanka' }
    ]
    var leaveType = [{ code: '121', description: 'test1' }, { code: '111', description: 'test2' }]

    this.leaveForm = [
        { label: 'Employee Name', fieldName: 'empName', type: 'text' , disabled: true },
        { label: 'Employee Id', fieldName: 'empId', type: 'number', widthClass: 'col-md-6 gap', disabled: true },
        { label: 'Manager Name', fieldName: 'managerEmpId', widthClass: 'col-md-6 gap', type: 'select', options: managerNames },
        { label: 'Leave Type', fieldName: 'leaveType', type: 'select', options: leaveType },
        { label: 'Start Date', fieldName: 'startDate', type: 'date', widthClass: 'col-md-6 gap' },
        { label: 'End Date', fieldName: 'endDate', type: 'date', widthClass: 'col-md-6' },
        { label: 'Leave Reason', fieldName: 'leaveReason', type: 'textarea', row: "3" },
        { label: 'Leave status', fieldName: 'leaveStatus', type: 'text', disabled: true },
        { label: 'Backup Employee Name', fieldName: 'backupEmpName', type: 'text', disabled: true }
    ]

    //this.loginForm = [];

    this.tableConfig = [
        { fieldName: 'empId', displayName: 'Emp Id' },
        { fieldName: 'empName', displayName: 'Emp Name' },
        { fieldName: 'startDate', displayName: 'Start Date' },
        { fieldName: 'endDate', displayName: 'End Date' },
        { fieldName: 'leaveReason', displayName: 'Leave Type' },
        { fieldName: 'leaveStatus', displayName: 'Leave status' },
        { fieldName: 'actionBtn', displayName: 'Action', action:[{button:'delete', class:'red', icon:'glyphicon-trash'}] }
    ];


 this.ApproveTableConfig = [
        { fieldName: 'empId', displayName: 'Emp Id' },
        { fieldName: 'empName', displayName: 'Emp Name' },
        { fieldName: 'startDate', displayName: 'Start Date' },
        { fieldName: 'endDate', displayName: 'End Date' },
        { fieldName: 'leaveReason', displayName: 'Leave Type' },
        { fieldName: 'leaveStatus', displayName: 'Leave status' },
        { fieldName: 'actionBtn', displayName: 'Action', action:[{button:'approve', class:'red', icon:'glyphicon-check'}, {button:'reject', class:'red', icon:'glyphicon-remove-circle'}] }
    ];
    var options = [
        { code: 'e', description: 'Employee' },
        { code: 'm', description: 'Manager' }
    ]
    this.loginConfig = [
        { label: 'Email Id', fieldName: 'emailId', type: 'email' },
        { label: 'Password', fieldName: 'password', type: 'password' },
    ];


    this.registerConfig = [
        { label: 'FirstName', fieldName: 'firstName', type: 'text', widthClass: 'col-md-6 gap' },
        { label: 'LastName', fieldName: 'lastName', type: 'text', widthClass: 'col-md-6 gap' },
        { label: 'Email Id', fieldName: 'emailId', type: 'text' },
        { label: 'Password', fieldName: 'password', type: 'password' },
        { label: 'confirmPassword', fieldName: 'confirmPassword', type: 'password' },
        { label: 'Manager', fieldName: 'isManager', type: 'checkbox', widthClass: 'col-md-6 gap' },
        { label: 'Employee', fieldName: 'isEmployee', type: 'checkbox', widthClass: 'col-md-6 gap' }];
});
