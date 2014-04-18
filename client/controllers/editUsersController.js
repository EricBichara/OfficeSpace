/**
 * Created by ericbichara on Mar/29/14.
 */
app.controller('EditUsersController', ['$scope', '$location', 'officeService',
    function EditUsersController($scope, $location, officeService){

        $scope.userList = null;
        $scope.selectedUser = {
            name: "",
            telephone: "",
            email: ""
        }
        $scope.$watch(function(){return officeService.users;}, function(data){
            $scope.userList = data;
        });

        officeService.getUsers();

        $scope.saveUser = function(){
            officeService.saveUser($scope.selectedUser);
        };

        $scope.selectUser = function(user){
            $scope.selectedUser = user;
        };

        $scope.deleteUser = function(id){
            officeService.deleteUser(id);
        }

        $scope.createUser = function(){
            $scope.selectedUser = {
                name: "",
                telephone: "",
                email: ""
            }
        }
    }]);