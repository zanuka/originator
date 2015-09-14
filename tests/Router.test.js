const Router = require('../Router');

describe('Router', function() {

  it('should export a constructor function', function() {
    expect(Router).to.be.a('function');
  });

  it('should construct with no arguments', function() {
    function calledWithNoArgs() {
      new Router();
    }
    function calledWithArgs() {
      new Router('foo');
    }
    expect(calledWithArgs).to.throw();
    expect(calledWithNoArgs).to.not.throw();
  });
});

describe('Router Constructor', function() {

  it('should expose a "route" method that registers a RouteObject', function() {

  });

  it('should expose a "has" method that returns true if the route passed was found in the router', function() {

  });

  it('should accept child routes that pass a path and a component', function() {

  });

});

