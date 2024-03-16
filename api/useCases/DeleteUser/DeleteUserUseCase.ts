import { IUserRepository } from '../../repositories/IUsersRepository'

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    const userExists: boolean = await this.userRepository.verifyIdUserExists(id)
    if(!userExists){
      throw new Error('Esse usuário não existe!');
    }
    return await this.userRepository.deleteUser(id)
  }
}
