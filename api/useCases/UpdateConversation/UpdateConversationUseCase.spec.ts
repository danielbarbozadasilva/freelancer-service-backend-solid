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
      const id: string = '65883a7bc89918015e25e52e65a5002f9d9b340e62d233b4'
      const isSeller: boolean = true

      const result = await updateConversationUseCase.execute(id, isSeller)
      expect(!!result).toBe(true)
    })
  })
})
