/**
 * Created by ericbichara on Oct/13/13.
 */
app.controller('ProjectController', ['$scope', '$location', 'officeService', '$routeParams',
    function ProjectController($scope, $location, officeService, $routeParams){

        $scope.project = null;
        $scope.contact = null;
        $scope.apartments = null;

        officeService.getProjectById($routeParams.id).then(
            function(result){
                $scope.project = result.project;
                $scope.apartments = result.apartments;
                if($scope.project.contact){
                    officeService.getUserById($scope.project.contact).then(
                        function(result){
                            $scope.contact = result;
                        }
                    );
                }
            }
        );
    }]);