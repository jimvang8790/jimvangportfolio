// myApp.service('GithubAPI', function($http) {
//   //Enter your token and username here:
//   var oauthToken = '8ec5f0ec1e63ef0a8ffe8774ef3af5a6abd3417a';
//   var username = 'jimvang8790';
//
//   //Call to Github API to fetch user's profile info
//   this.githubProfile = function(){
//
//     return $http({
//       method: 'GET',
//       url: 'https://api.github.com/users/' + username,
//       headers: {
//         'Authorization': 'token '+ oauthToken}
//       }
//     ).then(function(response) {
//       console.log(response.data);
//       return response.data;
//     });
//   };
//
//   //Call to Github API to fetch list of user's repos
//   this.githubRepos = function(){
//
//     return $http({
//       method: 'GET',
//       url: 'https://api.github.com/users/' + username + '/repos',
//       headers: {
//         'Authorization': 'token '+ oauthToken}
//       }
//     ).then(function(response) {
//       console.log(response.data);
//       return response.data;
//     });
//   };
//
// });// end service
