import { DbAddAccount } from './DbAddAccount'

// UseCase
import { IAddAccount } from '../../../domain/usecases/IAddAccount'

// Protocols
import { IEncrypter } from '../../protocols/IEncrypter'

interface ISutTypes {
  sut: IAddAccount
  encrypterStub: IEncrypter
}

const makeEncrypter = (): IEncrypter => {
  class EncrypterStub implements IEncrypter {
    public async encrypt (value: string): Promise<string> {
      return new Promise(resolve => resolve('hashed_password'))
    }
  }

  return new EncrypterStub()
}

const makeSut = (): ISutTypes => {
  const encrypterStub = makeEncrypter()

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

  it('should be able to throw if Encrypter throws', async () => {
    const { sut, encrypterStub } = makeSut()

    jest.spyOn(encrypterStub, 'encrypt').mockReturnValueOnce(
      new Promise((resolve, reject) => reject(new Error()))
    )

    const accountData = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: '123456'
    }

    const promise = sut.add(accountData)

    await expect(promise).rejects.toThrow()
  })
})
