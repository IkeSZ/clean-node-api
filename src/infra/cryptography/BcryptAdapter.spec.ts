import { BcryptAdapter } from './BcryptAdapter'

// Protocols
import { IEncrypter } from '../../data/protocols/IEncrypter'

// Bcrypt
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('encrypted_hash'))
  }
}))

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

  it('should be able to return a hash on success', async () => {
    const { sut } = makeSut()

    const encryptedValue = await sut.encrypt('any_value')

    expect(encryptedValue).toBe('encrypted_hash')
  })

  it('should be able to throw if Bcrypt throws', async () => {
    const { sut } = makeSut()
    jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(
      new Promise((resolve, reject) => reject(new Error()))
    )

    const promise = sut.encrypt('any_value')

    await expect(promise).rejects.toThrow()
  })
})
