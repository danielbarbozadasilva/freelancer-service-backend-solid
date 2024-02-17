import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { RegisterController } from './RegisterController'
import { RegisterUseCase } from './RegisterUseCase'

const mailtrapMailProvider = new MailtrapMailProvider()
const mongoUserRepository = new UserDBRepository()
const registerUseCase = new RegisterUseCase(mongoUserRepository, mailtrapMailProvider)
const registerController = new RegisterController(registerUseCase)

export { registerUseCase, registerController }
