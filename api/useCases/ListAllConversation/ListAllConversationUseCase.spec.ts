import { listAllConversationUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List all conversations', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List all conversations', () => {
    test('Make sure list all conversations', async () => {
      const result = await listAllConversationUseCase.execute()
      expect(result[0]._id).not.toBe(null);
    })
  })
})
