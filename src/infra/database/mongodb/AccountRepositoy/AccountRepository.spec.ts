import { AccountMongoRepository } from './AccountRepository'

// Helpers
import { MongoHelper } from '../helpers/MongoHelper'

const makeSut = (): AccountMongoRepository => {
  return new AccountMongoRepository()
}

describe('AccountRepository MongoDb', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  it('should be able to return an account on success', async () => {
    const sut = makeSut()

    const accountData = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: '123456'
    }

    const account = await sut.add(accountData)

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()

    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email@mail.com')
    expect(account.password).toBe('123456')
  })
})
