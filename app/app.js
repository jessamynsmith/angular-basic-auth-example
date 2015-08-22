'use strict';

// Declare app level module which depends on views, and components
angular.module('angularBasicAuthExample', [
  'ngRoute',
  'angularBasicAuthExample.login'
])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/login'});
  }]);
