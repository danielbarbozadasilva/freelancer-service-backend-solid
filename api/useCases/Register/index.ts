import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { RegisterController } from './RegisterController'
import { RegisterUseCase } from './RegisterUseCase'

const mongoUserRepository = new UserDBRepository()
const registerUseCase = new RegisterUseCase(mongoUserRepository)
const registerController = new RegisterController(registerUseCase)

export { registerUseCase, registerController }
