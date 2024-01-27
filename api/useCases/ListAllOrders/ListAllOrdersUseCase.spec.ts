import { listAllOrdersUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IOrdersRequestDTO } from './ListAllOrdersDTO'

describe('List all orders', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List all orders', () => {
    test('Make sure list all orders', async () => {
      const result: IOrdersRequestDTO[] = await listAllOrdersUseCase.execute({
        userId: Object('65a5002f9d9b340e62d233b4'),
        isSeller: true
      })
      expect(result[0]._id).not.toBe(null);
    })
  })
})
