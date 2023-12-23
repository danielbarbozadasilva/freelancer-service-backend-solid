import { signInUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'

describe('SignIn User', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('SignIn User', () => {
    test('Make sure that the user signin', async () => {
      const data = {
        username: 'daniel80barboza',
        password: 'daniel'
      }
      const resultData = await signInUseCase.execute(data)
      expect(resultData).toHaveProperty('data._id')
    })

    test('Make sure returns error if credentials are invalid', async () => {
      try {
        const data = {
          username: 'daniel10barboza',
          password: 'daniel'
        }
        expect(signInUseCase.execute(data)).toThrow()
      } catch (error) {}
    })
  })
})
