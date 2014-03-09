app.controller('EditProjectController', ['$scope', '$location', 'officeService', '$routeParams',
    function AdminController($scope, $location, officeService, $routeParams){
        if(!$routeParams.id){
            $scope.project = officeService.createNewProject();
        }else{
            $scope.project = officeService.getProjectById($routeParams.id);
        }

        $scope.saveProject = function(){
            officeService.saveProject($scope.project);
        }

        $scope.cancel = function(){
            $location.path('/admin/');
        }
    }]);