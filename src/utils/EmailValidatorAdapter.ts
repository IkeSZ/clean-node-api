import { IEmailValidator } from '../presentation/protocols/IEmailValidator'

class EmailValidatorAdapter implements IEmailValidator {
  public isValid (email: string): boolean {
    return false
  }
}

export { EmailValidatorAdapter }
