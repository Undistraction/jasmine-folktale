# jasmine-folktale

[![NPM Version](https://img.shields.io/npm/v/jasmine-matchers.svg)](https://www.npmjs.com/package/jasmine-matchers)
[![codecov](https://img.shields.io/codecov/c/github/Undistraction/jasmine-matchers.svg)](https://codecov.io/gh/Undistraction/jasmine-matchers)
[![Build Status](https://img.shields.io/travis/Undistraction/jasmine-matchers.svg)](https://travis-ci.org/Undistraction/jasmine-matchers)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg)](./LICENSE.md)
[![Node Security](https://nodesecurity.io/orgs/undistraction/projects/d8d2c5d2-7010-47d0-a1d5-872403ccfbe4/badge)](https://nodesecurity.io/orgs/undistraction/projects/d8d2c5d2-7010-47d0-a1d5-872403ccfbe4)

Jasmine Matchers for use with [folktale](http://folktale.origamitower.com/api/v2.1.0/en/folktale.html).

Use with Jasmine or anything that supports [Jasmine](https://jasmine.github.io/) matchers, like [Jest](https://facebook.github.io/jest/).

## Install

```
yarn add jasmine-folktale
```

or

```
npm install jasmine-folktale
```

## Matchers

### toEqualSuccessWithValue

```
const value = { a: 1 }
const validation = Success(value)
expect(validation).toEqualSuccessWithValue(value) // Pass
```

### toEqualFailureWithValue

```
const value = { a: 1 }
const validation = Failure(value)
expect(validation).toEqualFailureWithValue(value) // Pass
```
