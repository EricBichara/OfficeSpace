var app = angular.module('officeSpace', ['ngRoute', "google-maps", 'ui.bootstrap']);

app.config(function ($routeProvider){

    $routeProvider.
    when('/', {
        templateUrl: 'views/home.html'}).
    when('/project/:id',{
        templateUrl: 'views/project.html',
        controller: 'ProjectController'}).
    when('/editProject/:id',{
        templateUrl: 'views/editProject.html',
        controller: 'EditProjectController'}).
    when('/editProject/',{
        templateUrl: 'views/editProject.html',
        controller: 'EditProjectController'}).
    when('/portal', {
        templateUrl: 'views/portal.html',
        controller: 'PortalController'}).
    when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'}).
    when('/about', {
        templateUrl: 'views/about.html',
        controller: 'ContactController'}).
    when('/info', {
        templateUrl: 'views/info.html',
        controller: 'ContactController'}).
    when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController'}).
    when('/editProjectsList',{
        templateUrl: 'views/editProjectsList.html',
        controller: 'EditProjectsListController'}).
    when('/editNews',{
        templateUrl: 'views/editNews.html',
        controller: 'EditNewsController'}).
    when('/editUsers',{
        templateUrl: 'views/editUsers.html',
        controller: 'EditUsersController'}).
    otherwise({ redirectTo: '/' });
});