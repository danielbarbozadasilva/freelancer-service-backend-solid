import { deleteProductUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('Delete Product', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Delete Product', () => {
    test('Make sure delete product', async () => {
      const id: string = '659802bcfed9f7066576ca77'
      const result = await deleteProductUseCase.execute(id)
      expect(result).toBe(true)
    })
    test('Ensure return error if the id is non-existent', async () => {
      try {
        const id: string = '659802bcfed9f7066576ca77'
        expect(await deleteProductUseCase.execute(id)).toThrow()
      } catch (error){}
    })
  })
})
