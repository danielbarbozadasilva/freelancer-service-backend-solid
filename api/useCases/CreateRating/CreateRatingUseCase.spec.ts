import { createRatingUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IRatingRequestDTO } from './CreateRatingDTO'

describe('Create rating', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Create rating', () => {
    test('Make sure create rating', async () => {
      const data = {
        name: 'teste',
        text: 'teste',
        score: '5',
        productId: '659802bcfed9f7066576ca77',
        userId: '65883ab3c89918015e25e532',
      }
      
      const result = await createRatingUseCase.execute(data as IRatingRequestDTO)
      expect(result).toBe(true)
    })
  })
})
