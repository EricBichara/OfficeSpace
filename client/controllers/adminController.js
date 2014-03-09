/**
 * Created by ericbichara on Mar/06/14.
 */
/**
 * Created by ericbichara on Dec/28/13.
 */
app.controller('AdminController', ['$scope', '$location', 'officeService',
    function AdminController($scope, $location, officeService){

        $scope.projects = officeService.getProjects();

        $scope.editProject = function(projectId){
            $location.path('/editProject/' + projectId);
        }

        $scope.viewProject = function(projectId){
            $location.path('/project/' + projectId);
        }

        $scope.createProject = function(){
            $location.path('/editProject/');
        }

        $scope.deleteProject = function(projectId){
            officeService.deleteProject(projectId);
        }
    }]);