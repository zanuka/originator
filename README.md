# originator
 [![Build Status](https://travis-ci.org/zanuka/originator.svg)](https://travis-ci.org/zanuka/originator) [![Coverage Status](https://coveralls.io/repos/zanuka/originator/badge.svg?branch=master&service=github)](https://coveralls.io/github/zanuka/originator?branch=master)

#### es6 node module starter

## npm scripts

`watch` - starts file watcher

`lint` - runs eslint on `/src`

`test` - runs tests and formats piped TAP output with [tap-spec](https://github.com/scottcorgan/tap-spec).

`ci` - Travis CI integration + zuul multi-framework & browser tests

`cover` - generates code coverage text-summary report in terminal

`report` - generates code coverage html report and opens it in browser

`coveralls` - runs code coverage and sends report to coveralls

`zuul` - runs browser tests via zuul at `http://localhost:9966/__zuul`

## devDependencies:

- [**babel**](https://github.com/babel/babel) - compiler for writing next generation JavaScript

- [**babel-eslint**](https://github.com/babel/babel-eslint) - ESLint using Babel as the parser

- [**babel-istanbul**](https://github.com/ambitioninc/babel-istanbul) - excellent coverage tool

- [**babelify**](https://github.com/babel/babelify) - Browserify transform for Babel. Used in multi-framework testing with zuul.

- [**blue-tape**](https://github.com/spion/blue-tape) - substack's tape test runner with promise support

- [**coveralls**](https://github.com/nickmerwin/node-coveralls) - test coverage and history statistics support for node.js

- [**eslint**](https://github.com/eslint/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript.

- [**eslint-config-xo**](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO

- [**eslint-plugin-babel**](https://github.com/babel/eslint-plugin-babel) - an eslint rule plugin companion to babel-eslint

- [**nsp**](https://github.com/nodesecurity/nsp) - check for vulnerabilities

- [**rimraf**](https://github.com/isaacs/rimraf) - remove stuff

- [**tap-spec**](https://github.com/scottcorgan/tap-spec) - formatted TAP output

- [**zuul**](https://github.com/defunctzombie/zuul) - multi-framework javascript browser testing


## Travis CI / Sauce Connect Configuration

[**Sauce Connect**](https://docs.saucelabs.com/reference/sauce-connect/) -  Used to create tunnel allowing [Travis CI](https://travis-ci.org/) to utilize [Sauce Labs](https://saucelabs.com), a browser and mobile testing platform.

If you plan to use Sauce Connect in your new module, be sure to [sign up](https://saucelabs.com/signup) with Sauce Labs if you haven’t already (it’s free for Open Source projects), and get your access key from your account page.

Then you'll want to replace the secured access key in `.travis.yml` with your own. See the [Getting Started](https://docs.saucelabs.com/ci-integrations/travis-ci/) guide on Travis for more info on setting this up.

Best bet if you're a new Travis and/or Sauce Labs user is to follow their steps to create a new `.travis.yml` file.

## Publishing
When you are ready to publish a new version of your module, the following steps can be used:
  1. add and commit your changes via git
  2. `npm version patch -m "Ugrade message..."`
  3. `npm publish`

If publish is a success, the `postpublish` npm script will run `git push origin master --follow-tags`, pushing up and tagging your code properly.

If you run `npm version patch` before committing your changes, you'll get a message like `npm ERR! Git working directory not clean.`. Commit and retry.



