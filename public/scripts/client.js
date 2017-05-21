var myApp = angular.module('myApp', ['ngRoute']);

// globals
var vm = this;

// Angular configuration (routes)
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<div> This is the default </div>',
    controller: ''
  })
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileController as pc'
  })
  .when('/repos', {
    templateUrl: 'views/repos.html',
    controller: 'ReposController as rc'
  })
  .otherwise('/');

  $locationProvider.html5Mode(true);
});// end config

myApp.controller('ProfileController',function($http, GithubAPI){
  // var vm = this;

// calling GithubAPI service and the function githubProfile to grab jimvang8790 profile info
 vm.getProfile = GithubAPI.githubProfile();

});// end ProfileController

myApp.controller('ReposController', function($http, GithubAPI){
  // var vm = this;

// calling GithubAPI service and the function githubRepos to grab jimvang8790 repos info
 vm.getRepos = GithubAPI.githubRepos();

});// end ReposController
