import { listMessageUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IMessageRequestDTO } from './ListMessageDTO'

describe('List by id message', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List by id message', () => {
    test('Make sure list by id message', async () => {
      const conversationId: string = '658951d2e4e3a44b66725296'
      const result: IMessageRequestDTO[] = await listMessageUseCase.execute(conversationId)
      expect(result[0]._id).not.toBe(null);
    })
  })
})
