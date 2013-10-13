app.service('officeService', function ($http) {

    this.city = "stockholm";

    this.fetchOffices = function () {
        return $http.get('/getOffices').then(function(result){
               return result.data;
        });
    }

    this.createOffice = function(office){
        console.log("here");
        /*$http.post('/getOffices', office).then(function(result){
           return result.data;
        });*/
    }

    this.setCity = function(city){
        this.city = city;
    }
});