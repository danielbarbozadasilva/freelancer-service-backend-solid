import { listByIdConversationUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IListConversationRequestDTO } from './ListSingleConversationDTO'

describe('List by id conversation', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List by id conversation', () => {
    test('Make sure list by id conversation', async () => {
      const userId: string = '65883ab3c89918015e25e532'
      const buyerId: string = '65a5002f9d9b340e62d233b4'
      const result: IListConversationRequestDTO[] = await listByIdConversationUseCase.execute({ userId, buyerId })
      expect(result[0]._id).not.toBe(null);
    })
  })
})
