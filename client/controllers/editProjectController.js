app.controller('EditProjectController', ['$scope', '$location', 'officeService', '$routeParams', '$modal',
    function AdminController($scope, $location, officeService, $routeParams, $modal){
        if(!$routeParams.id){
            $scope.project = new Project();
        }else{
            $scope.project = officeService.getProjectById($routeParams.id);
        }

        $scope.saveProject = function(){
            officeService.saveProject($scope.project).then(function(result){
                $location.path('/editProjectsList/');
            });

        }

        $scope.cancel = function(){
            $location.path('/admin/');
        }

        $scope.createApartment = function(){
            var modalInstance = $modal.open({
                templateUrl: 'views/popups/apartmentPopup.html',
                controller: 'ApartmentPopupController'
            });
        }
    }]);