// Protocols
import { IEncrypter } from '../../data/protocols/IEncrypter'

// Bcrypt
import bcrypt from 'bcrypt'

class BcryptAdapter implements IEncrypter {
  constructor (private readonly salt: number) {}

  public async encrypt (value: string): Promise<string> {
    await bcrypt.hash(value, this.salt)

    return null
  }
}

export { BcryptAdapter }
