import { deleteRatingUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('Delete rating', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Delete rating', () => {
    test('Make sure delete rating', async () => {
      const id: string = '638a236a0ef44976d1687126'
      const result = await deleteRatingUseCase.execute(id)
      expect(result).toBe(true)
    })
    test('Ensure return error if the id is non-existent', async () => {
      try {
        const id: string = '6591ac0ef9877e3170d90cff'
        expect(await deleteRatingUseCase.execute(id)).toThrow()
      } catch (error){}
    })
  })
})
