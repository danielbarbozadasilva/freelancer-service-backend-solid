import { updateConversationUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IUpdateConversationRequestDTO } from './UpdateConversationDTO'

describe('Update conversation', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Update conversation', () => {
    test('Make sure update conversation', async () => {
      const id: string = '658951d2e4e3a44b66725296'
      const isSeller: boolean = true

      const result = await updateConversationUseCase.execute(id, isSeller)
      expect(!!result).toBe(true)
    })
  })
})
