import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { UpdateProfileController } from './UpdateProfileController'
import { UpdateProfileUseCase } from './UpdateProfileUseCase'
import S3Storage from '../../providers/implementations/S3Storage'

const mongoUserRepository = new UserDBRepository()
const s3 = new S3Storage()
const updateProfileUseCase = new UpdateProfileUseCase(mongoUserRepository, s3)
const updateProfileController = new UpdateProfileController(updateProfileUseCase)

export { updateProfileUseCase, updateProfileController }
