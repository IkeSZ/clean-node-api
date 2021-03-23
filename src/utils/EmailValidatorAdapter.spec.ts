import { EmailValidatorAdapter } from './EmailValidatorAdapter'

describe('EmailValidatorAdapter', () => {
  it('should be able to return if false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })
})
