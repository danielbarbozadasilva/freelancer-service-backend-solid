import { deleteUserUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('Delete User', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Delete User', () => {
    test('Make sure delete the user', async () => {
      const id: string = '65883a7bc89918015e25e52e'
      const result = await deleteUserUseCase.execute(id)
      expect(result).toBe(true)
    })
    test('Make sure delete the user', async () => {
      const id: string = '65883a7bc89918015e25e52f'
      const result = await deleteUserUseCase.execute(id)
      expect(result).toBe(false)
    })
  })
})
