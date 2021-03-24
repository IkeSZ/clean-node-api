// Protocols
import { IAddAccountRepository } from '../../../../data/protocols/IAddAccountRepository'

// UseCases
import {
  IAddAccountModel,
  IAccountModel
} from '../../../../data/usecases/AddAccount/DbAddAccountProtocols'

// Helpers
import { MongoHelper } from '../helpers/MongoHelper'

class AccountMongoRepository implements IAddAccountRepository {
  public async add (accountData: IAddAccountModel): Promise<IAccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)

    const account = result.ops[0]
    const { _id, ...accountWithoutId } = account

    return Object.assign({}, accountWithoutId, { id: _id })
  }
}

export { AccountMongoRepository }
