import { IAccountModel } from './models/Account'

interface IAddAccountModel {
  name: string
  email: string
  password: string
}

interface IAddAccount {
  add: (account: IAddAccountModel) => Promise<IAccountModel>
}

export { IAddAccount, IAddAccountModel }
