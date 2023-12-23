import { ISignInRepository } from '../../repositories/ISignInRepository'
import { SignInDTO } from './SignInDTO'

export class SignInUseCase {
  constructor(private signInRepository: ISignInRepository) {}

  async execute(data: SignInDTO) {
    const isValid = await this.signInRepository.verifyCredentials(
      data.username,
      data.password
    )

    if (!isValid) {
      throw new Error('Invalid username or password.')
    }

    return this.signInRepository.authenticate(data.username)
  }
}
