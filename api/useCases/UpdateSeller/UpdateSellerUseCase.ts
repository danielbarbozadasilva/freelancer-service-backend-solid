import { IUserRepository } from '../../repositories/IUsersRepository'

export class UpdateSellerUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, isSeller: boolean) {
    return this.userRepository.updateSeller(id, isSeller)
  }
}
