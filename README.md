# originator
 [![Build Status](https://travis-ci.org/zanuka/originator.svg)](https://travis-ci.org/zanuka/originator) [![Coverage Status](https://coveralls.io/repos/zanuka/originator/badge.svg?branch=master&service=github)](https://coveralls.io/github/zanuka/originator?branch=master)

#### node module originator + tape test config & ci pipeline

##### WORK IN PROGRESS... making this a generator... stay tuned

##### npm scripts:

`npm test` runs eslint and tests with results piped to formatted TAP output using [tap-spec](https://github.com/scottcorgan/tap-spec).

`npm run zuul` runs browser tests via zuul at `http://localhost:9966/__zuul`

`npm run watch` starts file watcher

`npm compile` using babel, compiles es6 from `src/` to es5 in `dist/`

##### devDependencies:

- [**babel**](https://github.com/babel/babel) - compiler for writing next generation JavaScript
 
- [**babel-eslint**](https://github.com/babel/babel-eslint) - ESLint using Babel as the parser

- [**babel-istanbul**](https://github.com/ambitioninc/babel-istanbul) - handles coverage for babel generated code by reconciling babel's output and its source map
 
- [**babelify**](https://github.com/babel/babelify) - Browserify transform for Babel. Used in multi-framework testing with zuul.

- [**blue-tape**](https://github.com/spion/blue-tape) - substack's tape test runner with promise support
 
- [**coveralls**](https://github.com/nickmerwin/node-coveralls) - test coverage and history statistics support for node.js

- [**eslint**](https://github.com/eslint/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript.

- [**eslint-config-xo**](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO
 
- [**eslint-plugin-babel**](https://github.com/babel/eslint-plugin-babel) - an eslint rule plugin companion to babel-eslint

- [**tap-spec**](https://github.com/scottcorgan/tap-spec) - formatted TAP output

- [**zuul**](https://github.com/defunctzombie/zuul) - multi-framework javascript browser testing

##### Sauce Connect 
Used to create tunnel allowing [Travis CI](https://travis-ci.org/) to utilize [Sauce Labs](https://saucelabs.com), a browser and mobile testing platform.


