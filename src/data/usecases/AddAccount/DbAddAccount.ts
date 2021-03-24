import {
  IAccountModel,
  IAddAccount,
  IAddAccountModel,
  IEncrypter
} from './DbAddAccountProtocols'

class DbAddAccount implements IAddAccount {
  constructor (private readonly encrypter: IEncrypter) {}

  public async add (account: IAddAccountModel): Promise<IAccountModel> {
    await this.encrypter.encrypt(account.password)

    return new Promise(resolve => resolve(null))
  }
}

export { DbAddAccount }
