/**
 * Created by ericbichara on Mar/30/14.
 */
app.controller('ApartmentPopupController', ['$scope', '$location', 'officeService', '$routeParams', '$modalInstance',
    function ApartmentPopupController($scope, $location, officeService, $routeParams, $modalInstance, apartment){
        $scope.currentApartment = null;

        if(apartment){
            $scope.currentApartment = apartment;
        }else{
            $scope.currentApartment = new Apartment();
        }

        $scope.ok = function () {
            $modalInstance.close($scope.currentApartment);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };
    }]);