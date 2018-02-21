import { validation as Validation } from 'folktale'
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'
import diff from 'jest-diff'
import deepEql from 'deep-eql'

const { Success } = Validation

const name = `toEqualSuccessWithValue`

export default (received, expected) => {
  const expectedAsSuccess = Success(expected)

  const pass =
    Success.hasInstance(received) && deepEql(received.value, expected)

  const message = pass
    ? () =>
        `${matcherHint(`.not.\${name}`)}\n\n` +
        `Expected value to not equal:\n` +
        `  ${printExpected(expectedAsSuccess)}\n` +
        `Received:\n` +
        `  ${printReceived(received)}`
    : () => {
        const diffString = diff(expectedAsSuccess, received)
        return (
          `${matcherHint(`.${name}`)}\n\n` +
          `Expected value to equal:\n` +
          `  ${printExpected(expectedAsSuccess)}\n` +
          `Received:\n` +
          `  ${printReceived(received)}${
            diffString ? `\n\nDifference:\n\n${diffString}` : ``
          }`
        )
      }
  return {
    actual: received,
    expected,
    message,
    name,
    pass,
  }
}
