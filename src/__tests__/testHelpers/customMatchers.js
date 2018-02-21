// eslint-disable-next-line no-unused-vars
import toEqualSuccessWithValue from '../../matchers/validation/toEqualSuccessWithValue'
import toEqualFailureWithValue from '../../matchers/validation/toEqualFailureWithValue'

expect.extend({
  toEqualSuccessWithValue,
  toEqualFailureWithValue,
})
