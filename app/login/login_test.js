'use strict';

describe('angularBasicAuthExample.login module', function() {
  var scope;

  // Mock unavailable modules
  angular.module('ngMessages', []);
  angular.module('angularBasicAuthExample.user', []);

  beforeEach(module('angularBasicAuthExample.login'));

  describe('login controller', function() {
    it('should ....', inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      var user = {login: function() {}};
      var parameters = {
        $scope: scope,
        User: user
      };
      var loginCtrl = $controller('LoginCtrl', parameters);
      expect(loginCtrl).toBeDefined();
    }));

  });
});
