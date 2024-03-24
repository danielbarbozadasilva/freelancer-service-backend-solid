import { updateRatingUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IRatingRequestDTO } from './UpdateRatingDTO'

describe('Update rating', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Update rating', () => {
    test('Make sure update rating', async () => {
      const data = {
        id: '638a236a0ef44976d1687126',
        name: 'teste',
        text: 'teste',
        score: '5',
        productId: '659802bcfed9f7066576ca77',
        userId: '65883ab3c89918015e25e532',
      }
      
      const result = await updateRatingUseCase.execute(data as IRatingRequestDTO)
      expect(result).toBe(true)
    })
  })
})
