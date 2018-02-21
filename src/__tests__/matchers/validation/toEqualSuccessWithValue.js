import { validation as Validation } from 'folktale'

const { Success, Failure } = Validation

describe(`toEqualSuccessWithValue()`, () => {
  it(`Succeeds for a failure with expected value`, () => {
    const value = { a: 1 }
    const validation = Success(value)
    expect(validation).toEqualSuccessWithValue(value)
  })

  it(`Fails for a Failure with expected value`, () => {
    const value = { a: 1 }
    const validation = Failure(value)
    expect(validation).not.toEqualSuccessWithValue(value)
  })

  it(`Fails for a unexpected value`, () => {
    const value = { a: 1 }
    expect(value).not.toEqualSuccessWithValue(value)
  })
})
