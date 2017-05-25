leaveApp.factory('optionsData', function ($q, $http) {

    var options = {}

    options.leaveType = [
        { code: 'sl', description: 'Sick Leave' },
        { code: 'el', description: 'Earn Leave' },
        { code: 'ph', description: 'Public Holiday' },
        { code: 'rl', description: 'Restricted Leave' },
        { code: 'nh', description: 'National Holiday' },
    ]


    return options
});