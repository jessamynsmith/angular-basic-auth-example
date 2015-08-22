'use strict';

angular.module('angularBasicAuthExample.login', ['ngRoute', 'ngMessages', 'angularBasicAuthExample.user'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    });
  }])

  .controller('LoginCtrl', ['$scope', 'User',
    function($scope, User) {

      $scope.params = {};

      $scope.login = function(username, password) {
        User.login(username, password).then(function(data) {
          console.log("Logged in successfully");
          console.log(data);
        }, function(error) {
          console.log("Unable to login");
          console.log(error);
        });
      };

    }]);
