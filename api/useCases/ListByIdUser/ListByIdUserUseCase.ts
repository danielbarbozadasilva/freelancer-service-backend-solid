import { IUserRepository } from '../../repositories/IUsersRepository'

export class ListByIdUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    return await this.userRepository.listByIdUser(id)
  }
}
