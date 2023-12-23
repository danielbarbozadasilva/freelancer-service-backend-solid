import { SignInRepository } from '../../repositories/implementations/SignInDBRepository'
import { SignInController } from './SignInController'
import { SignInUseCase } from './SignInUseCase'

const signInRepository = new SignInRepository()
const signInUseCase = new SignInUseCase(signInRepository)
const signInController = new SignInController(signInUseCase)

export { signInUseCase, signInController }
