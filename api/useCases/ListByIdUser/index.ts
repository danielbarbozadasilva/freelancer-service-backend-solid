import { UserDBRepository } from '../../repositories/implementations/UserDBRepository'
import { ListByIdUserController } from './ListByIdUserController'
import { ListByIdUserUseCase } from './ListByIdUserUseCase'

const mongoUserRepository = new UserDBRepository()
const listByIdUserUseCase = new ListByIdUserUseCase(mongoUserRepository)
const listByIdUserController = new ListByIdUserController(listByIdUserUseCase)

export { listByIdUserUseCase, listByIdUserController }
