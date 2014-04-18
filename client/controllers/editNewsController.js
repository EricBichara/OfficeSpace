/**
 * Created by ericbichara on Mar/29/14.
 */
app.controller('EditNewsController', ['$scope', 'officeService',
    function EditNewsController($scope, officeService){

        $scope.opened = false;
        $scope.newsList = null;
        $scope.selectedNews = {
            title: "",
            date: "",
            content: ""
        };

        $scope.$watch(function(){return officeService.news;}, function(data){
            $scope.newsList = data;
        });
        officeService.getNews();

        $scope.saveNews = function(){
            officeService.saveNews($scope.selectedNews);
        };

        $scope.selectNews = function(news){
            $scope.selectedNews = news;
        };

        $scope.deleteNews = function(id){
            officeService.deleteNews(id);
        };

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };

        $scope.createNews = function(){
            $scope.selectedNews = {
                title: "",
                content: "",
                date: new Date()
            }
        }
    }]);