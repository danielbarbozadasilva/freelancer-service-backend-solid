import { listAllUsersUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List all users', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List all users', () => {
    test('Ensure all users are listed', async () => {
      const result = await listAllUsersUseCase.execute()
      expect(result[0]).toHaveProperty('_id')
    })
  })
})
