# jest-folktale

Jest Matchers for use with [folktale](http://folktale.origamitower.com/api/v2.1.0/en/folktale.html)

## Install

```
yarn add jest-folktale
```

or

```
npm install jest-folktale
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
