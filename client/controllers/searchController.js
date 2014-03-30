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