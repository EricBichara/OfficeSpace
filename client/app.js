var app = angular.module('officeSpace', []);

app.config(function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

    app.controllerProvider = $controllerProvider;
    app.compileProvider    = $compileProvider;
    app.routeProvider      = $routeProvider;
    app.filterProvider     = $filterProvider;
    app.provide            = $provide;

    $routeProvider.when('/', {
        templateUrl: 'views/home.html'});

    $routeProvider.when('/details/:id',{
        templateUrl: 'views/details.html'
    });

    $routeProvider.when('/admin',{
        templateUrl: 'views/admin.html',resolve:{deps:function($q, $rootScope){
            var deferred = $q.defer();
            var dependencies = ['controllers/adminController.js'];

            $script(dependencies, function(){
                $rootScope.$apply(function(){
                    deferred.resolve();
                });
            });
            return deferred.promise;
        }}
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});