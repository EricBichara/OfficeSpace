app.controller('EditProjectController', ['$scope', '$location', 'officeService', '$routeParams', '$modal',
    function AdminController($scope, $location, officeService, $routeParams, $modal){

        var userList = [];

        $scope.userList = null;
        $scope.selectedUser = null;
        $scope.project = {};
        $scope.apartments = [];

        $scope.$watch(function(){return officeService.users;}, function(data){
            $scope.userList = data;
        });

        officeService.getUsers().then(
            function(result){
                if(!$routeParams.id){
                    $scope.project = new Project();
                }else{
                    officeService.getProjectById($routeParams.id).then(
                        function(result){
                            $scope.project = result.project;
                            $scope.apartments = result.apartments;
                            if($scope.project.contact !== null) {
                                for (var i = 0; i < $scope.userList.length; i++) {
                                    if ($scope.userList[i]._id === $scope.project.contact) {
                                        $scope.selectedUser = $scope.userList[i];
                                        break;
                                    }
                                }
                            }
                        },
                        function(error){

                        }
                    );
                }
        });

        $scope.saveProject = function(){
            $scope.project.contact = $scope.selectedUser._id;
            officeService.saveProject($scope.project, $scope.apartments).then(function(result){
                $location.path('/editProjectsList/');
            });
        }

        $scope.cancel = function(){
            $location.path('/admin/');
        }

        $scope.createApartment = function(){
            var modalInstance = $modal.open({
                templateUrl: 'views/popups/apartmentPopup.html',
                controller: 'ApartmentPopupController',
                resolve:{
                    apartment: function(){
                        return new Apartment();
                    }
                }
            });

            modalInstance.result.then(function(apartment){
                $scope.apartments.push(apartment);
            });
        }

        $scope.editApartment = function(apartment){
            var modalInstance = $modal.open({
                templateUrl: 'views/popups/apartmentPopup.html',
                controller: 'ApartmentPopupController',
                resolve:{
                    apartment: function(){
                        return apartment;
                    }
                }
            });

            modalInstance.result.then(function(apartment){
                console.log('new apartment' + apartment);
            });
        };

        $scope.viewApartment = function(apartment){

        };

        $scope.deleteApartment = function(apartment){
            angular.forEach($scope.apartments, function(value, index){
                if(value.size === apartment.size){
                    $scope.apartments.slice(index, 1);
                }
            }, this);
        };
    }]);