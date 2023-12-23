import { User } from '../../entities/User'
import { IUserRepository } from '../../repositories/IUsersRepository'
import { IRegisterRequestDTO } from './RegisterDTO'

export class RegisterUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IRegisterRequestDTO) {
    const emailAlreadyExists = await this.userRepository.findByEmail(data.email)
    const userNameAlreadyExists = await this.userRepository.findByUsername(data.username)

    if (emailAlreadyExists) {
      throw new Error('Email already exists.')
    }

    if (userNameAlreadyExists) {
      throw new Error('Username already exists.')
    }

    const userCreate = new User(data)
    return this.userRepository.save(userCreate)
  }
}
