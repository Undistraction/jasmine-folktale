# jasmine-folktale

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
