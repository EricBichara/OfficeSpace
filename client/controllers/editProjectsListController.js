/**
 * Created by ericbichara on Mar/29/14.
 */
app.controller('EditProjectsListController', ['$scope', '$location', 'officeService',
    function EditProjectsListController($scope, $location, officeService){

        $scope.projects = null;
        $scope.$watch(function(){return officeService.projects;}, function(data){
            $scope.projects = data;
        })
        officeService.getProjects();

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
            officeService.deleteProjectById(projectId);
        }
    }]);