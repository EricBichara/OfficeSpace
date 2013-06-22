app.controllerProvider.register('AdminController', function ($scope, officeService) {
    $scope.name = "";
    $scope.type = "";

    init();

    function init() {

    }

    $scope.fetchOffices = function(){
        var data = officeService.fetchOffices().then(function(data){
            $scope.name = data.name;
            $scope.type = data.type;
        });

    }

});