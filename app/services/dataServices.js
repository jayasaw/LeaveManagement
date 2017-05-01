leaveApp.service('dataServices', function ($q, $http) {


    this.postData = postData;
    this.getData = getData;
    this.deleteData = deleteData;


// this is to save the data;
    function postData(data) {
        var defered = $q.defer();
        $http({
            url: 'http://localhost:60290/api/leaveInfo',
            method: 'Post',
            data: JSON.stringify(data)
        }).then(function(response){
            defered.resolve(response)
        } , function error(error){
            defered.reject(error)
        })

        return defered.promise;

    }


// this is to get the data
    function getData() {
          var defered = $q.defer();
        $http({
            url: 'http://localhost:60290/api/leaveInfo',
            method: 'GET',
           // data: JSON.stringify(data)
        }).then(function(response){
            defered.resolve(response.data)
        } , function error(error){
            defered.reject(error)
        })

        return defered.promise;

    }
    
      function deleteData(data, id) {
          var defered = $q.defer();
        $http({
            url: 'http://localhost:60290/api/leaveInfo + id',
            method: 'DELETE',
            data: JSON.stringify(data)
        }).then(function(response){
            defered.resolve(response.data)
        } , function error(error){
            defered.reject(error)
        })

        return defered.promise;

    }
    

})