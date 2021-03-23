// Protocols
import { IEmailValidator } from '../presentation/protocols/IEmailValidator'

// Validator
import validator from 'validator'

class EmailValidatorAdapter implements IEmailValidator {
  public isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}

export { EmailValidatorAdapter }
