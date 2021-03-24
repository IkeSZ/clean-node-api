// UseCases
import { IAddAccountModel } from '../../domain/usecases/IAddAccount'
import { IAccountModel } from '../../domain/usecases/models/Account'

interface IAddAccountRepository {
  add: (accountData: IAddAccountModel) => Promise<IAccountModel>
}

export { IAddAccountRepository }
