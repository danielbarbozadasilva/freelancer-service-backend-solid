import { listByIdConversationUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IListConversationRequestDTO } from './ListSingleConversationDTO'

describe('List by id conversation', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List by id conversation', () => {
    test('Make sure list by id conversation', async () => {
      const id: string = '658951d2e4e3a44b66725296'
      const result: IListConversationRequestDTO = await listByIdConversationUseCase.execute(id)
      expect(result._id).not.toBe(null);
    })
  })
})
