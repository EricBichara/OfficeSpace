app.controllerProvider.register('adminController', function ($scope, officeService) {
    $scope.stage = 'step1';
    $scope.office = new Office();

    createOffice = function(){
        var data = officeService.createOffice($scope.office).then(function(data){
            console.log("done");
        });

    }

});