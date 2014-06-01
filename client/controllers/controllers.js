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
/**
 * Created by ericbichara on Mar/30/14.
 */
app.controller('ApartmentPopupController', ['$scope', '$location', 'officeService', '$routeParams', '$modalInstance', 'apartment',
    function ApartmentPopupController($scope, $location, officeService, $routeParams, $modalInstance, apartment){
        $scope.currentApartment = apartment;

        $scope.ok = function () {
            $modalInstance.close($scope.currentApartment);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
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
app.controller('EditProjectController', ['$scope', '$location', 'officeService', '$routeParams', '$modal',
    function AdminController($scope, $location, officeService, $routeParams, $modal){
        $scope.userList = null;
        $scope.selectedUser = null;
        $scope.project = {};
        $scope.apartments = [];

        $scope.$watch(function(){return officeService.users;}, function(data){
            $scope.userList = data;
        });

        officeService.getUsers().then(
            function(result){
                if(!$routeParams.id){
                    $scope.project = new Project();
                }else{
                    officeService.getProjectById($routeParams.id).then(
                        function(result){
                            $scope.project = result.project;
                            $scope.apartments = result.apartments;
                            calculateProject();
                            if($scope.project.contact !== null) {
                                for (var i = 0; i < $scope.userList.length; i++) {
                                    if ($scope.userList[i]._id === $scope.project.contact) {
                                        $scope.selectedUser = $scope.userList[i];
                                        break;
                                    }
                                }
                            }
                        },
                        function(error){

                        }
                    );
                }
        });

        $scope.saveProject = function(){
            $scope.project.contact = $scope.selectedUser._id;
            officeService.saveProject($scope.project, $scope.apartments).then(function(result){
                $location.path('/editProjectsList/');
            });
        }

        $scope.cancel = function(){
            $location.path('/admin/');
        }

        $scope.createApartment = function(){
            var modalInstance = $modal.open({
                templateUrl: 'views/popups/apartmentPopup.html',
                controller: 'ApartmentPopupController',
                resolve:{
                    apartment: function(){
                        return new Apartment();
                    }
                }
            });

            modalInstance.result.then(function(apartment){
                $scope.apartments.push(apartment);
                calculateProject();
            });
        }

        $scope.editApartment = function(apartment){
            var modalInstance = $modal.open({
                templateUrl: 'views/popups/apartmentPopup.html',
                controller: 'ApartmentPopupController',
                resolve:{
                    apartment: function(){
                        return apartment;
                    }
                }
            });

            modalInstance.result.then(function(apartment){
                console.log('new apartment' + apartment);
                calculateProject();
            });
        };

        var calculateProject = function(){
            var minSize = null;
            var maxSize = null;
            var minRent = null;
            var maxRent = null;
            var minPrice = null;
            var maxPrice = null;
            var minRooms = null;
            var maxRooms = null;

            angular.forEach($scope.apartments, function(apartment, index){
                if(minSize === null || minSize > apartment.size){
                    minSize = apartment.size;
                }
                if(maxSize === null || maxSize < apartment.size){
                    maxSize = apartment.size;
                }

                if(minRent === null || minRent > apartment.rent){
                    minRent = apartment.rent;
                }
                if(maxRent === null || maxRent < apartment.rent){
                    maxRent = apartment.rent;
                }

                if(minPrice === null || minPrice > apartment.price){
                    minPrice = apartment.price;
                }
                if(maxPrice === null || maxPrice < apartment.price){
                    maxPrice = apartment.price;
                }

                if(minRooms === null || minRooms > apartment.rooms){
                    minRooms = apartment.rooms;
                }
                if(maxRooms || maxRooms === null || maxRooms < apartment.rooms){
                    maxRooms = apartment.rooms;
                }
            });

            $scope.project.minSize = minSize;
            $scope.project.maxSize = maxSize;
            $scope.project.minRent = minRent;
            $scope.project.maxRent = maxRent;
            $scope.project.minPrice = minPrice;
            $scope.project.maxPrice = maxPrice;
            $scope.project.minRooms = minRooms;
            $scope.project.maxRooms = maxRooms;

        };

        $scope.viewApartment = function(apartment){

        };

        $scope.deleteApartment = function(apartment){
            angular.forEach($scope.apartments, function(value, index){
                if(value.size === apartment.size){
                    $scope.apartments.slice(index, 1);
                }
            }, this);
        };
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

        $scope.project = null;
        $scope.contact = null;
        $scope.apartments = null;

        officeService.getProjectById($routeParams.id).then(
            function(result){
                $scope.project = result.project;
                $scope.apartments = result.apartments;
                if($scope.project.contact){
                    officeService.getUserById($scope.project.contact).then(
                        function(result){
                            $scope.contact = result;
                        }
                    );
                }
            }
        );
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