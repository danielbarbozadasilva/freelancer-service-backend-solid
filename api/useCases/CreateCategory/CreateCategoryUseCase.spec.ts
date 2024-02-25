import { createCategoryUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { ICategoryRequestDTO } from './CreateCategoryDTO'

describe('Create category', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Create category', () => {
    test('Make sure create category', async () => {
      const data = {
        name: 'teste',
        description: 'teste',
        picture: 'files-1704052453981.jpg',
      }
      
      const result = await createCategoryUseCase.execute(data as ICategoryRequestDTO)
      expect(result).toBe(true)
    })
  })
})
