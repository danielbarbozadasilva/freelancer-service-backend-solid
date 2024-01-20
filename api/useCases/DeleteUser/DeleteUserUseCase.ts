import { IUserRepository } from '../../repositories/IUsersRepository'

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    return this.userRepository.deleteUser(id)
  }
}
