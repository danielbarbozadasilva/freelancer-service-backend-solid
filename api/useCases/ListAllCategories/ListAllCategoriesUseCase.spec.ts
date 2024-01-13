import { listAllCategoriesUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { ICategoryRequestDTO } from './ListAllCategoriesDTO'

describe('List All Categories', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List All Categories', () => {
    test('Make sure list all categories', async () => {
      const result: any = await listAllCategoriesUseCase.execute()
      expect(result[0]._id).not.toBe(null);
    })
  })
})
