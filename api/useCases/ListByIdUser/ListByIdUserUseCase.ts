import { IUserRepository } from '../../repositories/IUsersRepository'

export class ListByIdUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    return this.userRepository.listByIdUser(id)
  }
}
