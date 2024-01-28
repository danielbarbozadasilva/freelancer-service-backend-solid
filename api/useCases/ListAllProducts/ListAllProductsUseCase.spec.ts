import { listAllProductsUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List All Products', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List All Products', () => {
    test('Make sure list all Products', async () => {
      const filter: object = {
        userId: '65883ab3c89918015e25e532',
        category: '6591ac5bf9877e3170d90c48',
        min: null,
        max: null,
        search: null
      }
      const result: any = await listAllProductsUseCase.execute(filter)
      expect(result[0]._id).not.toBe(null)
    })
  })
})
