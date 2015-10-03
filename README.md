# originator
 [![Build Status](https://travis-ci.org/zanuka/originator.svg)](https://travis-ci.org/zanuka/originator) [![Coverage Status](https://coveralls.io/repos/zanuka/originator/badge.svg?branch=master&service=github)](https://coveralls.io/github/zanuka/originator?branch=master)

#### es6 node module + tape + ci pipeline + npm scripts

## install

```sh
npm i originator -D
```

## usage

```js
import {Originator} from 'originator'
new Originator() // true
```

## scripts

`watch` - starts file watcher

`test` - runs eslint and tests with results piped to formatted TAP output using [tap-spec](https://github.com/scottcorgan/tap-spec).

`validate` - runs nsp package audit and checks for outdated npm packages

`ci` - Travis CI integration + zuul multi-framework & browser tests

`clean` - cleans out `/lib` and `/coverage` directories

`compile` - compiles es6 in `/src` to es5 in `/lib` using babel

`cover` - generates code coverage text-summary report in terminal

`report` - generates code coverage html report and opens it in browser

`coveralls` - runs code coverage and sends report to coveralls

`zuul` - runs browser tests via zuul at `http://localhost:9966/__zuul`

`deploy` - rebase and push to master


## devDependencies:

- [**babel**](https://github.com/babel/babel) - compiler for writing next generation JavaScript
 
- [**babel-eslint**](https://github.com/babel/babel-eslint) - ESLint using Babel as the parser

- [**babelify**](https://github.com/babel/babelify) - Browserify transform for Babel. Used in multi-framework testing with zuul.

- [**blue-tape**](https://github.com/spion/blue-tape) - substack's tape test runner with promise support
 
- [**coveralls**](https://github.com/nickmerwin/node-coveralls) - test coverage and history statistics support for node.js

- [**eslint**](https://github.com/eslint/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript.

- [**eslint-config-xo**](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO
 
- [**eslint-plugin-babel**](https://github.com/babel/eslint-plugin-babel) - an eslint rule plugin companion to babel-eslint
 
- [**istanbul**](https://github.com/gotwarlost/istanbul) - excellent coverage tool

- [**nsp**](https://github.com/nodesecurity/nsp) - check for bad packages

- [**rimraf**](https://github.com/isaacs/rimraf) - remove stuff

- [**tap-spec**](https://github.com/scottcorgan/tap-spec) - formatted TAP output

- [**zuul**](https://github.com/defunctzombie/zuul) - multi-framework javascript browser testing

##### Sauce Connect 
Used to create tunnel allowing [Travis CI](https://travis-ci.org/) to utilize [Sauce Labs](https://saucelabs.com), a browser and mobile testing platform.


