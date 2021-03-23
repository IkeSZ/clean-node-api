// Protocols
import {
  IController,
  IEmailValidator,
  IHttpRequest, IHttpResponse, IAddAccount
} from './SignUpProtocols'

// Errors
import { MissingParamError, InvalidParamError } from '../../errors'

// Helpers
import { badRequest, serverError, success } from '../../helpers/httpHelper'

class SignUpController implements IController {
  constructor (
    private readonly emailValidator: IEmailValidator,
    private readonly addAccount: IAddAccount
  ) {}

  public handle (httpRequest: IHttpRequest): IHttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { name, email, password, passwordConfirmation } = httpRequest.body

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      const isEmailValid = this.emailValidator.isValid(email)
      if (!isEmailValid) return badRequest(new InvalidParamError('email'))

      const account = this.addAccount.add({
        name,
        email,
        password
      })

      return success(account)
    } catch {
      return serverError()
    }
  }
}

export { SignUpController }
