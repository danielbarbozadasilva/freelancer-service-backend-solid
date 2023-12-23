import { registerUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IRegisterRequestDTO } from './RegisterDTO'
import cryptography from '../../utils/cryptography'

describe('Register User', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Register User', () => {
    test('Make sure register the user', async () => {
      const salt = cryptography.createSalt()
      const data = {
          username: "daniel95barboza",
          email: "daniel95barboza@gmail.com",
          password: "123",
          permissions: ["client"],
          hash: cryptography.createHash('daniel', salt),
          salt: salt,
          img: "",
          country: "Brasil",
          phone: "2199999-9999",
          desc: "teste",
          isSeller: false,
      }
      const result = await registerUseCase.execute(data as IRegisterRequestDTO)
      expect(result).toBe(true)
    })

    test('Make sure return error if the email already exists', async () => {
      try {
        const salt = cryptography.createSalt()
        const data = {
          username: "daniel95barboza",
          email: "daniel95barboza@gmail.com",
          password: "123",
          permissions: ["client"],
          hash: cryptography.createHash('daniel', salt),
          salt: salt,
          img: "",
          country: "Brasil",
          phone: "2199999-9999",
          desc: "teste",
          isSeller: false,
      }
        expect(registerUseCase.execute(data as IRegisterRequestDTO)).toThrow()
      } catch (error) {}
    })

    test('Make sure return error if the username already exists', async () => {
      try {
        const salt = cryptography.createSalt()
        const data = {
          username: "daniel95barboza",
          email: "daniel95barboza@gmail.com",
          password: "123",
          permissions: ["client"],
          hash: cryptography.createHash('daniel', salt),
          salt: salt,
          img: "",
          country: "Brasil",
          phone: "2199999-9999",
          desc: "teste",
          isSeller: false,
      }
        expect(registerUseCase.execute(data as IRegisterRequestDTO)).toThrow()
      } catch (error) {}
    })
  })
})
