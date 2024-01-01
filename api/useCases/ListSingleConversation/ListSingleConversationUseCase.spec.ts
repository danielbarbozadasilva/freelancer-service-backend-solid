import { listByIdConversationUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IListConversationRequestDTO } from './ListSingleConversationDTO'

describe('List by id conversation', () => {
  beforeAll(async() => {
    await createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List by id conversation', () => {
    test('Make sure list by id conversation', async () => {
      const id: string = '6591ac25f9877e3170d90c40'
      const result: IListConversationRequestDTO = await listByIdConversationUseCase.execute(id)
      expect(result._id).not.toBe(null);
    })
  })
})
