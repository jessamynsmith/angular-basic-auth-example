'use strict';

describe('angularBasicAuthExample.login module', function() {
  var scope;

  // Mock unavailable modules
  angular.module('ngMessages', []);
  angular.module('ngNotify', []);
  angular.module('angularBasicAuthExample.user', []);

  beforeEach(module('angularBasicAuthExample.login'));

  describe('login controller', function() {
    it('should ....', inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      var user = {login: function() {}};
      var parameters = {
        $scope: scope,
        ngNotify: null,
        User: user
      };
      var loginCtrl = $controller('LoginCtrl', parameters);
      expect(loginCtrl).toBeDefined();
    }));

  });
});
