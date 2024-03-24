import { updateSellerUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('Update seller User', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Update seller User', () => {
    test('Make sure update seller field user', async () => {
      const id: string = '65883ab3c89918015e25e532'
      const isSeller: boolean = true
      const result = await updateSellerUseCase.execute(id, isSeller)
      expect(result).toBe(true)
    })

    test('Make sure return error if the id not exists', async () => {
      try {
        const id: string = '65883ab3c89918015e25e53f'
        const isSeller: boolean = true
        expect(updateSellerUseCase.execute(id, isSeller)).toThrow()
      } catch (error) {}
    })
  })
})
