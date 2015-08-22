'use strict';

angular.module('angularBasicAuthExample.user', ['angularBasicAuthExample.constants'])

  .factory('User', function($http, apiUrl) {
    return {
      login: function(username, password) {
        var authData = btoa(username + ':' + password);
        $http.defaults.headers.common.Authorization = 'Basic ' + authData;

        return $http({
          method: "POST",
          url: apiUrl + 'api/v1/authenticate'
        });
      }
    };
  });
