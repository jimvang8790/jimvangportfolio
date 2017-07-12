var myApp = angular.module('myApp', ['ngRoute']);
// Angular configuration (routes)
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<div class="home"><h1>Jim Vang</h1><h3>Prime Digital Academy | Full-Stack Software Engineer</h3><h3>University of Minnesota | Chemistry</h3><img class="link" src="images/jimvang.jpg"></div>',
    controller: ''
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutController as ac'
  }).when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileController as pc'
  }).when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactController as cc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
});// end config
