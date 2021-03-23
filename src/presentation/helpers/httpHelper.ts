// Erros
import { ServerError } from '../errors/ServerError'

// Protocols
import { IHttpResponse } from '../protocols/IHttp'

const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  body: error
})

const serverError = (): IHttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export { badRequest, serverError }
