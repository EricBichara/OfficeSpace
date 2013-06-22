app.service('officeService', function ($http) {
    this.fetchOffices = function () {
        return $http.get('/getOffices').then(function(result){
               return result.data;
        });
    }
});