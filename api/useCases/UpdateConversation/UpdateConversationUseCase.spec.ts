import { updateConversationUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('Update conversation', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Update conversation', () => {
    test('Make sure update conversation', async () => {
      const id: string = '65883a7bc89918015e25e52e65883ab3c89918015e25e532'
      const isSeller: boolean = true

      const result = await updateConversationUseCase.execute(id, isSeller)
      expect(!!result).toBe(true)
    })
  })
})
