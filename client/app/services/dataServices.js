
dataServices.$inject = ['$q', '$http'];

leaveApp.service('dataServices', dataServices);
//leaveApp.service('dataServices',['$q','$http',  dataServices]);

function dataServices($q, $http) {


    this.post = post;
    this.remove = remove;
    this.get = get;
    this.put = put;


    // this is to save the data;



    function post(url, data, params) {
        var defered = $q.defer()
        $http({
            url: 'api/' + url,
            method: 'Post',
            data: JSON.stringify(data)
        }).then(function (response) {
            defered.resolve(response)
        }, function error(error) {
            defered.reject(error)
        })

        return defered.promise;
    }


    // this is to get the data
    function get(url, id, params) {

        var defered = $q.defer();
        $http({
            url: !id ? 'api/' + url : 'api/' + url + '/' + id,
            method: 'GET',
            params: params || null
            // data: JSON.stringify(data)
        }).then(function (response) {
            defered.resolve(response.data)
        }, function error(error) {
            defered.reject(error)
        })

        return defered.promise;

    }

    function remove(url, id) {
        var defered = $q.defer();
        $http({
            url: 'api/' + url + '/' + id,
            method: 'DELETE'
        }).then(function (response) {
            defered.resolve(response.data)
        }, function error(error) {
            defered.reject(error)
        })

        return defered.promise;

    }

    function put(url, data, id) {
        var defered = $q.defer();
        $http({
            url: 'api/' + url + '/' + id,
            method: 'PUT',
            data: JSON.stringify(data)
        }).then(function (response) {
            defered.resolve(response)
        }, function error(error) {
            defered.reject(error)
        })

        return defered.promise;

    }


}

