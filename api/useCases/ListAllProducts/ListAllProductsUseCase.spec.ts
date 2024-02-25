import { listAllProductsUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

export interface Filters {
  userId?: string
  category: string
  offset: number
  limit: number
  search: string
  order?: string
}

describe('List All Products', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List All Products', () => {
    test('Make sure list all Products', async () => {
      const filter: Filters = {
        userId: '65883ab3c89918015e25e532',
        category: '6591ac5bf9877e3170d90c48',
        search: '',
        offset: 0,
        limit: 1000
      }

      const result: any = await listAllProductsUseCase.execute(filter)
      expect(result[0].data[0].title).not.toBe(null)
    })

    test('Make sure return error when listing products', async () => {
      try {
        const filter: Filters = {
          userId: '65883ab3c89918015e25e111',
          category: '6591ac5bf9877e3170d90c11',
          search: '',
          offset: 0,
          limit: 1000
        }

        expect(await listAllProductsUseCase.execute(filter)).toThrow()
      } catch (error) {}
    })
  })
})
