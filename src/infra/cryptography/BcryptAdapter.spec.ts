import { BcryptAdapter } from './BcryptAdapter'

// Protocols
import { IEncrypter } from '../../data/protocols/IEncrypter'

// Bcrypt
import bcrypt from 'bcrypt'

interface ISutTypes {
  sut: IEncrypter
  salt: number
}

const makeSut = (): ISutTypes => {
  const salt = 12
  const sut = new BcryptAdapter(salt)

  return {
    sut,
    salt
  }
}

describe('BcryptAdapter', () => {
  it('should be able to call bcrypt with correct values', async () => {
    const { sut, salt } = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt('any_value')

    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })
})
