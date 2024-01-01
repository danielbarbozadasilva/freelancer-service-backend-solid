import { updateConversationUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IUpdateConversationRequestDTO } from './UpdateConversationDTO'

describe('Create conversation', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Create conversation', () => {
    test('Make sure update conversation', async () => {
      const id: string = ''
      const data = {
        isSeller: true,
        userId: "65883a7bc89918015e25e52e",
        to: "65883ab3c89918015e25e532",
        readBySeller: false,
        readByBuyer: false,
        sellerId: '123',
        buyerId: '123',
        lastMessage: 'ddddd',
        id: '111111'
      }
      
      const result = await updateConversationUseCase.execute(id, data as IUpdateConversationRequestDTO)
      expect(result).toBe(true)
    })
  })
})
