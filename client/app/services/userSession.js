leaveApp.service('userSession', function ($q, $http, $rootScope) {

    var _user ;

    function login(user) {
        _user = user;
        $rootScope.user = user;
    }

    function getUserDetails() {
        return _user;
    }

    function logout(){
        _user = null;
        $rootScope.user = null;
    }


    this.login = login;
    this.logout = logout;
    this.getUserDetails = getUserDetails;


});