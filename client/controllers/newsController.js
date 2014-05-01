/**
 * Created by ericbichara on Apr/26/14.
 */

app.controller('NewsController', ['$scope', 'officeService',
    function NewsController($scope, officeService){
        $scope.newsList = null;

        $scope.$watch(function(){return officeService.news;}, function(data){
            $scope.newsList = data;
        });
        officeService.getNews();

    }]);