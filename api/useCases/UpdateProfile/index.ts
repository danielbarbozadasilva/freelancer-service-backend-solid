import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { UpdateProfileController } from './UpdateProfileController'
import { UpdateProfileUseCase } from './UpdateProfileUseCase'

const mongoUserRepository = new UserDBRepository()
const updateProfileUseCase = new UpdateProfileUseCase(mongoUserRepository)
const updateProfileController = new UpdateProfileController(updateProfileUseCase)

export { updateProfileUseCase, updateProfileController }
