/**
 * Created with JetBrains WebStorm.
 * User: ericbichara
 * Date: Jun/17/13
 * Time: 22:46
 * To change this template use File | Settings | File Templates.
 */

app.controller('SearchController', ['$scope', 'officeService',
    function PortalController($scope, officeService){
        $scope.city = officeService.city;

        $scope.projects = officeService.getProjects();
        $scope.newsList = officeService.getNews();

        $scope.hello = "hello";


        angular.extend($scope, {
            center: {
                latitude: 59.314152, // initial map center latitude
                longitude: 18.07663 // initial map center longitude
            },
            markers: [], // an array of markers,
            zoom: 8 // the zoom level
        });
    }]);