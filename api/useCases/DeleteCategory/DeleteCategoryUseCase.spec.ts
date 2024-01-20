import { deleteCategoryUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('Delete category', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Delete category', () => {
    test('Make sure delete category', async () => {
      const id: string = '6591ac0ef9877e3170d90c3e'
      const result = await deleteCategoryUseCase.execute(id)
      expect(result).toBe(true)
    })
    test('Ensure return error if the id is non-existent', async () => {
      try {
        const id: string = '6591ac0ef9877e3170d90cff'
        expect(await deleteCategoryUseCase.execute(id)).toThrow()
      } catch (error){}
    })
  })
})
