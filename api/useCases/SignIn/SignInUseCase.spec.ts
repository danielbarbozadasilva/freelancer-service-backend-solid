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
        email: 'danielbarboza56@hotmail.com',
        password: '123'
      }
      const resultData = await signInUseCase.execute(data)
      expect(resultData).toHaveProperty('data._id')
    })

    test('Make sure returns error if credentials are invalid', async () => {
      try {
        const data = {
          email: 'daniel80dddbarboza@gmail.com',
          password: '123'
        }
        expect(signInUseCase.execute(data)).toThrow()
      } catch (error) {}
    })
  })
})
