import { listByIdProductUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IProductRequestDTO } from './ListByIdProductDTO'

describe('List by id product', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List by id product', () => {
    test('Make sure list by id product', async () => {
      const id: string = '659802bcfed9f7066576ca78'
      const result: IProductRequestDTO = await listByIdProductUseCase.execute(id)
      expect(result._id).not.toBe(null);
    })
  })
})
