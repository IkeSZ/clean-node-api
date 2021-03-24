import { DbAddAccount } from './DbAddAccount'

describe('DbAddAccount UseCase', () => {
  it('should be able to call Encrypter with correct password', async () => {
    class EncryperStub {
      public async encrypt (value: string): Promise<string> {
        return new Promise(resolve => resolve('hashed_password'))
      }
    }

    const encrypterStub = new EncryperStub()

    const sut = new DbAddAccount(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')

    const accountData = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: '123456'
    }

    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('123456')
  })
})
