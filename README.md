# originator

#### es6 node module template with test config

##### work in progress... should be up and running this week

##### npm scripts:

`npm test` runs eslint and tests with results piped to formatted TAP output using [tap-spec](https://github.com/scottcorgan/tap-spec).

`npm run zuul` runs browser tests via zuul at `http://localhost:9966/__zuul`

`npm compile` using babel, compiles es6 from `src/` to es5 in `dist/`

##### dev stack includes:
 
- [**coveralls**](https://github.com/nickmerwin/node-coveralls) - test coverage and history statistics support for node.js.

- [**blue-tape**](https://github.com/spion/blue-tape) - tape with promise support

- [**zuul**](https://github.com/defunctzombie/zuul) - multi-framework javascript browser testing

- [**istanbul**](https://github.com/gotwarlost/istanbul) - JS code coverage tool
 
- [**sauce connect**](http://docs.travis-ci.com/user/sauce-connect/) - Used to create tunnel allowing [Travis CI](https://travis-ci.org/) to utilize [Sauce Labs](https://saucelabs.com), a browser and mobile testing platform.



