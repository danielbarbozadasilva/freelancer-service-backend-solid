import { User } from '../../entities/User'
import { IUserRepository } from '../../repositories/IUsersRepository'
import { IListAllUsersRequestDTO } from './ListAllUsersDTO'

export class ListAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    const data = await this.userRepository.listAllUsers()
    return data
  }
}
