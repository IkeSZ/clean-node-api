import { SignUpController } from './SignUp'

// Errors
import { MissingParamError } from '../errors/MissingParamError'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('SignUp Controller', () => {
  it('should be able to return 400 if no name is provided', () => {
    const sut = makeSut()
    const htppRequest = {
      body: {
        email: 'any_email@name.com',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }

    const httpResponse = sut.handle(htppRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  it('should be able to return 400 if no email is provided', () => {
    const sut = makeSut()
    const htppRequest = {
      body: {
        name: 'any_name',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }

    const httpResponse = sut.handle(htppRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  it('should be able to return 400 if no password is provided', () => {
    const sut = makeSut()
    const htppRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@name.com',
        passwordConfirmation: '123456'
      }
    }

    const httpResponse = sut.handle(htppRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  it('should be able to return 400 if no password confirmation is provided', () => {
    const sut = makeSut()
    const htppRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@name.com',
        password: '123456'
      }
    }

    const httpResponse = sut.handle(htppRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
