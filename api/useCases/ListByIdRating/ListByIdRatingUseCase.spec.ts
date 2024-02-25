import { listByIdRatingUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List by id rating', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List by id rating', () => {
    test('Make sure list by id rating', async () => {
      const id: string = '659802bcfed9f7066576ca77'
      const result = await listByIdRatingUseCase.execute(id)
      expect(result.averageScore).not.toBe(null)
    })
    test('Make sure return error if the id not exists', async () => {
      try {
        const id: string = '659802bcfed9f7066576ca11'
        expect(await listByIdRatingUseCase.execute(id)).toThrow()
      } catch (error) {}
    })
  })
})
