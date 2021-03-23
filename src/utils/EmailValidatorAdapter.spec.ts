import { EmailValidatorAdapter } from './EmailValidatorAdapter'

// Validator
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidatorAdapter', () => {
  it('should be able to return if false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })

  it('should be able to return if true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@mail.com')

    expect(isValid).toBe(true)
  })
})
