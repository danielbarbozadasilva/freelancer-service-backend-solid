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
      const id: string = '638a236a0ef44976d1687126'
      const result = await listByIdRatingUseCase.execute(id)
      expect(result._id).not.toBe(null);
    })
  })
})
