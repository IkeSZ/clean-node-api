import { IHttpRequest, IHttpResponse } from '../protocols/IHttp'

// Errors
import { MissingParamError } from '../errors/MissingParamError'

class SignUpController {
  handle (httpRequest: IHttpRequest): IHttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}

export { SignUpController }
