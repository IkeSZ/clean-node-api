import {
  IAccountModel,
  IAddAccount,
  IAddAccountModel,
  IEncrypter,
  IAddAccountRepository
} from './DbAddAccountProtocols'

class DbAddAccount implements IAddAccount {
  constructor (
    private readonly encrypter: IEncrypter,
    private readonly addAccountRepository: IAddAccountRepository
  ) {}

  public async add (accountData: IAddAccountModel): Promise<IAccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const account = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))

    return new Promise(resolve => resolve(account))
  }
}

export { DbAddAccount }
