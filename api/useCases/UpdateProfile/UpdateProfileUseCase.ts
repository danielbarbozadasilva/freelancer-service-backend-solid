import { IUserRepository } from '../../repositories/IUsersRepository'
import { IUpdateProfileRequestDTO } from './UpdateProfileDTO'
import S3Storage from '../../providers/implementations/S3Storage'

export class UpdateProfileUseCase {
  constructor(
    private userRepository: IUserRepository,
    private s3: S3Storage
  ) {}

  async execute(id: string, data: IUpdateProfileRequestDTO) {
    const userExists: boolean = await this.userRepository.verifyIdUserExists(id)

    if (!userExists) {
      throw new Error('Esse usuário não existe!')
    }
    
    await this.userRepository.updateProfile(id, data)

    await this.s3.saveFile(data.picture)
  }
}
