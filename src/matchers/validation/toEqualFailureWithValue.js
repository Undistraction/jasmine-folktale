import { validation as Validation } from 'folktale'
import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils'
import diff from 'jest-diff'
import deepEql from 'deep-eql'

const { Failure } = Validation

const name = `toEqualFailureWithValue`

export default (received, expected) => {
  const expectedAsFailure = Failure(expected)

  const pass =
    Failure.hasInstance(received) && deepEql(received.value, expected)

  const message = pass
    ? () =>
        `${matcherHint(`.not.\${name}`)}\n\n` +
        `Expected value to not equal:\n` +
        `  ${printExpected(expectedAsFailure)}\n` +
        `Received:\n` +
        `  ${printReceived(received)}`
    : () => {
        const diffString = diff(expectedAsFailure, received)
        return (
          `${matcherHint(`.${name}`)}\n\n` +
          `Expected value to equal:\n` +
          `  ${printExpected(expectedAsFailure)}\n` +
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
