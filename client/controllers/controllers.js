/**
 * Created by ericbichara on Mar/06/14.
 */
/**
 * Created by ericbichara on Dec/28/13.
 */
app.controller('AdminController', ['$scope', '$location',
    function AdminController($scope, $location){

        $scope.editProjects = function(){
            $location.path('/editProjectsList/');
        };

        $scope.editNews = function(){
            $location.path('/editNews/');
        };

        $scope.editUsers = function(){
            $location.path('/editUsers/');
        };
    }]);
/**
 * Created by ericbichara on Mar/30/14.
 */
app.controller('ApartmentPopupController', ['$scope', '$location', 'officeService', '$routeParams', '$modal',
    function ApartmentPopupController($scope, $location, officeService, $routeParams, $modal){

    }]);
/**
 * Created by ericbichara on Dec/28/13.
 */
app.controller('ContactController', ['$scope', '$location', 'officeService',
    function ContactController($scope, $location, officeService){

    }]);
/**
 * Created by ericbichara on Mar/29/14.
 */
app.controller('EditNewsController', ['$scope', '$location', 'officeService',
    function EditNewsController($scope, $location, officeService){


    }]);
app.controller('EditProjectController', ['$scope', '$location', 'officeService', '$routeParams', '$modal',
    function AdminController($scope, $location, officeService, $routeParams, $modal){
        if(!$routeParams.id){
            $scope.project = new Project();
        }else{
            $scope.project = officeService.getProjectById($routeParams.id);
        }

        $scope.saveProject = function(){
            officeService.saveProject($scope.project);
            $location.path('/admin/');
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
/**
 * Created by ericbichara on Mar/29/14.
 */
app.controller('EditUsersController', ['$scope', '$location', 'officeService',
    function EditUsersController($scope, $location, officeService){


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

        $scope.projects = null;
        $scope.$watch(function(){return officeService.projects;}, function(data){
            $scope.projects = data;
        })
        officeService.getProjects();

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