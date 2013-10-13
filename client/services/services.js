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
function Office(){
    this.isOffice = null;
    this.isWorkshop = null;
    this.isShop = null;
    this.isStorage = null;
    this.isHotel = null;
    this.isOther = null;
    this.pitch = null;
    this.streetAddress = null;
    this.postNumber = null;
    this.place = null;
    this.county = null;
    this.municipality = null;
    this.area = null;
    this.directions = null;
    this.buildDate = null;
    this.renovatedDate = null;
    this.floor = null;
    this.rooms = null;
    this.layout = null;
    this.rent = null;
    this.rentInfo = null;
    this.transferCharge = null;
    this.transferInfo = null;
    this.movingInDate = null;
    this.movingInInfo = null;
    this.otherInfo = null;
    this.contactList = [];
}

function Contact(){
    this.name = "";
    this.title = "";
}