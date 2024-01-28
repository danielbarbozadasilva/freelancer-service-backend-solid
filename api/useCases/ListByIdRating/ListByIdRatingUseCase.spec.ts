import { listByIdRatingUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List by id rating', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List by id rating', () => {
    test('Make sure list by id rating', async () => {
      const id: string = '659802bcfed9f7066576ca77'
      const result = await listByIdRatingUseCase.execute(id)
      expect(result[0]._id).not.toBe(null);
    })
  })
})
