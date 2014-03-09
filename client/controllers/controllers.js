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
/**
 * Created by ericbichara on Dec/28/13.
 */
app.controller('ContactController', ['$scope', '$location', 'officeService',
    function ContactController($scope, $location, officeService){


    }]);
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
/**
 * Created with JetBrains WebStorm.
 * User: ericbichara
 * Date: Jun/17/13
 * Time: 22:47
 * To change this template use File | Settings | File Templates.
 */

/**
 * Created by ericbichara on Oct/12/13.
 */
app.controller('PortalController', ['$scope', '$location', 'officeService',
    function PortalController($scope, $location, officeService){

        $scope.redirect = function(city){
            $location.path('#/home');
            officeService.setCity(city);
        }
    }]);
/**
 * Created by ericbichara on Oct/13/13.
 */
app.controller('ProjectController', ['$scope', '$location', 'officeService', '$routeParams',
    function ProjectController($scope, $location, officeService, $routeParams){
        $scope.project = officeService.getProjectById($routeParams.id);
    }]);
/**
 * Created with JetBrains WebStorm.
 * User: ericbichara
 * Date: Jun/17/13
 * Time: 22:46
 * To change this template use File | Settings | File Templates.
 */

app.controller('SearchController', ['$scope', 'officeService', '$location',
    function PortalController($scope, officeService, $location){
        $scope.city = officeService.city;
        $scope.showAdvSearch = false;
        $scope.projects = officeService.getProjects();
        $scope.newsList = officeService.getNews();

        $scope.openAdvSearch = function(){
            $scope.showAdvSearch = !$scope.showAdvSearch;
        }

        $scope.viewProject = function(projectId){
            $location.path('/project/' + projectId);
        }

        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };

    }]);