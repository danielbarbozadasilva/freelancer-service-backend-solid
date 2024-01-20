import { createMessageUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { ICreateMessageRequestDTO } from './CreateMessageDTO'

describe('Create Message', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Create Message', () => {
    test('Make sure create Message', async () => {
      const data = {
        conversationId: Object('658951d2e4e3a44b66725296'),
        userId: Object("65883ab3c89918015e25e532"),
        description: 'fdasdfsdfasfsadfsdfdsfs',
        readBySeller: true,
        readByBuyer: true,
        lastMessage: 'fdasdfsdfasfsadfsdfdsfs'
      }

      const result = await createMessageUseCase.execute(data as ICreateMessageRequestDTO)
      expect(result).toBe(true)
    })
  })
})
