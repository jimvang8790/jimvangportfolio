var myApp = angular.module('myApp', ['ngRoute']);
// Angular configuration (routes)
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<div class="home"><h1>Jim Vang</h1><h3>Prime Digital Academy | Full-Stack Software Engnieer</h3><h3>University of Minnesota | Chemistry</h3><img class="link" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAApMAAAAJDIzM2NjNGE1LTQwMmQtNGNlNy1iZDhhLTRjOTBlNDIxYjkzMw.jpg"></div>',
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

// myApp.controller('ProfileController', function($http, GithubAPI){
//   console.log('ProfileController Loaded');
//   var vm = this;
//   vm.items = [];
// // calling GithubAPI service and the function githubProfile to grab jimvang8790 profile info
//  vm.getProfile = function() {
//    GithubAPI.githubProfile().then(function(data){
//      console.log('get profile here:-->', data);
//      vm.items = data;
//      console.log('this is vm.items->', vm.items);
//    });
//  };// end getProfile
//  vm.getProfile();
// });// end ProfileController
//
// myApp.controller('ReposController', function($http, GithubAPI){
//   var vm = this;
//   vm.object = [];
// // calling GithubAPI service and the function githubRepos to grab jimvang8790 repos info
//  vm.getRepos = function() {
//    GithubAPI.githubRepos().then(function(data){
//      console.log('get repos herer:->', data);
//      vm.object = data;
//      console.log('this is vm.items->', vm.object);
//    });
//  };// end getRepos
//  vm.getRepos();
// });// end ReposController
