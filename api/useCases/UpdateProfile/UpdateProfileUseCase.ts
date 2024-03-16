import { IUserRepository } from '../../repositories/IUsersRepository'
import { IUpdateProfileRequestDTO } from './UpdateProfileDTO'

export class UpdateProfileUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, data: IUpdateProfileRequestDTO) {
    const userExists: boolean = await this.userRepository.verifyIdUserExists(id)
    const emailAlreadyExists: boolean = await this.userRepository.findByEmail(data.email)
    const userNameAlreadyExists: boolean = await this.userRepository.findByUsername(data.username)
    const userCpfAlreadyExists: boolean = await this.userRepository.findByCpf(data.cpf)

    if (!userExists){
      throw new Error('Esse usuário não existe!');
    }
    if (userCpfAlreadyExists) {
      throw new Error('Cpf already exists.')
    }
    if (emailAlreadyExists) {
      throw new Error('Email already exists.')
    }
    if (userNameAlreadyExists) {
      throw new Error('Username already exists.')
    }
    
    return await this.userRepository.updateProfile(id, data)
  }
}
