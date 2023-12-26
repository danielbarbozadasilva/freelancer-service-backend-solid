import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { ListAllUsersController } from './ListAllUsersController'
import { ListAllUsersUseCase } from './ListAllUsersUseCase'

const mongoUserRepository = new UserDBRepository()
const listAllUsersUseCase = new ListAllUsersUseCase(mongoUserRepository)
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase)

export { listAllUsersUseCase, listAllUsersController }
