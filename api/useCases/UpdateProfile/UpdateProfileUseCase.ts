import { IUserRepository } from '../../repositories/IUsersRepository'
import { IUpdateProfileRequestDTO } from './UpdateProfileDTO'

export class UpdateProfileUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, data: IUpdateProfileRequestDTO) {
    return this.userRepository.updateProfile(id, data)
  }
}
