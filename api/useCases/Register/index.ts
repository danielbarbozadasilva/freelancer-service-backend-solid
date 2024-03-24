import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { RegisterController } from './RegisterController'
import { RegisterUseCase } from './RegisterUseCase'
import S3Storage from '../../providers/implementations/S3Storage'

const mailtrapMailProvider = new MailtrapMailProvider()
const s3 = new S3Storage()
const mongoUserRepository = new UserDBRepository()
const registerUseCase = new RegisterUseCase(mongoUserRepository, mailtrapMailProvider, s3)
const registerController = new RegisterController(registerUseCase)

export { registerUseCase, registerController }
