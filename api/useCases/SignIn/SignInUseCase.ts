import { ISignInRepository } from '../../repositories/ISignInRepository'
import { SignInDTO } from './SignInDTO'

export class SignInUseCase {
  constructor(private signInRepository: ISignInRepository) {}

  async execute(data: SignInDTO) {
    const isValid = await this.signInRepository.verifyCredentials(
      data.email,
      data.password
    )

    if (!isValid) {
      throw new Error('Invalid email or password.')
    }

    return await this.signInRepository.authenticate(data.email)
  }
}
