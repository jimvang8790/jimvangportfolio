var myApp = angular.module('myApp', []);

var vm = this;

myApp.controller('GithubController',function(GithubAPI){
  var vm = this;

 vm.getProfile = GithubAPI.githubProfile;

 vm.getProfile();

 vm.getRepos = GithubAPI.githubRepos;

 vm.getRepos();
});
