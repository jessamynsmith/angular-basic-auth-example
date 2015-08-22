'use strict';

angular.module('angularBasicAuthExample.login',
  ['ngRoute', 'ngMessages', 'ngNotify', 'angularBasicAuthExample.user'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    });
  }])

  .controller('LoginCtrl', ['$scope', 'ngNotify', 'User',
    function($scope, ngNotify, User) {

      $scope.params = {};

      $scope.login = function(username, password) {
        User.login(username, password).then(function(data) {
          ngNotify.set(data.data, {duration: 2500});
          console.log(data);
        }, function(error) {
          ngNotify.set(error.data, {type: 'error', duration: 2500});
          console.log(error);
        });
      };

    }]);
