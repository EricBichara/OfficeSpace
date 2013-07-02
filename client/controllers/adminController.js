app.controllerProvider.register('adminController', function ($scope, officeService) {
    $scope.office = {
        isOffice: null,
        isWorkshop: null,
        isShop: null,
        isStorage: null,
        isHotel: null,
        isOther: null,
        pitch: null,
        streetAddress: null,
        postNumber: null,
        place: null,
        county: null,
        municipality: null,
        area: null,
        directions: null,
        buildDate: null,
        renovatedDate: null,
        floor: null,
        rooms: null,
        layout: null,
        rent: null,
        rentInfo: null,
        transferCharge: null,
        transferInfo: null,
        movingInDate: null,
        movingInInfo: null,
        otherInfo: null,
        contactPerson: null,
        contactPhone: null
    }

    createOffice = function(){
        var data = officeService.createOffice({}).then(function(data){
            console.log("done");
        });

    }

});