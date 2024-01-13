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
      const data = {
        id: '65883a7bc89918015e25e52e65883ab3c89918015e25e532',
        sellerId: '65883a7bc89918015e25e52e',
        buyerId: '65883ab3c89918015e25e532',
        readBySeller: true,
        readByBuyer: true,
        isSeller: true
      }

      const result = await updateConversationUseCase.execute(
        id,
        data as IUpdateConversationRequestDTO
      )
      expect(!!result).toBe(true)
    })
  })
})
