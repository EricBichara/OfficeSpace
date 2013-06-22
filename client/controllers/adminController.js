app.controllerProvider.register('adminController', function ($scope, officeService) {
    $scope.name = "";
    $scope.type = "";

    $scope.fetchOffices = function(){
        var data = officeService.fetchOffices().then(function(data){
            $scope.name = data.name;
            $scope.type = data.type;
        });

    }

});