// Protocols
import { IHttpRequest, IHttpResponse } from '../protocols/IHttp'
import { IController } from '../protocols/IController'

// Errors
import { MissingParamError } from '../errors/MissingParamError'

// Helpers
import { badRequest } from '../helpers/httpHelper'

class SignUpController implements IController {
  handle (httpRequest: IHttpRequest): IHttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}

export { SignUpController }
