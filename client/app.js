var app = angular.module('officeSpace', []);

app.config(function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

    app.controllerProvider = $controllerProvider;
    app.compileProvider    = $compileProvider;
    app.routeProvider      = $routeProvider;
    app.filterProvider     = $filterProvider;
    app.provide            = $provide;

    $routeProvider.when('/', {
        templateUrl: 'views/Home.html'});

    $routeProvider.when('/detail/:id',{
        templateUrl: 'views/Detail.html'
    });

    $routeProvider.when('/admin',{
        templateUrl: 'views/Admin.html',resolve:{deps:function($q, $rootScope){
            var deferred = $q.defer();
            var dependencies = ['controllers/AdminController.js'];

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