// Protocols
import { IHttpRequest, IHttpResponse } from '../protocols/IHttp'
import { IController } from '../protocols/IController'
import { IEmailValidator } from '../protocols/IEmailValidator'

// Errors
import { MissingParamError } from '../errors/MissingParamError'
import { InvalidParamError } from '../errors/InvalidParamError'
import { ServerError } from '../errors/ServerError'

// Helpers
import { badRequest } from '../helpers/httpHelper'

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
      return {
        statusCode: 500,
        body: new ServerError()
      }
    }
  }
}

export { SignUpController }
