import { listByIdOrderUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IOrderResultDTO } from './ListByIdUserOrderDTO'

describe('List by id orders', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List by id orders', () => {
    test('Make sure list by id orders', async () => {
      const data: any = {
        userId: Object('65883ab3c89918015e25e532'),
        isSeller: true
      }
      const result: IOrderResultDTO[] = await listByIdOrderUseCase.execute(
        data
      )
      expect(result[0]._id).not.toBe(null)
    })
  })
})
