import { registerUseCase } from './index'
import { createConnection, closeConnection } from '../../database/client'
import { IRegisterRequestDTO } from './RegisterDTO'
import cryptography from '../../utils/cryptography'
import Chance from 'chance'

describe('Register User', () => {
  beforeAll(() => {
    createConnection()
  })

  afterAll(async () => {
    await closeConnection()
  })

  describe('Register User', () => {
    test('Make sure return error if the email already exists', async () => {
      try {
        const salt = cryptography.createSalt()
        const data = {
          name: 'Daniel Silva',
          username: 'daniel116',
          email: 'danielbarboza11@hotmail.com',
          cpf: '111.111.111-11',
          birthDate: '2000-03-01T05:36:40.303Z',
          picture: '',
          country: 'brasil',
          phone: '(21)99999-9999',
          description: 'Desenvolvedor web',
          permissions: ['client'],
          hash: cryptography.createHash('123', salt),
          salt: salt,
          isSeller: false
        }
        expect(registerUseCase.execute(data as IRegisterRequestDTO)).toThrow()
      } catch (error) {}
    })

    test('Make sure return error if the cpf already exists', async () => {
      try {
        const salt = cryptography.createSalt()
        const data = {
          name: 'Daniel Silva',
          username: 'daniel216',
          email: 'danielbarboza58@hotmail.com',
          cpf: '444.444.444-44',
          birthDate: '2000-03-01T05:36:40.303Z',
          picture: '',
          country: 'brasil',
          phone: '(21)99999-9999',
          description: 'Desenvolvedor web',
          permissions: ['client'],
          hash: cryptography.createHash('123', salt),
          salt: salt,
          isSeller: false
        }
        expect(registerUseCase.execute(data as IRegisterRequestDTO)).toThrow()
      } catch (error) {}
    })

    test('Make sure return error if the username already exists', async () => {
      try {
        const salt = cryptography.createSalt()
        const data = {
          name: 'Daniel Silva',
          username: 'daniel789',
          email: 'danielbarboza59@hotmail.com',
          cpf: '222.222.222-22',
          birthDate: '2000-03-01T05:36:40.303Z',
          picture: '',
          country: 'brasil',
          phone: '(21)99999-9999',
          description: 'Desenvolvedor web',
          permissions: ['client'],
          hash: cryptography.createHash('123', salt),
          salt: salt,
          isSeller: false
        }
        expect(registerUseCase.execute(data as IRegisterRequestDTO)).toThrow()
      } catch (error) {}
    })
  })
})
