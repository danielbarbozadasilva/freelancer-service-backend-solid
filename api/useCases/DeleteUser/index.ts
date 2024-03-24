import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserUseCase } from './DeleteUserUseCase'

const mongoUserRepository = new UserDBRepository()
const deleteUserUseCase = new DeleteUserUseCase(mongoUserRepository)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserUseCase, deleteUserController }
