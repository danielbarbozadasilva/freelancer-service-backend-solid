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
        sellerId: '65883a7bc89918015e25e52e',
        buyerId: '65a5002f9d9b340e62d233b4',
        lastMessage: 'ddddd',
        id: '65883a7bc89918015e25e52e65a5002f9d9b340e62d233b4'
      }
      
      const result = await createConversationUseCase.execute(data as ICreateConversationRequestDTO)
      expect(result).toBe(true)
    })
  })
})
