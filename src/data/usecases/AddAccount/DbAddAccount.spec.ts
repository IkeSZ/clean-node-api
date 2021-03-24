import { DbAddAccount } from './DbAddAccount'

// UseCase
import { IAddAccount } from '../../../domain/usecases/IAddAccount'

// Protocols
import { IEncrypter } from '../../protocols/IEncrypter'

interface ISutTypes {
  sut: IAddAccount
  encrypterStub: IEncrypter
}

const makeSut = (): ISutTypes => {
  class EncryperStub {
    public async encrypt (value: string): Promise<string> {
      return new Promise(resolve => resolve('hashed_password'))
    }
  }

  const encrypterStub = new EncryperStub()

  const sut = new DbAddAccount(encrypterStub)

  return {
    sut,
    encrypterStub
  }
}

describe('DbAddAccount UseCase', () => {
  it('should be able to call Encrypter with correct password', async () => {
    const { sut, encrypterStub } = makeSut()

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
