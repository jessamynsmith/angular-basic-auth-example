'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /login when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  });


  describe('login', function() {

    beforeEach(function() {
      browser.get('#/login');
    });


    it('should render login when user navigates to /login', function() {
      // TODO make this actually test login
      expect(element.all(by.css('p')).first().getText()).
        toMatch(/Jessamyn Smith/);
    });

  });
});
