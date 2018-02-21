import { validation as Validation } from 'folktale'

const { Success, Failure } = Validation

describe(`toEqualFailureWithValue()`, () => {
  it(`Succeeds for a failure with expected value`, () => {
    const value = { a: 1 }
    const validation = Failure(value)
    expect(validation).toEqualFailureWithValue(value)
  })

  it(`Fails for a Success with expected value`, () => {
    const value = { a: 1 }
    const validation = Success(value)
    expect(validation).not.toEqualFailureWithValue(value)
  })

  it(`Fails for a unexpected value`, () => {
    const value = { a: 1 }
    expect(value).not.toEqualFailureWithValue(value)
  })
})
