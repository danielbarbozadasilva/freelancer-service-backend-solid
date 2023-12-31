import { createConversationUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { ICreateConversationRequestDTO } from './CreateConversationDTO'

describe('Create conversation', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Create conversation', () => {
    test('Make sure create conversation', async () => {
      const data = {
        isSeller: true,
        userId: "65883a7bc89918015e25e52e",
        to: "65883ab3c89918015e25e532",
        readBySeller: false,
        readByBuyer: false,
        id: '123',
        sellerId: '123',
        buyerId: '123',
        lastMessage: ''
      }
      
      const result = await createConversationUseCase.execute(data as ICreateConversationRequestDTO)
      expect(result).toBe(true)
    })
  })
})
