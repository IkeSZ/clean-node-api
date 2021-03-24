// UseCases
import { IAddAccount, IAddAccountModel } from '../../../domain/usecases/IAddAccount'

// Models
import { IAccountModel } from '../../../domain/usecases/models/Account'

// Protocols
import { IEncrypter } from '../../protocols/IEncrypter'

class DbAddAccount implements IAddAccount {
  constructor (private readonly encrypter: IEncrypter) {}

  public async add (account: IAddAccountModel): Promise<IAccountModel> {
    await this.encrypter.encrypt(account.password)

    return new Promise(resolve => resolve(null))
  }
}

export { DbAddAccount }
