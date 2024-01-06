import { deleteGigUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('Delete Gig', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Delete Gig', () => {
    test('Make sure delete Gig', async () => {
      const id: string = '6591ac0ef9877e3170d90c3e'
      const result = await deleteGigUseCase.execute(id)
      expect(result).toBe(true)
    })
    test('Ensure return error if the id is non-existent', async () => {
      try {
        const id: string = '6591ac0ef9877e3170d90cff'
        expect(await deleteGigUseCase.execute(id)).toThrow()
      } catch (error){}
    })
  })
})
