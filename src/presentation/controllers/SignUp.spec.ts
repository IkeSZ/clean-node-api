import { SignUpController } from './SignUp'

describe('SignUp Controller', () => {
  it('Should be able to return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const htppRequest = {
      body: {
        email: 'any_email@name.com',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }

    const httpResponse = sut.handle(htppRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
