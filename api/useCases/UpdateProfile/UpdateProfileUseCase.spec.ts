import { updateProfileUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IUpdateProfileRequestDTO } from './UpdateProfileDTO'
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
      const id: string = '65883ab3c89918015e25e532'
      const data = {
        name: "Daniel Silva",
        username: "daniel936",
        email: "danielbarboza90@hotmail.com",
        cpf: "555.555.555-55",
        birthDate: "2000-03-01T05:36:40.303Z",
        picture: "",
        country: "brasil",
        phone: "(21)99999-9999",
        desc: "Desenvolvedor web",
        permissions: ["client"],
        hash: cryptography.createHash('123', salt),
        salt: salt,
        isSeller: false
      }
      const result = await updateProfileUseCase.execute(id, data as IUpdateProfileRequestDTO)
      expect(result).toBe(true)
    })

    test('Make sure return error if the email already exists', async () => {
      try {
        const salt = cryptography.createSalt()
        const id: string = '65883ab3c89918015e25e532'
        const data = {
          name: "Daniel Silva",
          username: "daniel116",
          email: "danielbarboza56@hotmail.com",
          cpf: "111.111.111-11",
          birthDate: "2000-03-01T05:36:40.303Z",
          picture: "",
          country: "brasil",
          phone: "(21)99999-9999",
          desc: "Desenvolvedor web",
          permissions: ["client"],
          hash: cryptography.createHash('123', salt),
          salt: salt,
          isSeller: false
      }
        expect(updateProfileUseCase.execute(id, data as IUpdateProfileRequestDTO)).toThrow()
      } catch (error) {}
    })

    test('Make sure return error if the cpf already exists', async () => {
      try {
        const salt = cryptography.createSalt()
        const id: string = '65883ab3c89918015e25e532'

        const data = {
          name: "Daniel Silva",
          username: "daniel216",
          email: "danielbarboza58@hotmail.com",
          cpf: "333.333.333-33",
          birthDate: "2000-03-01T05:36:40.303Z",
          picture: "",
          country: "brasil",
          phone: "(21)99999-9999",
          desc: "Desenvolvedor web",
          permissions: ["client"],
          hash: cryptography.createHash('123', salt),
          salt: salt,
          isSeller: false
      }
        expect(updateProfileUseCase.execute(id, data as IUpdateProfileRequestDTO)).toThrow()
      } catch (error) {}
    })

    test('Make sure return error if the username already exists', async () => {
      try {
        const salt = cryptography.createSalt()
        const id: string = '65883ab3c89918015e25e532'

        const data = {
          name: "Daniel Silva",
          username: "daniel936",
          email: "danielbarboza59@hotmail.com",
          cpf: "222.222.222-22",
          birthDate: "2000-03-01T05:36:40.303Z",
          picture: "files-1703438562446.jpg",
          country: "brasil",
          phone: "(21)99999-9999",
          desc: "Desenvolvedor web",
          permissions: ["client"],
          hash: cryptography.createHash('123', salt),
          salt: salt,
          isSeller: false
      }
        expect(updateProfileUseCase.execute(id, data as IUpdateProfileRequestDTO)).toThrow()
      } catch (error) {}
    })
  })
})
