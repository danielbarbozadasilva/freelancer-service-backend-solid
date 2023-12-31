import { IUserRepository } from '../../repositories/IUsersRepository'
import { IUpdateProfileRequestDTO } from './UpdateProfileDTO'

export class UpdateProfileUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, data: IUpdateProfileRequestDTO) {
    const emailAlreadyExists = await this.userRepository.findByEmail(data.email)
    const userNameAlreadyExists = await this.userRepository.findByUsername(data.username)
    const userCpfAlreadyExists = await this.userRepository.findByCpf(data.cpf)

    if (userCpfAlreadyExists) {
      throw new Error('Cpf already exists.')
    }

    if (emailAlreadyExists) {
      throw new Error('Email already exists.')
    }

    if (userNameAlreadyExists) {
      throw new Error('Username already exists.')
    }

    return this.userRepository.updateProfile(id, data)
  }
}
