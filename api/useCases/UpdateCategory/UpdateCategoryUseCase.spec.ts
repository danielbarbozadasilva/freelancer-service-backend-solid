import { updateCategoryUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { ICategoryRequestDTO } from './UpdateCategoryDTO'

describe('Update Category', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Update category', () => {
    test('Make sure update category', async () => {
      const data = {
        _id: '6591ac25f9877e3170d90c40',
        name: 'Desenvolver código',
        description: 'Desenvolver código',
        picture: 'files-1704052453978.jpg'
      }
      const result = await updateCategoryUseCase.execute(
        data as ICategoryRequestDTO
      )
      expect(result).toBe(true)
    })

    test('ensure return error if the id is non-existent', async () => {
      try {
        const data = {
          _id: '6591ac0ef9877e3170d90cff',
          name: 'Desenvolver código',
          description: 'Desenvolver código',
          picture: 'files-1704052453978.jpg'
        }
        expect(
          await updateCategoryUseCase.execute(data as ICategoryRequestDTO)
        ).toThrow()
      } catch (error) {}
    })
  })
})
