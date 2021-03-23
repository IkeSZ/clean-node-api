// Protocols
import { IController, IEmailValidator, IHttpRequest, IHttpResponse } from '../protocols'

// Errors
import { MissingParamError, InvalidParamError } from '../errors'

// Helpers
import { badRequest, serverError } from '../helpers/httpHelper'

class SignUpController implements IController {
  constructor (private readonly emailValidator: IEmailValidator) {}

  public handle (httpRequest: IHttpRequest): IHttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const isEmailValid = this.emailValidator.isValid(httpRequest.body.email)
      if (!isEmailValid) return badRequest(new InvalidParamError('email'))
    } catch {
      return serverError()
    }
  }
}

export { SignUpController }
