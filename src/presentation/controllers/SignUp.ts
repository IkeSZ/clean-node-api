import { IHttpRequest, IHttpResponse } from '../protocols/IHttp'

// Errors
import { MissingParamError } from '../errors/MissingParamError'

// Helpers
import { badRequest } from '../helpers/httpHelper'

class SignUpController {
  handle (httpRequest: IHttpRequest): IHttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}

export { SignUpController }
