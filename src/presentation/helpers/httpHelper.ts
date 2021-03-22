import { IHttpResponse } from '../protocols/IHttp'

const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  body: error
})

export { badRequest }
