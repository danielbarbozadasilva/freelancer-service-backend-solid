import { listByIdCategoryUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List by id Categories', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List by id category', () => {
    test('Make sure list by id categories', async () => {
      const id: string = '6591ac25f9877e3170d90c40'
      const result: any = await listByIdCategoryUseCase.execute(id)
      expect(result._id).not.toBe(null);
    })
  })
})
