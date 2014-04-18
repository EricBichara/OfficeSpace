/**
 * Created by ericbichara on Mar/06/14.
 */
/**
 * Created by ericbichara on Dec/28/13.
 */
app.controller('AdminController', ['$scope', '$location',
    function AdminController($scope, $location){

        $scope.radioModel = 'Middle';

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