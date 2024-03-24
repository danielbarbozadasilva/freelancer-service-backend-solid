import { IUserRepository } from '../../repositories/IUsersRepository'

export class UpdateSellerUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, isSeller: boolean) {
    const userExists: boolean = await this.userRepository.verifyIdUserExists(id)
    if(!userExists){
      throw new Error('Esse usuário não existe!');
    }
    return this.userRepository.updateSeller(id, isSeller)
  }
}
