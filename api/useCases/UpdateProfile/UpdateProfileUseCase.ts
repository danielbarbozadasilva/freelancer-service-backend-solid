import { IUserRepository } from '../../repositories/IUsersRepository'
import { IUpdateProfileRequestDTO } from './UpdateProfileDTO'

export class UpdateProfileUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, data: IUpdateProfileRequestDTO) {
    const userExists: boolean = await this.userRepository.verifyIdUserExists(id)

    if (!userExists){
      throw new Error('Esse usuário não existe!');
    }
    
    return await this.userRepository.updateProfile(id, data)
  }
}
