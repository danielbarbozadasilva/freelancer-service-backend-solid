import { listByIdUserUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('List user', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('List user', () => {
    test('Make sure list by id user', async () => {
      const id: string = '65a5002f9d9b340e62d233b4'
      const result = await listByIdUserUseCase.execute(id)
      expect(!!result).toBe(true)
    })
    
    test('Make sure return error if the id not exists', async () => {
      try {
        const id: string = '65883a7bc89918015e25e5ff'
        expect(await listByIdUserUseCase.execute(id)).toThrow()
      } catch (error){}
    })
  })
})
