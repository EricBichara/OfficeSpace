var app = angular.module('officeSpace', []);

app.config(function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

    app.controllerProvider = $controllerProvider;
    app.compileProvider    = $compileProvider;
    app.routeProvider      = $routeProvider;
    app.filterProvider     = $filterProvider;
    app.provide            = $provide;

    $routeProvider.when('/', {
        templateUrl: 'views/home.html'});

    $routeProvider.when('/project/:id',{
        templateUrl: 'views/project.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});