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

const success = (data: Object): IHttpResponse => ({
  statusCode: 200,
  body: data
})

export { badRequest, serverError, success }
