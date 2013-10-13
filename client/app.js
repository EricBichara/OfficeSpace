var app = angular.module('officeSpace', ['ngRoute', "google-maps"]);

app.config(function ($routeProvider){//, $rootScope) {

    $routeProvider.
    when('/', {
        templateUrl: 'views/home.html'}).
    when('/project/:id',{
        templateUrl: 'views/project.html',
        controller: 'ProjectController'}).
    when('/portal', {
        templateUrl: 'views/portal.html',
        controller: 'PortalController'}).
    otherwise({ redirectTo: '/' });

    /*$rootScope.$on("$routeChangeStart", function ( next, current) {

        if (false){ //check if user has already chosen a city
            $location.path('/');
        }

    });*/
});