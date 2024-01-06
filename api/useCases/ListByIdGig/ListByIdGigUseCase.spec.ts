import { listByIdGigUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IGigRequestDTO } from './ListByIdGigDTO'

describe('List by id Categories', () => {
  beforeAll(async() => {
    await createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List by id category', () => {
    test('Make sure list by id gig', async () => {
      const id: string = '6591ac25f9877e3170d90c40'
      const result: IGigRequestDTO = await listByIdGigUseCase.execute(id)
      expect(result._id).not.toBe(null);
    })
  })
})
